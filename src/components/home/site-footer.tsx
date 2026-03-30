"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SOCIAL_LINKS } from "@/constants/social";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = {
  address: "Model Town",
  phone: "03211194725",
  email: "imamaliquranacademy@gmail.com",
};

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-[#121212] pt-10 pb-6 text-[#FDF5E6] font-montserrat">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-wider text-[#FFD700] uppercase">About Us</h3>
            <p className="text-xs leading-relaxed opacity-90">
              Illuminating the path of divine knowledge through traditional scholarly excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-wider text-[#FFD700] uppercase">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors duration-200 hover:text-[#FFD700] opacity-85 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-wider text-[#FFD700] uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD700]" />
                <span className="text-xs opacity-90">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#FFD700]" />
                <span className="text-xs opacity-90">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#FFD700]" />
                <span className="text-xs opacity-90">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-wider text-[#FFD700] uppercase">Newsletter</h3>
            <p className="text-xs opacity-90">Subscribe for updates</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 py-2 px-3 text-xs text-white placeholder:text-white/40 focus:border-[#FFD700]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/50 transition-all font-montserrat"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-9 w-16 items-center justify-center rounded-md bg-[#FFD700] text-xs font-bold uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#ffe44d] shadow-md active:scale-95"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Integration */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] transition-transform hover:scale-110 active:scale-95"
              aria-label={social.name}
            >
              <social.icon className="h-8 w-8" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-6">
          <p className="text-center text-[9px] tracking-widest uppercase opacity-60 text-[#FDF5E6] font-medium">
            © 2026 Imam Ali Quran Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
