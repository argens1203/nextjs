'use client';
import { useState } from 'react';
import { MarkdownWithPreview } from '@/components/markdown';
export default function Markdown() {
    const [md, setMd] = useState('**Hello** World');
    return <MarkdownWithPreview value={md} setValue={setMd} />;
}
