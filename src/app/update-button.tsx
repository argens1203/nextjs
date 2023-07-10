'use client';

import { editBlog } from '../firestore/blog';

export function UpdateButton() {
    const update = () =>
        editBlog('wTC5k8r7AGE28Fa99ndW', { content: '**Hello** world' });
    return <button onClick={update}>update</button>;
}
