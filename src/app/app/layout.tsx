import Link from 'next/link';
import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
          <Link href="/app" className="font-semibold">Dashboard</Link>
          <nav className="text-sm text-stone-600 flex gap-4">
            <Link href="/app">Home</Link>
            <Link href="/app/dept/demo">Afdeling</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-6">{children}</main>
    </div>
  );
}
