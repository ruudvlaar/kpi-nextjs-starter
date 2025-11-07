'use server';

import { supabaseServer } from '@/lib/supabase';

export async function addKpiValue(payload: {
  kpi_id: string, org_id: string, dept_id: string,
  period_start: string, period_end: string, value: number
}) {
  const s = supabaseServer();
  const { data: { user }, error: uerr } = await s.auth.getUser();
  if (uerr) throw uerr;
  if (!user) throw new Error('Niet ingelogd');

  const { error } = await s.from('kpi_values').insert({
    ...payload,
    entered_by: user.id
  });
  if (error) throw error;
  return { ok: true };
}
