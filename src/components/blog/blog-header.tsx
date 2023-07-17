'use client';

import { useContext } from 'react';
import { BlogContext } from './blog-context-provider';

export function BlogHeader() {
    const { idsChosen } = useContext(BlogContext);
    return <p>{idsChosen.join(',')}</p>;
}
