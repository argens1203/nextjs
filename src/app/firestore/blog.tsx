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

const getDateTime = () => DateTime.now().setZone('Asia/Hong_Kong');

const BLOGS: Blog[] = [
    {
        title: 'NextJS Day 1',
        content: [
            <>
                {
                    'NextJS uses a folder based routing, and thus a nested folder by default has a one-to-one mapping with a nested route. The page rendered at any level is equal to the overlay of page.{js, ts, jsx, tsx} over all layout.{js, ts, jsx, tsx} of all the subsequent parent routes.'
                }
            </>,
            <>
                To bypass this mechanism, there are also <b>Dynamic Routes</b>,
                which reuses same layout / page for an array of similar
                contents, and <b>Route Groups</b>, which reuses layout for
                virtual parent path.
            </>,
            <>
                For example, folder structure a/(b)/c could map to a/c, with b
                being a logical placeholder or a place for common layout.
            </>,
        ],
        createdAt: DateTime.utc(2023, 7, 5, 14, 44, 30).setZone(
            'Asia/Hong_Kong'
        ),
        lastUpdatedAt: DateTime.utc(2023, 7, 5, 14, 44, 30).setZone(
            'Asia/Hong_Kong'
        ),
    },
    {
        title: 'On Writing Well',
        content: [
            <>
                A very interesting book with a relativel simple premise. Cut the
                slack. At least that's what it was all about in the first 4
                chapters. In that sense, it was ironic. Starting there, it
                allows (todo: better word) the reader to add back their personal
                flavor.
            </>,
        ],
        createdAt: DateTime.utc(2023, 7, 5, 15, 0, 10).setZone(
            'Asia/Hong_Kong'
        ),
        lastUpdatedAt: DateTime.utc(2023, 7, 5, 15, 0, 10).setZone(
            'Asia/Hong_Kong'
        ),
    },
    {
        title: 'Firebase Day 1',
        content: [],
        createdAt: getDateTime(),
        lastUpdatedAt: getDateTime(),
    },
];

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
