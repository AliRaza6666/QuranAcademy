"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Send, CheckCircle, User, Mail, Phone, BookOpen, Clock, MessageSquare, ChevronDown } from "lucide-react";

const COURSES = [
  { value: "foundation", label: "Foundation — 1 Day / Week" },
  { value: "steady", label: "Steady — 2 Days / Week" },
  { value: "dedicated", label: "Dedicated — 3 Days / Week" },
  { value: "immersive", label: "Immersive — 5 Days / Week" },
  { value: "tajweed", label: "Tajweed Mastery" },
  { value: "translation", label: "Quranic Translation" },
  { value: "tafseer", label: "Tafseer Studies" },
  { value: "islamic-history", label: "Islamic History" },
];

const SCHEDULES = [
  "Early Morning (5AM – 8AM)",
  "Morning (8AM – 12PM)",
  "Afternoon (12PM – 4PM)",
  "Evening (4PM – 8PM)",
  "Night (8PM – 11PM)",
  "Flexible / Any Time",
];

const inputCls =
  "w-full bg-white border-2 border-secondary/20 rounded-xl py-3.5 px-4 text-primary font-body placeholder:text-primary/40 focus:outline-none focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10 transition-all duration-200";

const labelCls = "flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-2";

function EnrollFormInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseParam = searchParams.get("course") ?? "";

  const matched = COURSES.find((c) => c.value === courseParam.toLowerCase());
  const courseName = matched
    ? matched.label.split("—")[0].trim()
    : courseParam
      ? courseParam.charAt(0).toUpperCase() + courseParam.slice(1)
      : "Free";

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    course: matched?.value ?? courseParam ?? "",
    schedule: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 px-6 text-center"
        style={{ animation: "fadeInUp 0.5s ease both" }}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/15">
          <CheckCircle className="h-10 w-10 text-secondary" />
        </div>
        <h2 className="mb-3 text-3xl font-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Registration Received!
        </h2>
        <p className="mb-8 max-w-md text-base text-primary/70 leading-relaxed">
          Thank you, <strong>{form.name}</strong>. We will contact you within{" "}
          <strong>24 hours</strong> to confirm your slot for the{" "}
          <strong>{COURSES.find((c) => c.value === form.course)?.label.split("—")[0].trim() ?? form.course}</strong> course, in shā Allāh.
        </p>
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center justify-center rounded-full bg-[#C5A059] px-8 py-3 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Enrollment
        </p>
        <h1
          className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Register for Your{" "}
          <span className="italic text-secondary">{courseName}</span> Trial
        </h1>
        <p className="mt-4 max-w-xl text-base text-primary/65 leading-relaxed">
          Fill in the form below and our team will reach out within 24 hours to confirm your slot, in shā Allāh.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-2xl border-2 border-secondary/15 bg-white p-8 shadow-[0_20px_50px_rgba(0,29,46,0.09)] md:p-10">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelCls}>
                <User className="h-3.5 w-3.5" /> Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                <Mail className="h-3.5 w-3.5" /> Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className={inputCls}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelCls}>
                <Phone className="h-3.5 w-3.5" /> WhatsApp / Phone
              </label>
              <input
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                <BookOpen className="h-3.5 w-3.5" /> Course Interested In
              </label>
              <div className="relative">
                <select
                  name="course"
                  required
                  value={form.course}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/60" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className={labelCls}>
              <Clock className="h-3.5 w-3.5" /> Preferred Class Schedule
            </label>
            <div className="relative">
              <select
                name="schedule"
                value={form.schedule}
                onChange={handleChange}
                className={`${inputCls} appearance-none pr-10`}
              >
                <option value="">Select preferred time</option>
                {SCHEDULES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/60" />
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label className={labelCls}>
              <MessageSquare className="h-3.5 w-3.5" /> Additional Message{" "}
              <span className="normal-case font-normal tracking-normal text-primary/40">(optional)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Any questions, special requirements, or notes for our team..."
              className={`${inputCls} resize-none`}
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-200">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C5A059] py-4 text-sm font-bold tracking-[0.14em] text-[#1A1A1A] shadow-md transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-[0.98] disabled:opacity-60 sm:w-auto sm:px-12"
            >
              {status === "loading" ? "Submitting..." : "REGISTER NOW"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function EnrollForm() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-primary/50">Loading…</div>}>
      <EnrollFormInner />
    </Suspense>
  );
}
