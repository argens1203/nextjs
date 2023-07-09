'use client';
import { ReactElement, useEffect, useState } from 'react';
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

class Blog {
    title: string = '';
    content: ReactElement[] = [];
    createdAt: DateTime = DateTime.now();
    lastUpdatedAt: DateTime = DateTime.now();
}

export async function getBlogs() {
    const blogRef = collection(db, 'blog');
    const q = query(blogRef, orderBy('createdAt', 'desc'), limit(3));
    const docs = await getDocs(q);
    return docs.docs.map((d) => ({
        ...d.data(),
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
