"use client";

import ContactWheel from "@/components/ContactWheel";
import { CONTACTS } from "@/lib/contacts";

export default function Contact() {
  return (
    <section className="overflow-hidden">
      <ContactWheel contacts={CONTACTS} />
    </section>
  );
}
