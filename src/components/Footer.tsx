import { Cpu, Globe, Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white">
                  BLK PVN BATCH 5 AI
                </span>
                <span className="text-[11px] text-slate-400">
                  Pusat Pelatihan Vokasi Generative AI & Autonomous Agent
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Inisiatif pencetakan talenta kecerdasan buatan berbasis industri vokasi. Membekali
              generasi muda Indonesia dengan kecakapan Prompt Engineering, RAG Pipeline, Autonomous
              Multi-Agent, dan Full-Stack AI Deployment.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Didukung Penuh oleh Kementerian Ketenagakerjaan RI</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-cyan-400 transition-colors">
                  AI Sandbox Interaktif
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-cyan-400 transition-colors">
                  Kurikulum & Silabus
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-cyan-400 transition-colors">
                  Galeri Karya Batch 5
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-cyan-400 transition-colors">
                  Testimoni & Mitra
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Technology & Deployment */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Arsitektur Teknologi
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Next.js 15 (App Router)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Tailwind CSS + Turbopack</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Vercel Edge Ready</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>GitHub CI/CD Automation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 BLK PVN Batch 5 AI Hub. Dikelola oleh Peserta & Instruktur
            Vokasi.
          </div>
          <div className="flex items-center gap-2">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>untuk Kemajuan Teknologi Vokasi Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
