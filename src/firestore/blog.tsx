import { cache } from 'react';
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
    updateDoc,
    doc,
    where,
    getDoc,
    deleteDoc,
} from 'firebase/firestore/lite';
import { Blog } from '@/entities/blog.entity';

export const getBlogs = cache(async () => {
    console.log('Getting Blogs');
    const blogRef = collection(db, 'blog').withConverter(blogConverter);
    return await getDocs(
        query(blogRef, orderBy('createdAt', 'desc'), limit(30))
    )
        .then((temp) => temp.docs.map((s) => s.data()))
        .catch(() => []);
});

export const getBlog = cache(async (id: string) => {
    console.log('Getting Blog: ' + id);
    const docRef = doc(db, 'blog', id).withConverter(blogConverter);
    return await getDoc(docRef).then((snapShot) => snapShot.data());
});

export async function addBlog(title: string, content: string) {
    console.log('Adding Blogs');
    const blogRef = collection(db, 'blog');
    return await addDoc(blogRef, {
        title,
        content,
        createdAt: serverTimestamp(),
        lastUpdatedAt: serverTimestamp(),
    });
}

export async function editBlog(id: string, updates: Partial<Blog>) {
    console.log('Editing Blogs');
    const blogRef = collection(db, 'blog').withConverter(blogConverter);
    return await updateDoc(doc(blogRef, id), {
        ...updates,
        lastUpdatedAt: serverTimestamp(),
    });
}

export async function deleteBlog(id: string) {
    console.log('Adding Blogs');
    return await deleteDoc(doc(db, 'blog', id));
}

const blogConverter = {
    toFirestore(blog: Blog): DocumentData {
        return blog.toDocData();
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Blog {
        return Blog.fromSnapshot(snapshot);
    },
};
