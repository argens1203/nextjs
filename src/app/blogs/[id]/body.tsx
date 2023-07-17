'use client';

import { BlogEditable } from '@/components/blog';
import { editBlog } from '@/firestore/blog';
import { useState } from 'react';
import { Button } from '../button';

type Props = {
    blog: {
        title: string;
        content: string;
        id: string;
    };
};

export function BlogPageBody(props: Props) {
    const { blog } = props;
    const { title: _title, content: _content, id } = blog;

    const [title, setTitle] = useState(_title);
    const [content, setContent] = useState(_content);
    const [updating, setUpdating] = useState(false);
    const [moving, setMoving] = useState(false);

    const update = () => {
        setUpdating(true);
        editBlog(id, { title, content }).finally(() => {
            setUpdating(false);
        });
    };

    return (
        <div>
            <BlogEditable
                content={content}
                title={title}
                onContentChange={setContent}
                onTitleChange={setTitle}
            />
            <Button
                onClick={update}
                disabled={updating}
                label={updating ? 'Updating' : 'Update'}
            />
        </div>
    );
}
