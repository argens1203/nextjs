import { DateTime } from 'luxon';
import { Blog } from '@/entities/blog.entity';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { MenuButton } from './menu-button';

export function BlogElement({ blog }: { blog: Blog }) {
    const { title, content, lastUpdatedAt, createdAt, id } = blog;
    return (
        <div
            className="
            flex flex-row
            p-3 border-b-2"
        >
            <Link
                href={`/blogs/${id}`}
                className="
            flex-1
            cursor-pointer
            hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-white-300
            w-full
            "
            >
                <div className="flex flex-row justify-between p-3">
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
            <MenuButton id={id} />
        </div>
    );
}
