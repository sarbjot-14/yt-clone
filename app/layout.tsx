'use client';
import './globals.css';
import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import NavBar from '@/common/components/layout/navBar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>
      <div>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <body>
              <NavBar></NavBar>
              {children}
            </body>
          </SessionProvider>
        </QueryClientProvider>
      </div>
    </html>
  );
}
