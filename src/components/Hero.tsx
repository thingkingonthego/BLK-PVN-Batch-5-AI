"use client";

import { useState } from "react";
import {
  Sparkles,
  Terminal,
  Bot,
  Zap,
  CheckCircle2,
  Play,
  Layers,
  Award,
  Users,
} from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const [terminalTab, setTerminalTab] = useState<"code" | "output">("output");

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-pattern"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pusat Pelatihan Vokasi Generative AI & Autonomous Agent</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-400">Kemnaker RI</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Mencetak Talenta AI{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Masa Depan Indonesia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Selamat datang di showcase resmi <strong className="text-white">BLK PVN Batch 5</strong>.
            Program intensif yang mentransformasi talenta vokasi menjadi praktisi{" "}
            <span className="text-cyan-300 font-semibold">Generative AI</span>,{" "}
            <span className="text-indigo-300 font-semibold">Prompt Engineering</span>, dan{" "}
            <span className="text-emerald-300 font-semibold">Autonomous Multi-Agent</span> siap kerja.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#playground"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/30 active:scale-95 transition-all group"
            >
              <Zap className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
              <span>Coba AI Sandbox Interaktif</span>
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Jelajahi Dashboard & Galeri</span>
            </a>
          </div>

          {/* Key Value Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Subsidi Pemerintah
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Berbasis Proyek Industri
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sertifikasi Kompetensi
            </span>
          </div>
        </div>

        {/* Hero Interactive Terminal / Live Engine Preview */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#0c1220] p-1 shadow-2xl shadow-indigo-950/40 border border-slate-800">
          <div className="rounded-[14px] bg-[#0b101c] overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080c16] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  blk-pvn-ai-agent-v5.3.sh
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
                <button
                  onClick={() => setTerminalTab("output")}
                  className={`text-[11px] px-2.5 py-0.5 rounded font-mono transition-colors ${
                    terminalTab === "output"
                      ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live Run
                </button>
                <button
                  onClick={() => setTerminalTab("code")}
                  className={`text-[11px] px-2.5 py-0.5 rounded font-mono transition-colors ${
                    terminalTab === "code"
                      ? "bg-indigo-600/30 text-indigo-300 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Source Code
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[200px] flex flex-col justify-between">
              {terminalTab === "output" ? (
                <div className="space-y-2">
                  <div className="text-slate-500 flex items-center gap-2">
                    <span className="text-cyan-400">➜</span>
                    <span>$ pnpm run start:agent-cluster --batch 5</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>[BOOT] Cluster Agent BLK PVN Batch 5 aktif di 20 node pelatihan.</span>
                  </div>
                  <div className="text-indigo-300">
                    ℹ Memuat model LLM multimodal (Text, Vision, Embedding) teroptimasi...
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-xs space-y-1 my-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Status Pembelajaran:</span>
                      <span className="text-emerald-400 font-bold">100% Silabus Terselesaikan</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Proyek Capstone Industri:</span>
                      <span className="text-cyan-400 font-bold">45 Portofolio Aktif</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Latency Model Inference:</span>
                      <span className="text-yellow-400 font-bold">12ms (Vercel Edge Ready)</span>
                    </div>
                  </div>
                  <div className="text-cyan-400 flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>[STANDBY] Menunggu pengujian di Sandbox di bawah ini...</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-1 text-slate-300">
                  <span className="text-slate-500">// BLK PVN Batch 5 - Agent Orchestrator</span>
                  <div>
                    <span className="text-pink-400">import</span> &#123;{" "}
                    <span className="text-indigo-300">GenAIEngine, RAGPipeline</span> &#125;{" "}
                    <span className="text-pink-400">from</span>{" "}
                    <span className="text-emerald-300">"@blk-pvn/agent-core"</span>;
                  </div>
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-yellow-300">batch5Cluster</span> ={" "}
                    <span className="text-pink-400">new</span>{" "}
                    <span className="text-indigo-300">GenAIEngine</span>(&#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">curriculum</span>:{" "}
                    <span className="text-emerald-300">"Generative AI & Agentic 2026"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">trainees</span>:{" "}
                    <span className="text-indigo-400">20</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">deploymentTarget</span>:{" "}
                    <span className="text-emerald-300">"Vercel Edge + Cloud"</span>,
                  </div>
                  <div>&#125;);</div>
                  <div className="text-emerald-400 pt-1">
                    <span className="text-pink-400">await</span> batch5Cluster.
                    <span className="text-yellow-300">launchShowcase</span>();
                  </div>
                </div>
              )}

              {/* Bottom Quick Bar inside Terminal */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span className="flex items-center gap-2 text-slate-400">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" /> 20 Talenta Generasi AI Batch 5 Siap
                  Kolaborasi
                </span>
                <button
                  onClick={onOpenRegister}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 flex items-center gap-1"
                >
                  Registrasi Batch 6 Terbuka →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">160+ Jam</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Praktik Hands-On Lab</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">45+ Proyek</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Karya AI Industri Nyata</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100% Gratis</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Subsidi Penuh Kemnaker</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">BNSP / Vokasi</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Sertifikasi Kompetensi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
