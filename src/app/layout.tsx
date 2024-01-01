import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppProvider } from '@/components/provider/app-provider';
import { inter } from '@/lib/fonts';

import '@/styles/app.css';

export const metadata: Metadata = {
    title: 'Next App',
    description: 'NextJS application.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
