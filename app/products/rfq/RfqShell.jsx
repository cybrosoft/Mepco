"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PRODUCTS } from "./data";
import RfqStep1 from "./RfqStep1";
import RfqStep2 from "./RfqStep2";

export default function RfqShell() {
  const [step, setStep] = useState(1);

  // Step 1
  const [selected, setSelected] = useState([]); // [{ productId, qty, unit }]
  const [monthlyVolume, setMonthlyVolume] = useState("");
  const [orderType, setOrderType] = useState("trial"); // trial | production
  const [targetDate, setTargetDate] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryCountry, setDeliveryCountry] = useState("");

  // Step 2
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [industry, setIndustry] = useState("");

  const productsById = useMemo(() => {
    const m = new Map();
    PRODUCTS.forEach((p) => m.set(p.id, p));
    return m;
  }, []);

  const step1Valid =
    selected.length > 0 &&
    selected.every((x) => String(x.qty).trim() !== "" && Number(x.qty) > 0 && x.unit) &&
    String(monthlyVolume).trim() !== "" &&
    targetDate &&
    String(deliveryCity).trim() !== "" &&
    String(deliveryCountry).trim() !== "";

  const step2Valid =
    String(fullName).trim() !== "" &&
    String(companyName).trim() !== "" &&
    String(businessEmail).trim() !== "" &&
    String(phoneNumber).trim() !== "" &&
    String(industry).trim() !== "";

  const goNext = () => {
    if (!step1Valid) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!step2Valid) return;

    const payload = {
      products: selected.map((x) => ({
        productId: x.productId,
        productName: productsById.get(x.productId)?.name,
        qty: Number(x.qty),
        unit: x.unit,
      })),
      monthlyVolume,
      orderType,
      targetDate,
      deliveryLocation: { city: deliveryCity, country: deliveryCountry },
      contact: { fullName, companyName, businessEmail, phoneNumber, industry },
    };

    console.log("RFQ payload:", payload);

    // TODO: wire API
    // await fetch("/api/rfq", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(payload) })

    alert("RFQ submitted (demo). Next: wire /api/rfq.");
  };

  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200">
      <div className="border-b border-neutral-200 px-6 py-6 md:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
                Step {step} of 2 {step === 1 ? "" : ""}
            </h1>
            <p className="mt-1 text-sm text-neutral-600">
              {step === 1 ? "Select Products & Requirements" : "Contact Details"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className={`h-2 w-20 rounded-full ${step >= 1 ? "bg-[#01646e]" : "bg-neutral-200"}`} />
            <div className={`h-2 w-20 rounded-full ${step >= 2 ? "bg-[#01646e]" : "bg-neutral-200"}`} />
          </div>
        </div>
      </div>

      <div className="px-6 py-8 md:px-10">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <RfqStep1
                products={PRODUCTS}
                selected={selected}
                setSelected={setSelected}
                monthlyVolume={monthlyVolume}
                setMonthlyVolume={setMonthlyVolume}
                orderType={orderType}
                setOrderType={setOrderType}
                targetDate={targetDate}
                setTargetDate={setTargetDate}
                deliveryCity={deliveryCity}
                setDeliveryCity={setDeliveryCity}
                deliveryCountry={deliveryCountry}
                setDeliveryCountry={setDeliveryCountry}
                step1Valid={step1Valid}
                onNext={goNext}
              />
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <RfqStep2
                fullName={fullName}
                setFullName={setFullName}
                companyName={companyName}
                setCompanyName={setCompanyName}
                businessEmail={businessEmail}
                setBusinessEmail={setBusinessEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                industry={industry}
                setIndustry={setIndustry}
                step2Valid={step2Valid}
                onBack={goBack}
                onSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}