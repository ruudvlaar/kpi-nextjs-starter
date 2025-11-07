import Link from 'next/link';

export default function AppHome() {
  return (
    <div className="grid gap-6">
      <div className="card">
        <div className="card-pad">
          <h2 className="text-xl font-semibold">Welkom</h2>
          <p className="text-stone-700 mt-1">
            Ga naar een afdeling om KPI-status te bekijken.
          </p>
          <div className="mt-3">
            <Link className="underline" href="/app/dept/demo">Naar demo-afdeling →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
