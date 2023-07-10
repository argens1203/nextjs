import { DateTime } from 'luxon';
import { Blog } from '@/entities/blog.entity';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export function BlogElement({ blog }: { blog: Blog }) {
    const { title, content, lastUpdatedAt, createdAt, id } = blog;
    console.log(id);
    return (
        <div
            className="p-3 border-b-2
        cursor-pointer
        hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-white-300"
        >
            <Link href={`/blogs/${id}`}>
                <div className="flex flex-row justify-between w-full p-3">
                    <div>{title}</div>
                    <div>
                        <div>
                            {`Created: ${createdAt
                                .setLocale('zh-tw')
                                .toLocaleString(DateTime.DATETIME_SHORT)}`}
                        </div>
                        <div>
                            {`Last updated: ${lastUpdatedAt
                                .setLocale('zh-tw')
                                .toLocaleString(DateTime.DATETIME_SHORT)}`}
                        </div>
                    </div>
                </div>
                <div>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </Link>
        </div>
    );
}
