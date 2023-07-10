import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from './nav-bar';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen items-center justify-between">
                    <div className="flex w-full justify-center text-align-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get started by editing&nbsp;
                        <code className="font-mono font-bold">
                            src/app/page.tsx
                        </code>
                    </div>
                    <div className="relative flex flex-row flex-1 w-full">
                        <div className="align-self-start bg-black text-white">
                            <NavBar />
                        </div>
                        <div className="flex-1">
                            <Suspense fallback={'Loading'}>{children}</Suspense>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
