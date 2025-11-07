import clsx from 'classnames';

export function StatCard({ title, value, status }: { title: string; value: string; status: -1|0|1; }) {
  const badge = status === 1 ? 'bg-green-100 text-green-700'
              : status === -1 ? 'bg-red-100 text-red-700'
              : 'bg-stone-100 text-stone-700';
  const label = status === 1 ? 'OK' : status === -1 ? 'Onder target' : 'Geen target';
  return (
    <div className="card">
      <div className="card-pad">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className={clsx('px-2 py-1 rounded-md text-xs', badge)}>{label}</span>
        </div>
        <div className="mt-4 text-3xl font-semibold tabular-nums">{value}</div>
      </div>
    </div>
  );
}
