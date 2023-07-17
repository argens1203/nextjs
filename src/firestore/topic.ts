import { db } from './firestore.init';
import { collection, addDoc, Timestamp } from 'firebase/firestore/lite';
import { Blog } from '@/entities/blog.entity';
import { getBlogMap } from './blog';

const TOPIC = 'topic';
const BLOG = 'blog';
const UNSORTED = 'unsorted';

export async function migrateFromBlog(id: string) {
    console.log('Migrating from BLOG: ', id);
    const map = await getBlogMap();
    const blog = map[id];
    return await add(blog);
}

export async function add(blog: Blog) {
    console.log('Adding to TOPIC');
    const blogRef = collection(db, TOPIC, UNSORTED, BLOG);
    const { title, content, createdAt, lastUpdatedAt } = blog;
    return await addDoc(blogRef, {
        title,
        content,
        createdAt: Timestamp.fromDate(createdAt.toJSDate()),
        lastUpdatedAt: Timestamp.fromDate(lastUpdatedAt.toJSDate()),
    });
}
