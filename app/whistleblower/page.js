"use client";

import { useMemo, useState } from "react";
import HeaderWhite from "@/components/Header/HeaderWhite";
import Footer from "@/components/Footer";
import BreadcrumbSection from "@/components/Breadcrumbs";

export default function WhistleblowerPage() {
  const entities = useMemo(
    () => ["MEPCO", "Wasco", "Juthoor", "Estidama", "PM5", "TM6"],
    []
  );

  const incidentTypes = useMemo(
    () => [
      "Fraudulent financial reporting",
      "Bribery and corruption",
      "Money laundering",
      "Manipulation of financial data",
      "Cyber breach",
      "Assets misappropriation",
      "Diversion of funds",
      "Conflict of interest",
      "Breach of Confidentiality",
      "Data manipulation (other than financial data)",
      "Data privacy laws Violations",
      "Workplace harassment",
      "Wrongful disciplinary termination",
      "System access control matters",
      "Labor related issues",
      "Other matters",
    ],
    []
  );

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowAnonymousEmail, setAllowAnonymousEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitMsg("");
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // If anonymous, enforce empty personal fields (except anonymousEmail if provided)
      if (isAnonymous) {
        formData.set("whistleblowerName", "");
        formData.set("phone", "");
        formData.set("email", "");
        if (!allowAnonymousEmail) formData.set("anonymousEmail", "");
      } else {
        // If not anonymous, don't send anonymousEmail
        formData.set("anonymousEmail", "");
      }

      formData.set("isAnonymous", String(isAnonymous));
      formData.set("allowAnonymousEmail", String(allowAnonymousEmail));

      const res = await fetch("/api/whistleblower", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit.");
      }

      form.reset();
      setIsAnonymous(false);
      setAllowAnonymousEmail(false);
      setSubmitMsg("Thank you. Your report has been submitted successfully.");
    } catch (err) {
      setSubmitMsg(
        err?.message ||
          "Something went wrong while submitting. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectClassName =
    "mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-10 text-sm outline-none focus:border-[#01646e] hover:border-[#01646e] appearance-none";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderWhite />

      <BreadcrumbSection
        className="bg-[#f9f8f3]"
        containerClassName="py-4"
        items={[{ label: "Home", href: "/" }, { label: "Whistleblower Form" }]}
      />

      <section className="w-full pb-6 bg-[#f9f8f3]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-4xl font-bold text-[#2d2d2d]">
            Whistleblower Form
          </h1>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Please provide as much detail as possible.
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
            <p className="text-neutral-800 font-semibold">Important Note:</p>
            <p className="mt-2 text-neutral-800 leading-relaxed text-[15px]">
              If you choose to submit anonymously, your personal data will not
              be collected. However, we will not be able to follow up with you
              for additional information or provide updates regarding the
              investigation. To enable communication while maintaining your
              anonymity, you may consider creating a temporary anonymous email
              address and providing it below. This email address will be used
              solely to update you on the status of the investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f8f3]">
        <div className="mx-auto max-w-7xl px-4 pb-12">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"
          >
            {/* Reporter details */}
            <div className="">
              <h2 className="text-xl font-semibold text-neutral-900">
                Reporter Details
              </h2>

              <label className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-800">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={isAnonymous}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setIsAnonymous(checked);
                    if (!checked) setAllowAnonymousEmail(false);
                  }}
                />
                Submit anonymously
              </label>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-neutral-800">
                  Full Name{" "}
                </label>
                <input
                  name="whistleblowerName"
                  type="text"
                  disabled={isAnonymous}
                  placeholder={isAnonymous ? "Disabled (anonymous)" : "Full name"}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none ${
                    isAnonymous
                      ? "bg-neutral-100 border-neutral-200 text-neutral-500"
                      : "bg-white border-neutral-300 focus:border-neutral-500"
                  }`}
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-neutral-800">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  disabled={isAnonymous}
                  placeholder={isAnonymous ? "Disabled (anonymous)" : "+966..."}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none ${
                    isAnonymous
                      ? "bg-neutral-100 border-neutral-200 text-neutral-500"
                      : "bg-white border-neutral-300 focus:border-neutral-500"
                  }`}
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-neutral-800">
                  Email
                </label>

                {/* Normal Email */}
                <input
                  name="email"
                  type="email"
                  disabled={isAnonymous}
                  placeholder={
                    isAnonymous ? "Disabled (anonymous)" : "name@company.com"
                  }
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none ${
                    isAnonymous
                      ? "bg-neutral-100 border-neutral-200 text-neutral-500"
                      : "bg-white border-neutral-300 focus:border-neutral-500"
                  }`}
                />

                {/* Anonymous follow-up option */}
                {isAnonymous && (
                  <div className="mt-3 rounded-lg bg-neutral-50 border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      You may consider creating a temporary anonymous email
                      address and providing it here, so we will be able to
                      follow up with you for additional information or provide
                      updates regarding the investigation.
                    </p>

                    <label className="mt-3 flex items-center gap-2 text-sm text-neutral-800">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={allowAnonymousEmail}
                        onChange={(e) =>
                          setAllowAnonymousEmail(e.target.checked)
                        }
                      />
                      Provide anonymous email for follow-up
                    </label>

                    <input
                      name="anonymousEmail"
                      type="email"
                      disabled={!allowAnonymousEmail}
                      placeholder={
                        allowAnonymousEmail
                          ? "Enter anonymous email address"
                          : "Anonymous email disabled"
                      }
                      className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm outline-none ${
                        allowAnonymousEmail
                          ? "bg-white border-neutral-300 focus:border-neutral-500"
                          : "bg-neutral-100 border-neutral-200 text-neutral-500"
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>

            <hr className="my-8 border-neutral-200" />

            {/* Questions */}
            <h2 className="text-xl font-semibold text-neutral-900">
              Incident Details
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1 */}
              <div>
                <label className="block text-sm font-medium text-neutral-800">
                  1. Where did the incident occur?
                </label>
                <div className="relative">
                  <select
                    name="entity"
                    required
                    defaultValue=""
                    className={selectClassName}
                  >
                    <option value="" disabled>
                      Select an entity
                    </option>
                    {entities.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="h-4 w-4 text-[#01646e]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div>
                <label className="block text-sm font-medium text-neutral-800">
                  2. What type of incident is this?
                </label>
                <div className="relative">
                  <select
                    name="incidentType"
                    required
                    defaultValue=""
                    className={selectClassName}
                  >
                    <option value="" disabled>
                      Select incident type
                    </option>
                    {incidentTypes.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="h-4 w-4 text-[#01646e]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div>
                <label className="block text-sm font-medium text-neutral-800">
                  6. When did this incident occur?
                </label>
                <input
                  name="incidentDate"
                  type="date"
                  className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
                />
              </div>

              {/* 5 */}
              <div>
                <label className="block text-sm font-medium text-neutral-800">
                  5. Has this matter report previously?
                </label>
                <div className="relative">
                  <select
                    name="reportedPreviously"
                    required
                    defaultValue=""
                    className={selectClassName}
                  >
                    <option value="" disabled>
                      Select Yes/No
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="h-4 w-4 text-[#01646e]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                3. What misconduct / improper activity / breach of law and
                regulation or internal policies and procedures noted?
              </label>
              <textarea
                name="misconductNoted"
                rows={4}
                required
                placeholder="Describe what you observed..."
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
            </div>

            {/* 4 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                4. What is the nature of misconduct / improper activity / breach
                of law and regulation, or internal policies and procedures
                occurred?
              </label>
              <textarea
                name="natureOfMisconduct"
                rows={4}
                placeholder="Provide more details (who/what/how)..."
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
            </div>

            {/* 7 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                7. Any evidence available with you to support the complaint/
                allegation? If yes, please share the documents.
              </label>
              <input
                name="evidenceFiles"
                type="file"
                multiple
                className="mt-1 block w-full text-sm text-neutral-700
                  file:mr-4 file:rounded-lg file:border-0
                  file:bg-neutral-900 file:px-4 file:py-2 file:text-sm file:font-semibold
                  file:text-white hover:file:bg-neutral-800"
              />
              <p className="mt-2 text-xs text-neutral-500">
                Accepted files depend on server configuration (recommended:
                PDF/JPG/PNG/DOCX).
              </p>
            </div>

            {/* 8 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                8. Are there any other parties involved other than the subject
                stated above?
              </label>
              <textarea
                name="otherParties"
                rows={3}
                placeholder="List names/roles if known..."
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
            </div>

            {/* 9 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                9. Do you have any other details or information which may assist
                us in the investigation?
              </label>
              <textarea
                name="otherDetails"
                rows={4}
                placeholder="Anything else that might help..."
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
            </div>

            {/* 10 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800">
                10. Any other comments?
              </label>
              <textarea
                name="comments"
                rows={3}
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
              <p className="text-sm text-neutral-600">
                By submitting, you confirm the information is accurate to the
                best of your knowledge.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white ${
                  isSubmitting
                    ? "bg-neutral-400"
                    : "bg-[#01646e] hover:bg-[#014f57]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {submitMsg ? (
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800">
                {submitMsg}
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}