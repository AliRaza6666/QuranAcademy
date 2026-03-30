"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/social";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Prevent micro-jitters
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2 rounded-full border border-black/5 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[-150%] opacity-0"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full items-center justify-between px-6 md:px-10">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10">
          <span className="relative h-14 w-18 sm:h-16 sm:w-20 md:h-20 md:w-26 shrink-0 overflow-hidden">
            <Image
              src="/images/home/logobg.webp"
              alt="QuranAcademy logo"
              fill
              sizes="100px"
              className="object-contain object-left"
              priority
            />
          </span>
          <div className="hidden sm:block -ml-1 leading-tight">
            <p className="text-sm font-bold uppercase tracking-tight text-black lg:text-base font-montserrat">
              Imam Ali Quran Academy
            </p>
          </div>
        </Link>

        {/* Navigation Links and Social/CTA */}
        <div className="hidden items-center lg:flex gap-6">
          <div className="flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-black/70 font-montserrat"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-black/10 pl-6 h-8">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.filter(l => l.name !== "TikTok").map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 transition-colors hover:text-[#C5A059]"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center rounded-full bg-[#C5A059] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_12px_rgba(197,160,89,0.4)] font-montserrat"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-black hover:bg-black/5"
                  aria-label="Open Menu"
                />
              }
            >
              <Menu className="h-6 w-6" strokeWidth={2} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white/95 backdrop-blur-md">
              <SheetHeader className="border-b border-black/5 pb-4">
                <SheetTitle className="text-black font-bold uppercase tracking-tight text-sm font-montserrat">
                  Imam Ali Quran Academy
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black hover:bg-black/5 rounded-lg transition-colors font-montserrat"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 px-4 py-4 border-t border-black/5 mt-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 transition-colors hover:text-[#C5A059]"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <Link
                  href="/enroll"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#C5A059] py-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] font-montserrat"
                >
                  Enroll Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}