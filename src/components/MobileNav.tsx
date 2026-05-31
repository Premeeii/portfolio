"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  items: readonly NavItem[];
  onClose: () => void;
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const menuVariants = {
  closed: { y: "-100%" },
  open: {
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

export default function MobileNav({ items, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed inset-0 z-40 md:hidden"
      initial="closed"
      animate="open"
      exit="closed"
      variants={overlayVariants}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <motion.div
        layoutRoot
        className="relative flex flex-col items-center gap-8 bg-surface px-6 pb-10 pt-24"
        variants={menuVariants}
      >
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <motion.div key={item.href} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`relative text-sm font-medium tracking-[0.25em] transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-underline"
                    layout="x"
                    className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
