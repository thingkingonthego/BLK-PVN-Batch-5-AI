"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Pendaftaran" | "Kurikulum" | "Karier";
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("Semua");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "Apakah pelatihan Generative AI di BLK PVN benar-benar 100% bebas biaya?",
      answer:
        "Ya, program pelatihan ini 100% didanai dan disubsidi penuh oleh Kementerian Ketenagakerjaan Republik Indonesia. Peserta tidak dipungut biaya pendaftaran maupun SPP sepeser pun. Seluruh fasilitas lab komputer AI, akses GPU server, modul pembelajaran, dan konsumsi harian telah difasilitasi.",
      category: "Pendaftaran",
    },
    {
      id: "faq-2",
      question: "Apa saja syarat utama untuk mendaftar pada Batch berikutnya (Batch 6)?",
      answer:
        "Syarat utama: Warga Negara Indonesia (WNI), usia minimal 18 tahun, tidak sedang menempuh pendidikan formal aktif, serta memiliki pemahaman dasar logika pemrograman (diutamakan familiar dengan Python atau JavaScript/TypeScript). Calon peserta wajib lolos tes penalaran logika dan wawancara komitmen vokasi.",
      category: "Pendaftaran",
    },
    {
      id: "faq-3",
      question: "Apakah peserta wajib membawa laptop ber-GPU tinggi sendiri?",
      answer:
        "Tidak wajib. Lab BLK PVN telah dilengkapi workstation high-performance dengan GPU NVIDIA RTX kelas AI dan server komputasi lokal (vLLM / Ollama Cluster). Peserta cukup membawa laptop standar untuk sinkronisasi repository GitHub dan pengerjaan tugas mandiri.",
      category: "Kurikulum",
    },
    {
      id: "faq-4",
      question: "Sertifikasi apa saja yang akan diperoleh oleh peserta setelah lulus?",
      answer:
        "Lulusan akan mendapatkan: (1) Sertifikat Pelatihan Resmi dari BLK PVN Kemnaker RI, (2) Sertifikat Kompetensi BNSP (setelah lulus uji kompetensi asesor), dan (3) Portofolio digital capstone project yang live dan teruji di Vercel/GitHub yang dapat diajukan ke perekrut industri.",
      category: "Karier",
    },
    {
      id: "faq-5",
      question: "Bagaimana mekanisme penyaluran kerja dan kemitraan industri?",
      answer:
        "BLK PVN bekerja sama dengan lebih dari 20 mitra perusahaan teknologi, startup AI, dan software house nasional melalui agenda Demo Day & Talent Fair di akhir pelatihan. Peserta dipandu menyusun CV teknologi standar ATS, portofolio live, dan simulasi technical interview.",
      category: "Karier",
    },
    {
      id: "faq-6",
      question: "Apakah kurikulum Batch 5 mencakup materi Agentic AI dan RAG?",
      answer:
        "Tentu saja! Batch 5 didesain paling mutakhir: mencakup Retrieval-Augmented Generation (RAG) tingkat lanjut menggunakan Vector DB (Qdrant/Chroma), integrasi Autonomous Multi-Agent (CrewAI / LangGraph), serta full-stack deployment menggunakan Next.js App Router dan Vercel.",
      category: "Kurikulum",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCat === "Semua" || faq.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Seputar Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Diajukan (FAQ)
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Temukan jawaban lengkap seputar registrasi, kurikulum, fasilitas, dan prospek karier
            lulusan Generative AI BLK PVN.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Interactive Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan... (contoh: biaya, GPU, sertifikasi, RAG)"
              className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-2xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Semua", "Pendaftaran", "Kurikulum", "Karier"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedCat === cat
                    ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-slate-900/95 border-indigo-500/50 shadow-lg shadow-indigo-950/30"
                      : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-100 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 bg-indigo-600/30 text-indigo-300" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Kategori: {faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-500 text-sm">
              Tidak ada pertanyaan yang cocok dengan pencarian &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
