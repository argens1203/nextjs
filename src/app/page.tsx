'use client';
import { useEffect, useState } from 'react';
import { getBlogs } from '../firestore/blog';
import { Blog } from '@/entities/blog.entity';
import { BlogElement } from './blog-element';

export default function Bal() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        getBlogs().then(setBlogs);
    }, []);
    return (
        <div>
            {blogs.map((blog: Blog, idx) => (
                <BlogElement key={idx} blog={blog} />
            ))}
        </div>
    );
}
