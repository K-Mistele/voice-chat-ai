import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'
import {inter} from '@/lib/fonts'

export const metadata: Metadata = {
    title: "Private Siri",
    description: "Created by Constellate AI",
};

import {Sora} from 'next/font/google'

const sora = Sora({
    subsets: ['latin']
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn('min-h-screen bg-background font-sans antialiased w-full')}
            style={sora.style}
        >
        {children}
        </body>
        </html>
    );
}
