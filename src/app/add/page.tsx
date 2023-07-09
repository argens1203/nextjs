'use client';
import { useState } from 'react';
import { addBlog } from '../firestore/blog';

export default function AddPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const submit = () => {
        const trimmedContent = content
            .split('\n')
            .filter((s) => !!s)
            .map((s) => s.trim());
        addBlog(title, trimmedContent).then(() => {
            console.log('Ended');
            setTitle('');
            setContent('');
        });
    };
    return (
        <div className="flex flex-col">
            <div className="p-2">
                <button
                    className="w-full"
                    onClick={submit}
                    disabled={!title || !content}
                >
                    Submit
                </button>
            </div>
            <div className="p-2">
                <p>Title</p>
                <input
                    className="w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="p-2">
                <p>Content</p>
                <textarea
                    rows={5}
                    value={content}
                    className="w-full"
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        </div>
    );
}
