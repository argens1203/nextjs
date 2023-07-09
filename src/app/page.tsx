'use client';
import { serverTimestamp } from 'firebase/firestore/lite';
import { DateTime } from 'luxon';
import { ReactElement, useEffect, useState } from 'react';
import { addBlog, getBlogs } from './firestore/blog';
type BlogT = {
    title: string;
    content: ReactElement[];
    createdAt: DateTime;
    lastUpdatedAt: DateTime;
};

function Blog({ blog }: { blog: BlogT }) {
    const { title, content, lastUpdatedAt } = blog;
    return (
        <div className="p-3 border-b-2">
            <div className="flex flex-row justify-between w-full p-3">
                <div>{title}</div>
                <div>
                    {lastUpdatedAt
                        .setLocale('zh-tw')
                        .toLocaleString(DateTime.DATETIME_SHORT)}
                </div>
            </div>
            <div>
                {content.map((c, idx) => (
                    <p key={idx} className="pb-3">
                        {c}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default function Bal() {
    const [blogs, setBlogs] = useState<BlogT[]>([]);
    useEffect(() => {
        getBlogs().then(setBlogs);
    }, []);
    return (
        <div>
            <button
                onClick={() => {
                    addBlog('Title', ['content1', 'content2']);
                }}
            >
                hello
            </button>
            <div>
                {blogs.map((blog: BlogT, idx) => (
                    <Blog key={idx} blog={blog} />
                ))}
            </div>
        </div>
    );
}
