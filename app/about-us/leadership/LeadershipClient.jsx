// app/about-us/leadership/LeadershipClient.jsx
"use client";

import React, { useState } from "react";
import HeaderGreen from "@/components/Header/HeaderGreen";
import BreadcrumbSection from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

import BoardSection from "./BoardSection";
import ManagementSection from "./ManagementSection";
import CommitteesSection from "./CommitteesSection";

import { leadershipPage, boardMembers, managementTeam, boardCommittees } from "./data";
import ContinueReading from "@/components/ContinueReading";
import { useReveal } from "@/components/useReveal";

export default function LeadershipClient() {
  const { pageTitle, tabs, continueReadingItems } = leadershipPage;
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const activeTabData = tabs.find((t) => t.key === activeTab);

  const headerRef  = useReveal(0.1);
  const tabsRef    = useReveal(0.1);
  const introRef   = useReveal(0.1);

  return (
    <main className="w-full bg-[#f9f8f3]">
      <HeaderGreen />

      <BreadcrumbSection
        className="bg-[#f9f8f3]"
        containerClassName="py-2"
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: pageTitle },
        ]}
      />

      <section className="w-full pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page title */}
          <div ref={headerRef}>
            <h1
              className="reveal-up text-4xl md:text-4xl font-bold text-[#2d2d2d] mt-4"
              style={{ transitionDelay: "0ms" }}
            >
              {pageTitle}
            </h1>
          </div>

          {/* Tabs */}
          <div ref={tabsRef}>
            <div
              className="reveal-fade mb-8 sm:mb-0 mt-4 md:mt-10 flex flex-col sm:inline-flex sm:flex-row
                         bg-white p-4 sm:p-2 sm:rounded-full
                         rounded-2xl shadow-sm border border-neutral-200"
              style={{ transitionDelay: "120ms" }}
            >
              {tabs.map((t) => {
                const isActive = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={[
                      "w-full text-left px-5 py-3 text-sm font-medium rounded-3xl mb-2 last:mb-0 transition",
                      "sm:w-auto sm:text-center sm:px-6 sm:py-3 sm:rounded-full sm:mb-0",
                      isActive
                        ? "bg-[#01646e] text-white"
                        : "text-neutral-800 hover:bg-neutral-50",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab intro */}
          <div ref={introRef} className="hidden sm:block mt-10 mb-8 max-w-4xl">
            <h2
              className="reveal-up text-2xl md:text-3xl font-medium text-[#2d2d2d]"
              style={{ transitionDelay: "0ms" }}
            >
              {activeTabData.title}
            </h2>
            <p
              className="reveal-down mt-4 text-neutral-700 leading-relaxed"
              style={{ transitionDelay: "120ms" }}
            >
              {activeTabData.intro}
            </p>
          </div>

          {/* Dynamic Section */}
          {activeTab === "board"       && <BoardSection      members={boardMembers}       />}
          {activeTab === "management"  && <ManagementSection members={managementTeam}    />}
          {activeTab === "committees"  && <CommitteesSection committees={boardCommittees} />}

        </div>
      </section>

      <ContinueReading items={continueReadingItems} />
      <Footer />
    </main>
  );
}
