import Link from "next/link";

export default function WhistleblowerCtaSection({
  className = "",
  title = "Whistleblower",
  description = "We are committed to integrity and accountability. If you have a concern or wish to report misconduct, you can submit a confidential report through our Whistleblower Form.",
  ctaLabel = "Go to Whistleblower Form",
  href = "/whistleblower",
}) {
  return (
    <section className={`${className}`}>
      <div className="mx-auto max-w-7xl pt-10 pb-20">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-neutral-900">{title}</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">{description}</p>

          <div className="mt-6">
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-lg bg-[#01646e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#014f57]"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}