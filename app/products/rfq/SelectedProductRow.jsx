"use client";

const UNITS = [
  { value: "tons", label: "Tons" },
  { value: "rolls", label: "Rolls" },
  { value: "sheets", label: "Sheets" },
];

export default function SelectedProductRow({ item, products, onRemove, onChange }) {
  const p = products.find((x) => x.id === item.productId);

  return (
    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold">{p?.name}</div>
          <div className="text-xs text-neutral-600">{p?.subtitle}</div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-lg px-2 py-1 text-xs font-medium text-neutral-700 hover:bg-white"
        >
          Remove
        </button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <label className="text-xs font-medium text-neutral-700">Required quantity</label>
          <input
            type="number"
            min="0"
            step="any"
            value={item.qty}
            onChange={(e) => onChange({ qty: e.target.value })}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="e.g., 25"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-700">Unit</label>
          <select
            value={item.unit}
            onChange={(e) => onChange({ unit: e.target.value })}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
          >
            {UNITS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}