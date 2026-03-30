"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

// ─── Inquiry Form ─────────────────────────────────────────────────────────────
function InquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const inputCls =
    "w-full bg-secondary/10 border-b-2 border-outline-variant py-3 px-4 focus:border-secondary transition-all rounded-lg text-on-surface font-body placeholder:text-on-surface/50 focus:outline-none focus:ring-2 focus:ring-secondary/10";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent successfully! We'll get back to you soon, in shā Allāh.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label text-sm font-bold text-secondary tracking-widest uppercase">
            Name
          </label>
          <input
            name="name" type="text" value={form.name}
            onChange={handleChange} placeholder="Enter your full name"
            className={inputCls}
          />
        </div>
        <div className="space-y-2">
          <label className="font-label text-sm font-bold text-secondary tracking-widest uppercase">
            Email Address
          </label>
          <input
            name="email" type="email" value={form.email}
            onChange={handleChange} placeholder="email@example.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-label text-sm font-bold text-secondary tracking-widest uppercase">
          Phone Number
        </label>
        <input
          name="phone" type="tel" value={form.phone}
          onChange={handleChange} placeholder="+1 (555) 000-0000"
          className={inputCls}
        />
      </div>

      <div className="space-y-2">
        <label className="font-label text-sm font-bold text-secondary tracking-widest uppercase">
          Message
        </label>
        <textarea
          name="message" value={form.message}
          onChange={handleChange} rows={5}
          placeholder="How can we assist your journey?"
          className={`${inputCls} resize-none`}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full md:w-auto px-8 py-4 bg-tertiary-fixed border-2 border-secondary text-primary font-bold font-headline tracking-widest text-lg hover:bg-secondary-container hover:text-secondary transition-all flex items-center justify-center gap-3 group shadow-lg active:scale-95 duration-150 disabled:opacity-60"
        >
          SUBMIT
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ContactDetailsPanel() {
  return (
    <>
      {/* Left: Contact Details */}
      <div className="lg:col-span-5 space-y-12">
        <h2 className="sr-only">Contact Information</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-secondary-fixed shadow-lg">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary font-bold mb-1">Our Sanctuary</h3>
              <p className="text-on-surface-variant leading-relaxed">
                127 Al-Noor Plaza, Knowledge District<br />
                Madinah, Saudi Arabia 41411
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-secondary-fixed shadow-lg">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary font-bold mb-1">Direct Line</h3>
              <p className="text-on-surface-variant leading-relaxed">
                +966 12 345 6789<br />
                Mon – Fri: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-secondary-fixed shadow-lg">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary font-bold mb-1">Electronic Mail</h3>
              <p className="text-on-surface-variant leading-relaxed">
                imamaliquranacademy@gmail.com<br />
                
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Image Inset */}
        <div className="relative mt-12 rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="/images/about/hero.webp"
            alt="A serene open Quran with golden light filtering through a window"
            width={800}
            height={256}
            className="w-full h-40 sm:h-52 md:h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-headline italic text-white text-lg leading-snug">
              &quot;Indeed, this Quran guides to that which is most suitable.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Right: Inquiry Form */}
      <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(39,25,0,0.08)] border-2 border-secondary/10 relative">
        <div className="absolute inset-4 border border-secondary/5 pointer-events-none rounded-lg" />
        <InquiryForm />
      </div>
    </>
  );
}
