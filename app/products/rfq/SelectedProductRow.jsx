// app/products/rfq/SelectedProductRow.jsx
"use client";

export default function SelectedProductRow({ item, products, onRemove, onChange }) {
  const product = products.find((p) => p.id === item.productId);
  if (!product) return null;

  const gsmOptions = product.basisWeightOptions ?? [];

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{product.name}</p>
          <p className="text-xs text-[#01646e] mt-0.5">{product.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="text-xs text-neutral-400 hover:text-red-500 transition shrink-0"
        >
          Remove
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Basis Weights / GSM dropdown — before quantity */}
        <div>
          <label className="text-xs font-medium text-neutral-700">Basis Weight / GSM</label>
          <select
            value={item.gsm}
            onChange={(e) => onChange({ gsm: e.target.value })}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
          >
            <option value="">Select GSM</option>
            {gsmOptions.map((gsm) => (
              <option key={gsm} value={gsm}>{gsm} GSM</option>
            ))}
          </select>
        </div>

        {/* Required quantity */}
        <div>
          <label className="text-xs font-medium text-neutral-700">Required quantity</label>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => onChange({ qty: e.target.value })}
            placeholder="e.g., 25"
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="text-xs font-medium text-neutral-700">Unit</label>
          <select
            value={item.unit}
            onChange={(e) => onChange({ unit: e.target.value })}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
          >
            <option value="tons">Tons</option>
            <option value="kg">KG</option>
            <option value="reams">Reams</option>
          </select>
        </div>
      </div>
    </div>
  );
}
