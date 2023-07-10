import { DateTime } from 'luxon';
import { Blog } from '@/entities/blog.entity';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export function BlogElement({ blog }: { blog: Blog }) {
    const { title, content, lastUpdatedAt, createdAt } = blog;
    return (
        <div className="p-3 border-b-2">
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
        </div>
    );
}
