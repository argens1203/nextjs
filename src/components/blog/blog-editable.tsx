'use client';

import { MarkdownWithPreview } from '../markdown';

type Props = {
    title: string;
    onTitleChange: (newTitle: string) => void;
    content: string;
    onContentChange: (newTitle: string) => void;
};

export function BlogEditable(props: Props) {
    const { title, content, onTitleChange, onContentChange } = props;
    return (
        <div>
            <div className="p-2">
                <p>Title</p>
                <input
                    className="w-full"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
            </div>
            <div className="p-2">
                <p>Content</p>
                <MarkdownWithPreview
                    value={content}
                    setValue={onContentChange}
                />
            </div>
        </div>
    );
}
