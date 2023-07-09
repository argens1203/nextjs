'use client';
import Link from 'next/link';

type Props = {
    href: string;
    text: string;
};
function Entry({ href, text }: Props) {
    return (
        <li className="pb-3 pt-2">
            <Link href={href}>{text}</Link>
        </li>
    );
}

export function NavBar() {
    return (
        <ul className="m-3">
            <Entry href={'/'} text={'All Blogs'} />
            <Entry href={'/add'} text={'New Blog'} />
        </ul>
    );
}
