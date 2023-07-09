'use client';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
    value: string;
    setValue: (s: string) => void;
};

export function MarkdownWithPreview(props: Props) {
    const { value, setValue } = props;
    return (
        <div className="flex flex-row">
            <div className="flex-1 p-2">
                <textarea
                    className="w-full"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="flex-1 p-2">
                <ReactMarkdown>{value}</ReactMarkdown>
            </div>
        </div>
    );
}
