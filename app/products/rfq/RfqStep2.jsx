"use client";

export default function RfqStep2({
  fullName,
  setFullName,
  companyName,
  setCompanyName,
  businessEmail,
  setBusinessEmail,
  phoneNumber,
  setPhoneNumber,
  industry,
  setIndustry,
  step2Valid,
  onBack,
  onSubmit,
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-lg font-semibold">Contact Details</h2>
      <p className="mt-1 text-sm text-neutral-600">We’ll use this information to send your quote.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-xs font-medium text-neutral-700">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Your full name"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-medium text-neutral-700">Company Name</label>
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Company"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-700">Business Email</label>
          <input
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-700">Phone Number</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="+966..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-medium text-neutral-700">Industry</label>
          <input
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="e.g., Packaging, Food, FMCG..."
          />
        </div>
      </div>

      {!step2Valid && (
        <p className="mt-3 text-sm text-amber-700">Please fill all contact fields before submitting.</p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!step2Valid}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition
            ${step2Valid ? "bg-[#01646e] text-white hover:opacity-90" : "cursor-not-allowed bg-neutral-200 text-neutral-500"}`}
        >
          Submit RFQ
        </button>
      </div>
    </div>
  );
}