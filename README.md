# 🚀 BLK PVN Batch 5 — Generative AI & Autonomous Agent Hub

Portal resmi, showcase karya teknologi, dan live AI sandbox interaktif untuk program pelatihan vokasi intensif **Generative AI Batch 5** di bawah naungan **Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI)**.

---

## ✨ Fitur Interaktif Unggulan

1. **🤖 Interactive AI Playground & Sandbox**
   * **Prompt Optimizer**: Mengubah instruksi mentah menjadi System Prompt terstruktur standar industri (*Role*, *Context*, *Constraints*, *Output Format*).
   * **Vision AI Generator (Simulation)**: Simulasi Text-to-Image terintegrasi berbagai gaya artistik (*Cyberpunk 3D*, *Photorealistic*, *Minimalist Vector*, *Cinematic Anime*).
   * **Agentic Code Assistant**: Simulasi penalaran multi-step (*AST analysis*, *type safety*, *guardrails*) untuk Next.js 15, LangChain RAG, dan FastAPI.
   * Dilengkapi animasi partikel confetti interaktif, parameter slider temperatur, dan pemilihan model LLM.

2. **📊 Live Dashboard & Galeri Portofolio**
   * **Silabus Vokasi 2026**: Rincian 4 fase kurikulum (Transformer, RAG & Vector DB, Multi-Agent Systems, Vercel Edge Deployment).
   * **Galeri Proyek Batch 5**: Filter dinamis karya peserta (*Nusantara Legal AI*, *MedisVision*, *AutoCS Orchestrator*, *TaniCerdas*, dll.) beserta modal metrik performa langsung.
   * **Matriks Penguasaan Talenta**: Radar skill & statistik kesiapan kerja lulusan.

3. **💬 Testimonial Carousel**
   * Slider interaktif ulasan alumni, CTO mitra industri rekruter, dan instruktur vokasi nasional dengan fitur auto-play & navigasi manual.

4. **❓ Interactive FAQ Accordion**
   * Pencarian instan (real-time query search) pertanyaan seputar pendaftaran, biaya 100% subsidi, spesifikasi lab GPU, dan uji kompetensi BNSP.

5. **📝 Registrasi & Waitlist Modal**
   * Formulir pendaftaran prioritas untuk Batch 6 dengan validasi input dan konfirmasi instan.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Language:** TypeScript 5
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Visual Effects:** Canvas Confetti
* **Platform Deployment:** [Vercel](https://vercel.com/)

---

## 💻 Menjalankan di Lokal (Development)

1. Jalankan development server:
```bash
npm run dev
```

2. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

3. Untuk menguji build produksi:
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Upload ke GitHub & Deploy ke Vercel (Manual via Browser)

### Langkah 1: Upload ke GitHub via Browser
1. Buka [GitHub](https://github.com/) dan buat repository baru (misal: `blk-pvn-batch-5-ai`).
2. Di halaman repositori baru yang masih kosong, klik opsi **"uploading an existing file"**.
3. Drag & drop seluruh isi folder `BLK-PVN-Batch-5-AI-main` **kecuali** folder `node_modules` dan `.next` (folder tersebut tidak perlu di-upload karena di-generate otomatis oleh Vercel).
4. Klik **Commit changes**.

### Langkah 2: Deploy ke Vercel via Browser
1. Buka [Vercel](https://vercel.com/) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `blk-pvn-batch-5-ai` yang baru saja Anda buat di GitHub, lalu klik **"Import"**.
4. Vercel secara otomatis mendeteksi Framework Preset sebagai **Next.js**.
5. Klik **"Deploy"**.
6. Dalam waktu ~1 menit, landing page BLK PVN Batch 5 AI Anda sudah live dengan URL publik (contoh: `https://blk-pvn-batch-5-ai.vercel.app`)!

---

© 2026 BLK PVN Batch 5 AI Hub. Dikelola oleh Peserta & Instruktur Vokasi.
