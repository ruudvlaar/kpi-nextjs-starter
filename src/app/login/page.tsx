'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/app';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const origin = window.location.origin; // jouw vercel-domein
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}${redirect}`, // <-- de fix
      },
    });
    if (error) alert(error.message);
    else alert('Magic link verstuurd. Check je mail.');
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 420, margin: '3rem auto' }}>
      <input
        type="email"
        placeholder="jj@bedrijf.nl"
        value={email}
        onChange={(e) => setEmai
