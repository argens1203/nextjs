import { ReactElement } from 'react';
import { DateTime } from 'luxon';
import { db } from './firestore.init';
import {
    collection,
    getDocs,
    query,
    orderBy,
    serverTimestamp,
    limit,
    addDoc,
} from 'firebase/firestore/lite';
import { Blog } from '@/entities/blog.entity';

export async function getBlogs(): Promise<Blog[]> {
    const blogRef = collection(db, 'blog');
    const q = query(blogRef, orderBy('createdAt', 'desc'), limit(3));
    const docs = await getDocs(q);
    return docs.docs.map((d) => ({
        title: d.data().title,
        content: d.data().content,
        createdAt: DateTime.fromJSDate(d.data().createdAt.toDate()),
        lastUpdatedAt: DateTime.fromJSDate(d.data().createdAt.toDate()),
        id: d.id,
    }));
}

export async function addBlog(title: string, content: string[]) {
    const blogRef = collection(db, 'blog');
    return await addDoc(blogRef, {
        title,
        content,
        createdAt: serverTimestamp(),
        lastUpdatedAt: serverTimestamp(),
    });
}

export async function editBlog(id: string, updates: Partial<Blog>) {
    throw new Error('Not Implemented');
}
