'use client';
import { useState } from 'react';
import { MarkdownWithPreview } from './markdown-with-preview';
export default function Markdown() {
    const [md, setMd] = useState('**Hello** World');
    return <MarkdownWithPreview value={md} setValue={setMd} />;
}
