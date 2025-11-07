'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: (typeof window!=='undefined' ? window.location.origin : '') + '/app' } });
    if (!error) setSent(true);
    else alert(error.message);
  };

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Inloggen</h1>
      {sent ? (
        <p>Check je e-mail voor de magic link.</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="email"
            className="w-full border rounded-md p-3"
            placeholder="jij@bedrijf.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="px-4 py-2 rounded-md bg-black text-white">Stuur magic link</button>
        </form>
      )}
    </main>
  );
}
