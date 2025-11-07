'use client';
import { useState, useTransition } from 'react';
import { addKpiValue } from '@/app/actions/kpi';

export function KpiValueForm({ kpi_id, org_id, dept_id, period_start, period_end }:{ kpi_id:string; org_id:string; dept_id:string; period_start:string; period_end:string; }){
  const [value, setValue] = useState('');
  const [pending, startTransition] = useTransition();

  const submit = () => {
    const val = Number(value);
    if (Number.isNaN(val)) return alert('Voer een getal in');
    startTransition(async () => {
      try {
        await addKpiValue({ kpi_id, org_id, dept_id, period_start, period_end, value: val });
        setValue('');
        alert('Ingevuld!');
      } catch (e:any) {
        alert(e.message || 'Fout bij opslaan');
      }
    });
  };

  return (
    <div className="card mt-4">
      <div className="card-pad">
        <div className="flex gap-2">
          <input className="border rounded-md px-3 py-2 w-40" value={value} onChange={e=>setValue(e.target.value)} placeholder="Waarde" />
          <button onClick={submit} disabled={pending} className="px-4 py-2 rounded-md bg-black text-white">{pending?'Bezig…':'Opslaan'}</button>
        </div>
        <p className="text-xs text-stone-500 mt-2">Periode: {period_start} t/m {period_end}</p>
      </div>
    </div>
  );
}
