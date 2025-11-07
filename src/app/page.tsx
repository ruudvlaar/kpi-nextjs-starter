import Link from 'next/link';

export default function Landing() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold">KPI Dashboard Starter</h1>
      <p className="mt-3 text-stone-700">
        Log in om je afdelingsdashboard te bekijken en KPI-waarden in te voeren.
      </p>
      <div className="mt-6">
        <Link className="underline" href="/login">Naar login →</Link>
      </div>
    </main>
  );
}
