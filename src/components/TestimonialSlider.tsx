"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  category: "Alumni Trainee" | "Mitra Industri" | "Instruktur Vokasi";
  avatar: string;
  quote: string;
  rating: number;
  tag: string;
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rizky Ramadhan",
      role: "Alumni Batch 4 & AI Workflow Specialist",
      company: "PT Solusi Cloud Nusantara",
      category: "Alumni Trainee",
      avatar: "RR",
      quote:
        "Pelatihan di BLK PVN benar-benar mengubah arah karier saya. Dari yang awalnya hanya pengguna biasa ChatGPT, di sini kami diajari merancang arsitektur RAG, fine-tuning model di PyTorch, sampai membuat agen otomatis dengan CrewAI. Belum lulus pun sudah dapat tawaran kerja industri!",
      rating: 5,
      tag: "Hired dalam 2 Minggu",
    },
    {
      id: 2,
      name: "Budi Santoso, M.Kom",
      role: "Chief Technology Officer",
      company: "Inovasi Siber Medika",
      category: "Mitra Industri",
      avatar: "BS",
      quote:
        "Kami merekrut dua lulusan dari BLK PVN untuk tim R&D Computer Vision kami. Kualitas pemahaman teknis mereka setara dengan lulusan bootcamp berbayar puluhan juta, bahkan lebih siap dalam hal hands-on code dan pemecahan masalah real-world.",
      rating: 5,
      tag: "Mitra Rekruter Aktif",
    },
    {
      id: 3,
      name: "Siti Rahmawati",
      role: "Trainee Batch 5 (Capstone Leader)",
      company: "Proyek Nusantara Legal AI",
      category: "Alumni Trainee",
      avatar: "SR",
      quote:
        "Fasilitas lab komputer ber-GPU di BLK PVN sangat luar biasa. Instruktur mendampingi kami mulai dari teori dasar transformer hingga deploy aplikasi full-stack di Vercel. Portofolio capstone yang kami buat benar-benar bisa langsung didemokan ke klien.",
      rating: 5,
      tag: "Batch 5 Outstanding",
    },
    {
      id: 4,
      name: "Ir. Hendra Wijaya",
      role: "Lead AI Research & Instruktur Senior",
      company: "Instruktur Vokasi Nasional",
      category: "Instruktur Vokasi",
      avatar: "HW",
      quote:
        "Kurikulum Batch 5 dirancang bersama konsorsium industri kecerdasan buatan nasional. Fokus kami bukan sekadar hafalan teori, tapi 80% alokasi waktu dialokasikan untuk pembuatan software AI nyata yang teruji aman dan scalable.",
      rating: 5,
      tag: "Kurikulum Terakreditasi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimoni" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Suara Alumni & Mitra Industri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bukti Nyata Dampak{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Pelatihan Vokasi AI
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dengar langsung pengalaman peserta yang telah bertransformasi dan apresiasi pimpinan
            teknologi yang telah merekrut talenta kami.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {/* Top quote icon & tag */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-800/80 flex items-center justify-center text-indigo-400">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {current.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300">
                  {current.category}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium min-h-[120px] flex items-center">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Profile & Rating */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-indigo-600/20">
                  {current.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-base">{current.name}</div>
                  <div className="text-xs text-slate-400">
                    {current.role} • <span className="text-cyan-400">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
