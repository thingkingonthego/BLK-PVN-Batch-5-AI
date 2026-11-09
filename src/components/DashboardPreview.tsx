"use client";

import { useState } from "react";
import {
  Layers,
  BookOpen,
  FolderGit2,
  BarChart3,
  ExternalLink,
  Code2,
  Sparkles,
  CheckCircle2,
  Cpu,
  Bot,
  Eye,
  Building2,
  X,
  TrendingUp,
  FileText,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "LLM & Chatbot" | "Computer Vision" | "Agentic Automation" | "SaaS & Tools";
  author: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  gradient: string;
  demoMetrics: { label: string; value: string }[];
}

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"curriculum" | "gallery" | "skills">("gallery");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const curriculumPhases = [
    {
      phase: "Fase 01",
      title: "Fondasi Generative AI & Deep Learning Modern",
      weeks: "Minggu 1 - 2 (30 Jam)",
      description:
        "Memahami arsitektur Transformer, mekanisme Attention, Tokenizer, dan implementasi inference model LLM secara lokal (Ollama / vLLM) serta API cloud.",
      tools: ["Python 3.12", "PyTorch", "HuggingFace", "Ollama", "JupyterLab"],
      deliverable: "Custom Fine-Tuning Mini Model & Benchmark Evaluasi Latensi",
      topics: [
        "Arsitektur Decoder-Only & Multi-Head Self Attention",
        "Quantization (GGUF, AWQ, 4-bit/8-bit optimization)",
        "Prompt Engineering Patterns (Few-Shot, Chain of Thought, ReAct)",
      ],
    },
    {
      phase: "Fase 02",
      title: "RAG (Retrieval-Augmented Generation) & Vector DB",
      weeks: "Minggu 3 - 4 (40 Jam)",
      description:
        "Membangun pipeline pencarian dokumen semantik berkecepatan tinggi dengan Vector Database dan Hybrid Search (Sparse + Dense).",
      tools: ["LangChain", "LlamaIndex", "ChromaDB / Qdrant", "OpenAI Embeddings", "FastAPI"],
      deliverable: "Sistem Tanya-Jawab Dokumen Hukum & SOP Perusahaan Bebas Halusinasi",
      topics: [
        "Chunking Strategies (Semantic, Recursive Character, Hierarchy)",
        "Embeddings Models & Cosine Similarity Tuning",
        "Reranker (Cohere / BGE) & Context Compression Guardrails",
      ],
    },
    {
      phase: "Fase 03",
      title: "Autonomous Multi-Agent Architecture",
      weeks: "Minggu 5 - 6 (45 Jam)",
      description:
        "Merancang ekosistem agen otonom yang dapat berkolaborasi antar-agen, menggunakan tool external (API, Web Browser, Code Execution) untuk menyelesaikan misi kompleks.",
      tools: ["CrewAI", "LangGraph", "AutoGEN", "Docker", "Antigravity Agent SDK"],
      deliverable: "Autonomous Research & Market Intelligence Multi-Agent Bot",
      topics: [
        "Stateful Agents & Memory Management (Short-term vs Long-term)",
        "Tool Calling, Function Calling & Schema Validation",
        "Human-in-the-Loop Safeguards & Deadlock Resolution",
      ],
    },
    {
      phase: "Fase 04",
      title: "Full-Stack Deployment & MLOps ke Vercel Cloud",
      weeks: "Minggu 7 - 8 (45 Jam)",
      description:
        "Mengemas sistem AI menjadi aplikasi web interaktif kelas industri dengan Next.js App Router, Tailwind CSS, streaming respon, dan deploy ke Vercel Edge.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "GitHub Actions"],
      deliverable: "Aplikasi Web Produksi Live, Teruji, dan Siap Diakses Publik",
      topics: [
        "Edge Runtime Streaming & Server Actions",
        "Rate Limiting, Analytics, and Token Cost Monitoring",
        "CI/CD Pipeline GitHub ke Vercel dengan Environment Security",
      ],
    },
  ];

  const projects: ProjectItem[] = [
    {
      id: "proj-1",
      title: "Nusantara Legal AI Copilot",
      category: "LLM & Chatbot",
      author: "Tim Alpha (Rizky & Amanda)",
      tagline: "Asisten telaah dokumen kontrak bisnis & regulasi hukum Indonesia",
      description:
        "Platform berbasis RAG yang mampu membedah berkas MoU ratusan halaman dalam hitungan detik. Mengidentifikasi klausul berisiko dan memberikan rekomendasi perbaikan sesuai hukum perdata Indonesia.",
      impact: "Mempercepat telaah dokumen hingga 85% dengan akurasi 98%",
      stack: ["Next.js", "LangChain", "Qdrant Vector DB", "Llama 3.3 70B", "Tailwind"],
      gradient: "from-blue-600/30 to-indigo-600/30",
      demoMetrics: [
        { label: "Waktu Telaah", value: "2.4 Detik" },
        { label: "Akurasi Reranker", value: "97.8%" },
        { label: "Klausul Teruji", value: "1,200+" },
      ],
    },
    {
      id: "proj-2",
      title: "MedisVision AI Triase",
      category: "Computer Vision",
      author: "Tim Beta (Fajar & Dini)",
      tagline: "Deteksi anomali citra thorax rontgen untuk puskesmas daerah",
      description:
        "Model Computer Vision yang di-fine-tune untuk membantu tenaga medis mengklasifikasikan indikasi pneumonia dan kelainan paru dini dengan visualisasi heatmap Grad-CAM.",
      impact: "Membantu skrining awal di 3 faskes simulasi mitra BLK",
      stack: ["PyTorch", "Vision Transformer", "FastAPI", "Next.js", "Vercel"],
      gradient: "from-cyan-600/30 to-teal-600/30",
      demoMetrics: [
        { label: "F1 Score", value: "0.942" },
        { label: "Inference Time", value: "18ms" },
        { label: "Dataset Latih", value: "25,000 Citra" },
      ],
    },
    {
      id: "proj-3",
      title: "AutoCS Multi-Agent Orchestrator",
      category: "Agentic Automation",
      author: "Tim Gamma (Hendro, Siti & Bayu)",
      tagline: "Ekosistem agent penjawab komplain dan transaksi WhatsApp otomatis",
      description:
        "Kumpulan 4 agen AI (Triase, Verifikasi Resi, Rekonsiliasi Finansial, dan Eskalasi Human) yang berkoordinasi secara otonom tanpa henti untuk toko ritel online.",
      impact: "Mengurangi tiket komplain tertunda hingga 92%",
      stack: ["LangGraph", "CrewAI", "WhatsApp Webhook", "Node.js", "Redis"],
      gradient: "from-emerald-600/30 to-green-600/30",
      demoMetrics: [
        { label: "Tiket Selesai", value: "94%" },
        { label: "CS Response Time", value: "< 5 Detik" },
        { label: "Uptime Agen", value: "99.9%" },
      ],
    },
    {
      id: "proj-4",
      title: "TaniCerdas Mikro-Iklim AI",
      category: "SaaS & Tools",
      author: "Tim Delta (Ari & Wahyu)",
      tagline: "Prediksi hama tanaman & rekomendasi pemupukan presisi berbasis sensor",
      description:
        "SaaS pintar yang menggabungkan data sensor IoT tanah dengan prediksi model AI untuk petani hortikultura, memberikan peringatan dini serangan hama melalui SMS dan Web App.",
      impact: "Meningkatkan efisiensi pupuk 22% pada uji coba demoplot",
      stack: ["Next.js 15", "Python FastMCP", "PostgreSQL", "Tailwind CSS"],
      gradient: "from-amber-600/30 to-orange-600/30",
      demoMetrics: [
        { label: "Petani Terbantu", value: "140 Mitra" },
        { label: "Akurasi Prediksi", value: "91.3%" },
        { label: "Penghematan Biaya", value: "22%" },
      ],
    },
    {
      id: "proj-5",
      title: "EduTutor Adaptif GenAI",
      category: "LLM & Chatbot",
      author: "Tim Epsilon (Nadia & Kevin)",
      tagline: "Tutor belajar interaktif personal untuk siswa vokasi teknik",
      description:
        "Platform bimbel mandiri yang mengubah modul materi sulit menjadi dialog interaktif berjenjang (Socratic Method) lengkap dengan kuis otomatis adaptif.",
      impact: "Telah diuji coba oleh 80 siswa vokasi dengan peningkatan skor 35%",
      stack: ["Next.js", "OpenAI SDK", "Tailwind CSS", "Prisma", "Vercel Edge"],
      gradient: "from-purple-600/30 to-pink-600/30",
      demoMetrics: [
        { label: "Sesi Dialog", value: "4,500+" },
        { label: "Peningkatan Nilai", value: "+35%" },
        { label: "Tingkat Retensi", value: "88%" },
      ],
    },
    {
      id: "proj-6",
      title: "FinAudit Anomaly Guard",
      category: "Agentic Automation",
      author: "Tim Zeta (Dimas & Maya)",
      tagline: "Otomasi rekonsiliasi faktur pajak dan deteksi transaksi janggal",
      description:
        "AI Agent yang memvalidasi scan invoice PDF, mencocokkan nomor faktur pajak dengan data core perbankan, dan menyorot potensi duplikasi secara real-time.",
      impact: "Mencegah kesalahan input manual faktur 100% pada simulasi audit",
      stack: ["FastAPI", "PaddleOCR", "Next.js", "Docker", "Python"],
      gradient: "from-rose-600/30 to-red-600/30",
      demoMetrics: [
        { label: "Faktur Diproses", value: "12,000+" },
        { label: "Error Detection", value: "99.4%" },
        { label: "Kecepatan Audit", value: "10x Lipat" },
      ],
    },
  ];

  const categories = ["Semua", "LLM & Chatbot", "Computer Vision", "Agentic Automation", "SaaS & Tools"];

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="dashboard" className="py-20 md:py-28 relative bg-[#070b14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Live Dashboard & Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparansi Kurikulum &{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Karya Nyata Batch 5
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Telusuri silabus berstandar industri, portofolio karya nyata peserta, serta metrik keahlian
            yang siap memenuhi kebutuhan rekrutmen teknologi Anda.
          </p>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "gallery"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              Galeri Portofolio ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Kurikulum Vokasi 2026
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Statistik Talenta
            </button>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: GALERI PORTOFOLIO (Default)
        ========================================================================= */}
        {activeTab === "gallery" && (
          <div id="galeri" className="space-y-8 animate-in fade-in duration-300">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/50 shadow-sm"
                      : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 cursor-pointer"
                >
                  {/* Glowing header bar */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {project.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Impact badge */}
                    <div className="mt-4 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.impact}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.slice(0, 3).map((st) => (
                        <span
                          key={st}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono"
                        >
                          {st}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors font-semibold">
                      <span>Lihat Detail & Metrik</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: KURIKULUM VOKASI AI 2026
        ========================================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            {/* Phase Selector Column (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Pilih Tahapan Kurikulum:
              </span>
              {curriculumPhases.map((phase, idx) => (
                <button
                  key={phase.phase}
                  onClick={() => setSelectedPhase(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    selectedPhase === idx
                      ? "bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-950/50"
                      : "bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold font-mono ${
                        selectedPhase === idx ? "text-cyan-400" : "text-slate-400"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    <span className="text-[11px] text-slate-400">{phase.weeks}</span>
                  </div>
                  <div
                    className={`mt-1.5 text-sm font-bold ${
                      selectedPhase === idx ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {phase.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Phase Detail Column (8 cols) */}
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
                    {curriculumPhases[selectedPhase].phase} • {curriculumPhases[selectedPhase].weeks}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {curriculumPhases[selectedPhase].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {curriculumPhases[selectedPhase].description}
              </p>

              {/* Topics list */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 block mb-3">
                  Topik & Kompetensi Inti:
                </span>
                <div className="space-y-2.5">
                  {curriculumPhases[selectedPhase].topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Deliverable */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    Tech Stack & Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {curriculumPhases[selectedPhase].tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 font-mono border border-indigo-800/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Output & Deliverable:
                  </span>
                  <p className="text-xs text-emerald-300 font-medium">
                    {curriculumPhases[selectedPhase].deliverable}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: STATISTIK TALENTA & MATRIX
        ========================================================================= */}
        {activeTab === "skills" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-white">20</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Talenta Terlatih Batch 5</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-cyan-400">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Tingkat Kelulusan Uji Teknis</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-indigo-400">18+ Mitra</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Industri & Startup Rekrutmen</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-emerald-400">4.9 / 5.0</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Rating Evaluasi Mentor</div>
              </div>
            </div>

            {/* Skill Competency Breakdown */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Matriks Penguasaan Kompetensi Peserta Batch 5
              </h3>

              <div className="space-y-5">
                {[
                  {
                    name: "Advanced Prompt Engineering & System Design",
                    pct: 98,
                    desc: "Few-shot, Chain-of-Thought, ReAct pattern, boundary safety & token optimization",
                  },
                  {
                    name: "RAG Pipeline & Vector Database (Qdrant / Chroma)",
                    pct: 95,
                    desc: "Semantic search, chunking strategies, contextual compression & reranking",
                  },
                  {
                    name: "Autonomous Multi-Agent Orchestration (CrewAI / LangGraph)",
                    pct: 92,
                    desc: "Tool execution, state management, inter-agent consensus, and automated workflows",
                  },
                  {
                    name: "Full-Stack AI Application (Next.js 15, Tailwind & Vercel)",
                    pct: 94,
                    desc: "Streaming interfaces, edge functions, server actions, and cloud deployment",
                  },
                  {
                    name: "Fine-Tuning & Quantization (PyTorch, LoRA, GGUF)",
                    pct: 88,
                    desc: "Dataset curation, PEFT / LoRA adaptation, model quantization, and Ollama export",
                  },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="font-mono font-bold text-cyan-400">{skill.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PROJECT DETAIL MODAL (WHEN A CARD IS CLICKED)
        ========================================================================= */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0b101d] border border-slate-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400">{selectedProject.author}</span>
              </div>

              <h3 className="text-2xl font-black text-white mt-1">{selectedProject.title}</h3>
              <p className="text-xs sm:text-sm text-cyan-300 mt-1 font-medium">
                {selectedProject.tagline}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Latar Belakang & Solusi
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Demo metrics cards */}
              <div className="grid grid-cols-3 gap-3 my-5">
                {selectedProject.demoMetrics.map((met) => (
                  <div
                    key={met.label}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center"
                  >
                    <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                      {met.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{met.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  Arsitektur Teknologi:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((st) => (
                    <span
                      key={st}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-mono"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md"
                >
                  Tutup Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
