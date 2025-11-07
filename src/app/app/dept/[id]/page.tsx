import { supabaseServer } from '@/lib/supabase';
import { StatCard } from '@/components/StatCard';
import { KpiValueForm } from '@/components/KpiValueForm';

function fmt(v: any){
  if (v === null || v === undefined) return '-';
  if (typeof v === 'number') return v.toString();
  return String(v);
}

export default async function DeptPage({ params:{ id } }:{ params:{ id:string } }){
  const s = supabaseServer();

  // DEMO: org_id ophalen via eerste membership van user
  const { data: memb } = await s.from('v_my_memberships').select('org_id').limit(1).maybeSingle();
  if (!memb) {
    return <div className="text-stone-700">Geen organisatie gevonden voor deze gebruiker.</div>;
  }

  const org_id = memb.org_id;

  const { data: status } = await s.from('v_kpi_status')
    .select('*')
    .eq('org_id', org_id)
    .eq('dept_id', id);

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Afdeling #{id}</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {status?.map((row:any) => (
          <StatCard key={row.kpi_id} title={row.kpi_id} value={fmt(row.value)} status={row.status as -1|0|1} />
        ))}
      </div>

      {/* Eenvoudig invulformulier voorbeeld (kies eerste KPI uit status) */}
      {status && status[0] && (
        <KpiValueForm
          kpi_id={status[0].kpi_id}
          org_id={org_id}
          dept_id={id}
          period_start={status[0].period_start}
          period_end={status[0].period_end}
        />
      )}
    </div>
  );
}
