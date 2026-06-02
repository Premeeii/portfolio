"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECT", href: "/project" },
  { label: "CONTACT", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full">
        <div className="w-full flex items-center justify-between px-6 py-4 md:justify-center">
          {/* lower than md display*/}
          <button
            type="button"
            onClick={toggleMobile}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            className="relative z-50 flex h-8 w-8 items-center justify-center md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-accent" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-accent" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* upper than md display*/}
          <motion.ul
            layoutRoot
            className="hidden items-center gap-10 rounded-full border border-surface/50 bg-surface/30 px-25 py-3 backdrop-blur-md md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`text-xs font-medium tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-muted hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      layout="x"
                      className="absolute top-6 left-0 h-px w-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </motion.ul>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMobileOpen && <MobileNav items={NAV_ITEMS} onClose={closeMobile} />}
      </AnimatePresence>
    </>
  );
}
