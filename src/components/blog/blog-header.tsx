'use client';

import { useCallback, useContext, useState } from 'react';
import { BlogContext } from './blog-context-provider';
import { migrateFromBlog } from '@/firestore/topic';

export function BlogHeader() {
    const { idsChosen } = useContext(BlogContext);
    const [sending, setSending] = useState(false);
    const send = useCallback(() => {
        setSending(true);
        Promise.all(idsChosen.map((id) => migrateFromBlog(id)))
            .then(console.log)
            .finally(() => setSending(false));
    }, [idsChosen]);
    return (
        <div>
            <button onClick={send}>{sending ? 'Sending' : 'Send'}</button>
            <p>{idsChosen.join(',')}</p>
        </div>
    );
}
