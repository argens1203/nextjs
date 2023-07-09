import { DateTime } from 'luxon';
import { Blog } from '@/entities/blog.entity';

export function BlogElement({ blog }: { blog: Blog }) {
    const { title, content, lastUpdatedAt } = blog;
    return (
        <div className="p-3 border-b-2">
            <div className="flex flex-row justify-between w-full p-3">
                <div>{title}</div>
                <div>
                    {lastUpdatedAt
                        .setLocale('zh-tw')
                        .toLocaleString(DateTime.DATETIME_SHORT)}
                </div>
            </div>
            <div>
                {content.map((c, idx) => (
                    <p key={idx} className="pb-3">
                        {c}
                    </p>
                ))}
            </div>
        </div>
    );
}
