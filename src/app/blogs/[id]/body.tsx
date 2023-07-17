'use client';

import { BlogEditable } from '@/components/blog';
import { editBlog } from '@/firestore/blog';
import { migrateFromBlog } from '@/firestore/topic';
import { useCallback, useState } from 'react';
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

    const moveToTag = useCallback(() => {
        setMoving(true);
        migrateFromBlog(id)
            .catch(console.log)
            .finally(() => {
                setMoving(false);
            });
    }, []);

    return (
        <div>
            <Button
                onClick={update}
                disabled={updating}
                label={updating ? 'Updating' : 'Update'}
            />
            <Button
                onClick={moveToTag}
                disabled={moving}
                label={moving ? 'Moving' : 'Move'}
            />
            <BlogEditable
                content={content}
                title={title}
                onContentChange={setContent}
                onTitleChange={setTitle}
            />
        </div>
    );
}
