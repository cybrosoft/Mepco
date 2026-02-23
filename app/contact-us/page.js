"use client";

import React, { useState } from "react";
import HeaderTranspirant from "@/components/Header/HeaderTranspirant";
import Footer from "@/components/Footer/index";
import { IconPhone, IconMail, IconPin } from "@/components/ui/icons";
import HeroMedia from "@/components/HeroMedia";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhistleblowerCtaSection from "@/components/WhistleblowerCtaSection";
import { contactPage } from "./data";


const BORDER = "border-[#e4e4e4]";
const TEAL = "#006D77";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-neutral-800">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function GeoButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-[#01646e] bg-white px-3 py-[10px] text-sm font-medium text-[#2d2d2d] hover:bg-neutral-50 transition"
    >
      <IconPin className="h-[18px] w-[18px] text-[#01646e]" />
      {children}
    </a>
  );
}

export default function ContactUsPage() {
  const headOffice = contactPage.locations.headOffice;
  const plant = contactPage.locations.plant;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const error = validate();
    if (error) {
      setStatus({ type: "error", msg: error });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message. Please try again.");
      }

      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-white">
      <HeaderTranspirant />

      <HeroMedia {...contactPage.hero} />

      <Breadcrumbs items={contactPage.breadcrumbs} {...contactPage.breadcrumbsProps} />

      <section className="w-full pt-4 pb-16 bg-[#F9F8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`rounded-3xl border ${BORDER} bg-white p-7`}>
                {/* Head Office */}
                <div>
                  <p className="text-lg font-semibold text-neutral-900">{headOffice.title}</p>

                  {headOffice.addressLines?.map((line, i) => (
                    <p
                      key={`ho-line-${i}`}
                      className={`mt-2 text-sm text-neutral-700 ${i === 0 ? "leading-relaxed" : ""}`}
                    >
                      {line}
                    </p>
                  ))}

                  <div className="mt-4 space-y-3">
                    {/* phone */}
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl border border-[#01646e] flex items-center justify-center`}>
                        <IconPhone className="h-[18px] w-[18px] text-[#01646e]" />

                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Phone</p>
                        <p className="text-sm text-neutral-700">{headOffice.phone}</p>
                      </div>
                    </div>

                    {/* email */}
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl border border-[#01646e] flex items-center justify-center`}>
                        <IconMail className="h-[18px] w-[18px] text-[#01646e]" />

                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Email</p>
                        <p className="text-sm text-neutral-700">{headOffice.email}</p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <GeoButton href={headOffice.geoUrl}>{headOffice.geoButtonLabel}</GeoButton>
                    </div>
                  </div>
                </div>

                {/* Plant */}
                <div className="pt-2 mt-8 border-t border-[#f0f0f0]">
                  <p className="text-lg mt-4 font-semibold text-neutral-900">{plant.title}</p>

                  {plant.addressLines?.map((line, i) => (
                    <p
                      key={`pl-line-${i}`}
                      className={`mt-2 text-sm text-neutral-700 ${i === 0 ? "leading-relaxed" : ""}`}
                    >
                      {line}
                    </p>
                  ))}

                  <div className="mt-4 space-y-3">
                    {/* phone */}
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl border border-[#01646e] flex items-center justify-center`}>
                        <IconPhone className="h-[18px] w-[18px] text-[#01646e]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Phone</p>
                        <p className="text-sm text-neutral-700">{plant.phone}</p>
                      </div>
                    </div>

                    {/* email */}
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl border border-[#01646e] flex items-center justify-center`}>
                        <IconMail className="h-[18px] w-[18px] text-[#01646e]" />

                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Email</p>
                        <p className="text-sm text-neutral-700">{plant.email}</p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <GeoButton href={plant.geoUrl}>{plant.geoButtonLabel}</GeoButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
            <div className={`rounded-3xl border ${BORDER} bg-white p-7`}>
                <h2 className="text-xl font-medium text-[#2d2d2d]">Send a message</h2>
                <p className="mt-2 text-sm text-neutral-700">
                Fill out the form and we’ll get back to you.
                </p>

                {status.msg ? (
                <div
                    className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                >
                    {status.msg}
                </div>
                ) : null}

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Full name" required>
                    <input
                        value={form.name}
                        onChange={onChange("name")}
                        className={`w-full rounded-2xl border ${BORDER} bg-white px-4 py-3 text-sm outline-none focus:border-[${TEAL}]`}
                        placeholder="Your name"
                    />
                    </Field>

                    <Field label="Email" required>
                    <input
                        value={form.email}
                        onChange={onChange("email")}
                        className={`w-full rounded-2xl border ${BORDER} bg-white px-4 py-3 text-sm outline-none focus:border-[${TEAL}]`}
                        placeholder="name@email.com"
                    />
                    </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Phone">
                    <input
                        value={form.phone}
                        onChange={onChange("phone")}
                        className={`w-full rounded-2xl border ${BORDER} bg-white px-4 py-3 text-sm outline-none focus:border-[${TEAL}]`}
                        placeholder="+966..."
                    />
                    </Field>

                    <Field label="Subject" required>
                    <input
                        value={form.subject}
                        onChange={onChange("subject")}
                        className={`w-full rounded-2xl border ${BORDER} bg-white px-4 py-3 text-sm outline-none focus:border-[${TEAL}]`}
                        placeholder="How can we help?"
                    />
                    </Field>
                </div>

                <Field label="Message" required>
                    <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    rows={10}
                    className={`w-full rounded-2xl border ${BORDER} bg-white px-4 py-3 text-sm outline-none focus:border-[${TEAL}]`}
                    placeholder="Write your message..."
                    />
                </Field>

                <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500">
                    By submitting, you agree to be contacted regarding your inquiry.
                    </p>

                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center rounded-full bg-[#006D77] px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition ${
                        isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    >
                    {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                </div>
                </form>
            </div>
            </div>

          </div>
          <WhistleblowerCtaSection className="mb-16" />            
          {/* ✅ Bottom map now from data.js */}
          <div className="mt-10">
            <div className={`rounded-2xl border ${BORDER} bg-white overflow-hidden`}>
              <iframe
                title="MEPCO Head Office location"
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={headOffice.mapEmbedSrc}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
