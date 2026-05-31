# AGENTS.md

## Project Overview
เป็นโปรเจคสำหรับเป็นPortfolio โดย Next.js ใช้ TypeScript, Tailwind CSS และ Framer Motion

## Commands
* `npm run dev`: เริ่มต้น Development Server
* `npm run build`: สร้าง Production Build
* `npm run lint`: ตรวจสอบความถูกต้องของโค้ดด้วย ESLint

## Code Style
* เว็บไซต์ควรจะ responsive กับทุกขนาดหน้าจอ
* ใช้ Framer Motion เพื่อสร้าง Animation ที่สวยงาม และลื่นไหล
* เว็บไซต์ควรจะมีความเร็วในการโหลดที่เร็ว
* ใช้ TypeScript เพื่อตรวจสอบความถูกต้องของโค้ด
* ใช้ Tailwind CSS 
* เว็บไซต์ควรจะมีความปลอดภัยต่อการใช้งาน
* เลี่ยงการเขียน Logic ใหญ่ๆ รวมไว้ในComponent เดียว
* Icon ภายในแอปใช้ Lucide React ทั้งหมด

## Language
* ใช้ภาษาอังกฤษในการพัฒนาโปรเจค

## Project Structure
* ./src/app/ ใช้สำหรับ routes และ pages ตาม Next.js App Router
* components/ ใช้เก็บ UI Components
* lib/ ใช้สำหรับเก็บ library

## Testing and Validation
ก่อนส่งงานต้องตรวจสอบ:
* npm run lint
* npm run build ไม่มีError
* Image Optimization ระบุขนาดรูปภาพที่เหมาะสมเพื่อป้องกัน Layout Shift
* ตรวจสอบว่าได้ทำ Responsive กับทุกขนาดหน้าจอแล้ว

## Boundaries
* ห้ามใช้ Type any ใน TypeScript เด็ดขาด
* ห้ามเขียนโค้ด CSS แบบ Desktop-First แล้วค่อยมาย่อลงมือถือ
* ห้ามใช้ Absolute Positioning ในการจัด Layout หลักของหน้าเว็บ (ใช้ได้เฉพาะองค์ประกอบตกแต่งเท่านั้น)
* ห้ามทิ้ง console.log ไว้ใน Production Code

## 7. Theme & Color System
โปรเจกต์นี้ใช้ระบบสีแบบ Dark Theme โดยมีโทนสีหลักและหน้าที่การใช้งานดังต่อไปนี้ Agent ต้องตั้งค่าสีเหล่านี้ใน `tailwind.config.ts` และใช้งานตามสัดส่วนที่กำหนด:

* **Color 1: `#222831` (Deep Dark Slate)**
    * **หน้าที่:** `Background หลัก` (Main Background)
    * **การใช้งาน:** ใช้เป็นสีพื้นหลังของเว็บไซต์ทั้งหมด (Body) เพื่อให้ความรู้สึกนิ่ง ลึก และเป็นมืออาชีพ
    * **Tailwind Suggestion:** กำหนดเป็น `bg-background` หรือ `bg-primary-dark`

* **Color 2: `#393e46` (Charcoal Gray)**
    * **หน้าที่:** `Background รอง / Surface` (Secondary Background)
    * **การใช้งาน:** ใช้สำหรับพื้นหลังของ Card ผลงาน, Navbar, Footer, Modal หรือพื้นที่ที่ต้องการยกระดับให้ดูลอยขึ้นมาจากพื้นหลังหลัก เพื่อสร้างมิติ (Depth)
    * **Tailwind Suggestion:** กำหนดเป็น `bg-surface` หรือ `bg-secondary-dark`

* **Color 3: `#948979` (Muted Taupe / Bronze)**
    * **หน้าที่:** `สีรอง / ข้อความรอง` (Muted Text & Borders)
    * **การใช้งาน:** ใช้สำหรับข้อความที่ไม่ต้องการให้เด่นมาก เช่น วันที่, Subtitle, คำอธิบายย่อย (Descriptions), Tags, หรือใช้ทำเส้นขอบ (Borders) และเส้นแบ่ง (Dividers) 
    * **Tailwind Suggestion:** กำหนดเป็น `text-muted`, `border-primary`, หรือ `text-secondary`

* **Color 4: `#dfd0b8` (Warm Sand / Beige)**
    * **หน้าที่:** `สีหลักเด่น / ข้อความหลัก` (Accent Color & Primary Text)
    * **การใช้งาน:** ใช้เป็นสีของข้อความหลัก (Headings H1-H6 และ Body Text) เพื่อให้ตัดกับพื้นหลังสีเข้มให้อ่านง่าย รวมถึงใช้เป็น **สีเน้น (Accent)** สำหรับปุ่ม Call to Action (CTA), ลิงก์เมื่อ Hover, และ Icon สำคัญๆ เพื่อดึงดูดสายตา
    * **Tailwind Suggestion:** กำหนดเป็น `text-primary`, `bg-accent`, หรือ `text-accent`


