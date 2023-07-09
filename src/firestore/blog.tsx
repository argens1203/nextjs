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
    DocumentData,
    QueryDocumentSnapshot,
} from 'firebase/firestore/lite';
import { Blog } from '@/entities/blog.entity';

export async function getBlogs(): Promise<Blog[]> {
    const blogRef = collection(db, 'blog').withConverter(blogConverter);
    const temp = await getDocs(
        query(blogRef, orderBy('createdAt', 'desc'), limit(3))
    );
    return temp.docs.map((s) => s.data());
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

const blogConverter = {
    toFirestore(blog: Blog): DocumentData {
        return blog.toDocData();
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Blog {
        return Blog.fromSnapshot(snapshot);
    },
};
