import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function ContactContent() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact Information */}
          <div className="flex flex-col space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl">
                Get in <span className="italic text-[#B8965A]">Touch</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#5F7A8A]">
                Whether you have questions about enrollment, curriculum, or
                scholarly guidance, our team is here to support your spiritual
                journey.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B8965A]/10 text-[#B8965A]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2C3D]">Email Us</h4>
                  <p className="text-[#5F7A8A]">admissions@imamaliacademy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B8965A]/10 text-[#B8965A]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2C3D]">Call Us</h4>
                  <p className="text-[#5F7A8A]">+92 321 1194725</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B8965A]/10 text-[#B8965A]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2C3D]">Location</h4>
                  <p className="text-[#5F7A8A]">Model town lahore , Pakistan</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold tracking-widest text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl md:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              WHATSAPP US
            </a>
          </div>

          {/* Contact Form */}
          <div
            className="flex flex-col bg-white/30 p-8 md:p-12 animate-in fade-in slide-in-from-right-12 duration-1000 ease-out delay-200"
            style={{ borderRadius: "2.5rem", boxShadow: "0 20px 50px rgba(11, 44, 61, 0.04)" }}
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wider text-[#0B2C3D]">NAME</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-2xl border border-[#0B2C3D]/10 bg-white/50 px-6 py-4 text-[#0B2C3D] outline-none transition-all focus:border-[#B8965A] focus:ring-1 focus:ring-[#B8965A]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wider text-[#0B2C3D]">EMAIL</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-2xl border border-[#0B2C3D]/10 bg-white/50 px-6 py-4 text-[#0B2C3D] outline-none transition-all focus:border-[#B8965A] focus:ring-1 focus:ring-[#B8965A]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wider text-[#0B2C3D]">MESSAGE</label>
                <textarea
                  placeholder="How can we help you on your journey?"
                  rows={5}
                  className="w-full rounded-2xl border border-[#0B2C3D]/10 bg-white/50 px-6 py-4 text-[#0B2C3D] outline-none transition-all focus:border-[#B8965A] focus:ring-1 focus:ring-[#B8965A]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#B8965A] py-5 text-sm font-bold tracking-[0.2em] text-white shadow-lg transition-all hover:bg-[#a68549] hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
