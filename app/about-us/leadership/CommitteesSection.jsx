"use client";

import React from "react";

export default function CommitteesSection({ committees }) {
  return (
    <div className="space-y-12">
      {committees.map((committee, idx) => (
        <div
          key={idx}
          className="rounded-3xl bg-white border border-neutral-200 overflow-hidden"
        >
          {/* Title */}
          <div className="px-5 sm:px-8 py-6 border-b border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-medium text-[#1f1f1f]">
              {committee.title}
            </h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-5 sm:px-8 py-4 text-sm font-medium text-neutral-700">
                    Name
                  </th>
                  <th className="px-5 sm:px-8 py-4 text-sm font-medium text-neutral-700">
                    Position
                  </th>
                </tr>
              </thead>

              <tbody>
                {committee.members.map((member, i) => (
                  <tr
                    key={i}
                    className="border-t border-neutral-200"
                  >
                    <td className="px-5 sm:px-8 text-sm py-4 text-neutral-800">
                      {member.name}
                    </td>
                    <td className="px-5 sm:px-8 text-sm py-4 text-neutral-600">
                      {member.position}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}