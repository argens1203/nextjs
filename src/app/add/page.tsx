'use client';
import { useState } from 'react';

import { addBlog } from '../../firestore/blog';
import { BlogEditable } from '../../components/blog';

export default function AddPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const submit = () => {
        addBlog(title, content).then(() => {
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
            <BlogEditable
                title={title}
                content={content}
                onTitleChange={setTitle}
                onContentChange={setContent}
            />
        </div>
    );
}
