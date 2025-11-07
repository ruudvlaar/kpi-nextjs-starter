'use client';

import { createClient } from '@supabase/supabase-js';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const redirect = searchParams.get('redirect') || '/app';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const origin = window.location.origin;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}${redirect}`, // <-- gebruik de queryparam
      },
    });
    if (error) alert(error.message);
    else alert('Magic link verstuurd. Check je mail!');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="jj@bedrijf.nl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Stuur magic link</button>
    </form>
  );
}
