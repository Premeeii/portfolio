import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface bg-background py-16 sm:py-10">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center">
        {/* Name Title */}
        <h2 className="text-base font-bold tracking-[0.25em] text-muted sm:text-lg">
          KITTAPAS CHOCKTANATORN
        </h2>

        {/* Main Navigation Links */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12 font-jetbrains text-xs font-medium tracking-[0.2em] text-accent">
          <li>
            <Link href="/" className="transition-colors hover:text-muted">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:text-muted">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/project" className="transition-colors hover:text-muted">
              PROJECT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-muted">
              CONTACT
            </Link>
          </li>
        </ul>
        
        {/* Copyright */}
        <p className="mt-8 font-jetbrains text-[9px] tracking-[0.2em] text-accent/30 sm:text-[10px]">
          © 2026 KITTAPAS CHOCKTANATORN
        </p>
      </div>
    </footer>
  );
}
