import '@/styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'KPI Dashboard',
  description: 'Next.js + Supabase starter',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
