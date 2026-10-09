"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ContactModal() {
  const { isContactOpen, setIsContactOpen, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isContactOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in required fields", "error");
      return;
    }
    setSubmitted(true);
    showToast("Message received (Demo Mode)");
  };

  const handleClose = () => {
    setIsContactOpen(false);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Product Inquiry",
      message: "",
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact and Skincare Consultation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF4EA] text-[#24231F] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E6DCBA] z-10 p-6 sm:p-8">
        <button
          onClick={handleClose}
          aria-label="Close contact modal"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#153D2A]/10 text-[#153D2A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#153D2A]">
              Namaste! We&apos;ve Received Your Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Roopasa Ayurveda. Note: This is an interactive demo store interface.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#153D2A] text-white text-xs font-semibold hover:bg-[#102D20]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[1px] bg-[#B58A48]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B58A48] font-semibold">
                Get In Touch
              </span>
              <span className="w-6 h-[1px] bg-[#B58A48]" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#153D2A] mb-1">
              Ayurvedic Consultation & Inquiries
            </h2>
            <p className="text-xs text-stone-600 mb-6">
              Have questions regarding our formulations, dosage, or orders?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="E.g. Ananya Sharma"
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#E0D5C3] focus:outline-none focus:border-[#153D2A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#E0D5C3] focus:outline-none focus:border-[#153D2A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#E0D5C3] focus:outline-none focus:border-[#153D2A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#E0D5C3] focus:outline-none focus:border-[#153D2A]"
                  >
                    <option>Product Inquiry</option>
                    <option>Skincare Recommendation</option>
                    <option>Order & Delivery Query</option>
                    <option>Wholesale & Collaborations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what you are looking for..."
                  className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#E0D5C3] focus:outline-none focus:border-[#153D2A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#153D2A] hover:bg-[#102D20] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#E6DCBA] flex flex-wrap items-center justify-between text-[11px] text-stone-500 gap-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#B58A48]" /> care@roopasaayurveda.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#B58A48]" /> +91 (800) ROOPASA
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
