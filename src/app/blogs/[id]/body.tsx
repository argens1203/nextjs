'use client';

import { BlogEditable } from '@/app/blog-editable';
import { editBlog } from '@/firestore/blog';
import { useState } from 'react';

type Props = {
    blog: { title: string; content: string; id: string };
};

export function BlogPageBody(props: Props) {
    const { blog } = props;
    const { title: _title, content: _content, id } = blog;

    const [title, setTitle] = useState(_title);
    const [content, setContent] = useState(_content);
    const [updating, setUpdating] = useState(false);

    const update = () => {
        setUpdating(true);
        editBlog(id, { title, content }).finally(() => {
            setUpdating(false);
        });
    };

    return (
        <div>
            <button className="w-full p-5" onClick={update} disabled={updating}>
                <div className="bg-black text-white">
                    {updating ? 'Updating' : 'Update'}
                </div>
            </button>
            <BlogEditable
                content={content}
                title={title}
                onContentChange={setContent}
                onTitleChange={setTitle}
            />
        </div>
    );
}
