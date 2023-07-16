'use client';

import { Markdown } from './markdown-viewer';

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
                    rows={5}
                    className="w-full"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="flex-1 p-2">
                <Markdown>{value}</Markdown>
            </div>
        </div>
    );
}
