import { ReactElement } from 'react';

type Props = {
    to: string;
    children: ReactElement | ReactElement[] | null;
};

export function Link(props: Props) {
    const { to, children } = props;
    return (
        <a
            href={to}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
