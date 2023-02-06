'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import NavBar from '@/common/components/layout.tsx/navBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <div>
        <SessionProvider>
          <body>
            <NavBar></NavBar>
            {children}
          </body>
        </SessionProvider>
      </div>
    </html>
  );
}
