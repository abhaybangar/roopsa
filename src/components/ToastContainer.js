"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderClass = "border-[#153D2A]/30";
        let iconClass = "text-[#153D2A]";

        if (toast.type === "error") {
          Icon = AlertCircle;
          borderClass = "border-red-400";
          iconClass = "text-red-600";
        } else if (toast.type === "info") {
          Icon = Info;
          borderClass = "border-[#B58A48]/40";
          iconClass = "text-[#B58A48]";
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-[#FAF4EA] text-[#24231F] border ${borderClass} shadow-lg rounded-lg p-3.5 flex items-center gap-2.5 transition-all animate-in slide-in-from-bottom-3 duration-300`}
          >
            <Icon className={`w-4 h-4 shrink-0 ${iconClass}`} />
            <span className="text-xs font-medium text-stone-800 leading-snug">
              {toast.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}
