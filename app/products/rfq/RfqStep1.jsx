// app/products/rfq/RfqStep1.jsx
"use client";

import SelectedProductRow from "./SelectedProductRow";
import { motion } from "framer-motion";

export default function RfqStep1({
  products,
  selected,
  setSelected,
  keyCounter,

  targetDate,
  setTargetDate,
  deliveryCity,
  setDeliveryCity,
  deliveryCountry,
  setDeliveryCountry,

  step1Valid,
  onNext,
}) {
  // Count how many times a product is in selected
  const countSelected = (productId) =>
    selected.filter((s) => s.productId === productId).length;

  // Always add a NEW entry (even if same product exists)
  const addProduct = (productId) => {
    keyCounter.current += 1;
    setSelected((prev) => [
      ...prev,
      { key: keyCounter.current, productId, gsm: "", qty: "", unit: "tons" },
    ]);
  };

  const removeEntry = (key) => {
    setSelected((prev) => prev.filter((x) => x.key !== key));
  };

  const updateEntry = (key, patch) => {
    setSelected((prev) =>
      prev.map((x) => (x.key === key ? { ...x, ...patch } : x))
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Left: Product list */}
      <div className="min-w-0">
        <h2 className="text-lg font-semibold">1) Select Products</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Click + to add a product. You can add the same product multiple times with different specs.
        </p>

        <div className="mt-5 space-y-3">
          {products.map((p) => {
            const count = countSelected(p.id);
            const isSelected = count > 0;

            return (
              <div
                key={p.id}
                className={`w-full overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:shadow-md
                  ${isSelected ? "border-[#01646e]/30 bg-[#01646e]/5" : "border-neutral-200 bg-white"}`}
              >
                <div className="flex w-full sm:items-center gap-3">
                  {/* Thumb */}
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="text-sm font-semibold">{p.name}</span>
                      <span className="rounded-full bg-neutral-200 sm:bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
                        {p.category}
                      </span>
                      {/* X Times Selected badge */}
                      {isSelected && (
                        <span className="rounded-full bg-[#01646e]/10 px-2 py-0.5 text-xs font-medium text-[#01646e]">
                          {count}× Selected
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-neutral-600 overflow-hidden text-ellipsis">
                      <span className="block break-words [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                        {p.subtitle} • {p.usage}
                      </span>
                    </p>
                  </div>

                  {/* Always + button */}
                  <div className="ml-auto shrink-0">
                    <motion.button
                      type="button"
                      onClick={() => addProduct(p.id)}
                      whileTap={{ scale: 0.92 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border transition-all duration-200 border-neutral-300 bg-white text-neutral-700 hover:border-[#01646e] hover:text-[#01646e]"
                      aria-label={`Add ${p.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M12 4.5a.75.75 0 01.75.75v6h6a.75.75 0 010 1.5h-6v6a.75.75 0 01-1.5 0v-6h-6a.75.75 0 010-1.5h6v-6A.75.75 0 0112 4.5z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Requirements */}
      <div className="min-w-0">
        <h2 className="text-lg font-semibold">2) Requirements</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Provide quantities and delivery requirements.
        </p>

        {/* Selected product rows */}
        <div className="mt-5 rounded-2xl md:border md:border-neutral-200 md:p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Selected Products</h3>
            <span className="text-xs text-neutral-600">{selected.length} selected</span>
          </div>

          {selected.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-600">No products selected yet.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {selected.map((s) => (
                <SelectedProductRow
                  key={s.key}
                  item={s}
                  products={products}
                  onRemove={() => removeEntry(s.key)}
                  onChange={(patch) => updateEntry(s.key, patch)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Delivery fields */}
        <div className="mt-5 grid gap-4 rounded-2xl border border-neutral-200 p-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-neutral-700">Target delivery date</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-700">Delivery city</label>
            <input
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
              placeholder="e.g., Jeddah"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-xs font-medium text-neutral-700">Delivery country</label>
            <input
              value={deliveryCountry}
              onChange={(e) => setDeliveryCountry(e.target.value)}
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#01646e]"
              placeholder="e.g., Saudi Arabia"
            />
          </div>
        </div>

        {!step1Valid && (
          <p className="mt-3 text-sm text-amber-700">
            {selected.length === 0
              ? "Select at least one product to continue."
              : "Please fill all fields including GSM and quantity for each product."}
          </p>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onNext}
            disabled={!step1Valid}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition
              ${step1Valid
                ? "bg-[#01646e] text-white hover:opacity-90"
                : "cursor-not-allowed bg-neutral-200 text-neutral-500"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
