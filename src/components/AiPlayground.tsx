"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Bot,
  Sliders,
  Copy,
  Check,
  Play,
  RotateCcw,
  Zap,
  Code2,
  Image as ImageIcon,
  Cpu,
  Layers,
  Wand2,
  Terminal,
} from "lucide-react";

export default function AiPlayground() {
  const [activeTab, setActiveTab] = useState<"prompt" | "vision" | "code">("prompt");
  const [selectedModel, setSelectedModel] = useState("Llama-3.3-70B (Ollama / Local)");
  const [temperature, setTemperature] = useState(0.7);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Prompt Optimizer state
  const [promptInput, setPromptInput] = useState(
    "Buat asisten AI WhatsApp untuk melayani order toko online UMKM"
  );
  const [promptResult, setPromptResult] = useState<string | null>(null);

  // Vision Simulator state
  const [visionPrompt, setVisionPrompt] = useState(
    "Robot asisten masa depan di ruang pelatihan BLK modern dengan aksen neon cyan dan layar hologram"
  );
  const [visionStyle, setVisionStyle] = useState("Cyberpunk 3D");
  const [visionGenerated, setVisionGenerated] = useState<boolean>(false);
  const [visionProgress, setVisionProgress] = useState(0);

  // Code Assistant state
  const [codeTask, setCodeTask] = useState<"nextjs" | "langchain" | "fastapi">("nextjs");
  const [codeResult, setCodeResult] = useState<string | null>(null);
  const [codeStep, setCodeStep] = useState<string>("");

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#6366f1", "#06b6d4", "#10b981"],
      });
    } catch {
      // safe fallback if confetti fails
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run Prompt Optimization
  const handleOptimizePrompt = () => {
    if (!promptInput.trim()) return;
    setIsProcessing(true);
    setPromptResult(null);

    setTimeout(() => {
      const generated = `# SYSTEM PROMPT INDUSTRIAL-GRADE (BLK PVN BATCH 5 TEMPLATE)
[ROLE & PERSONA]
Anda adalah "Lina", Customer Support AI profesional, ramah, dan solutif untuk UMKM Store Indonesia. Anda berbahasa Indonesia santun, natural, dan persuasif tanpa kaku.

[CONTEXT & OBJECTIVES]
- Bertanggung jawab memandu pelanggan dalam katalog produk, cek ongkir, cek stok, dan konfirmasi bukti pembayaran.
- Mengubah pertanyaan calon pembeli menjadi transaksi berhasil (conversion rate optimization).

[STRICT CONSTRAINTS]
1. Jangan pernah memberikan nomor rekening selain rekening resmi yang tercantum di database.
2. Jika pelanggan bertanya di luar topik produk (misal politik atau hal pribadi), jawab dengan sopan dan kembalikan fokus ke katalog toko.
3. Gunakan emoji secara elegan (maksimal 2 per balasan) agar tetap profesional.

[EXECUTION PROTOCOL]
- Sambutan pembuka: "Halo Kak! Senang sekali bisa membantu Kakak hari ini di [Nama Toko] 😊..."
- Format invoice order:
  * ID Pesanan: #ORD-[TIMESTAMP]
  * Ringkasan Barang: [Nama Produk] x [Jumlah]
  * Total Biaya + Estimasi Pengiriman: [Rp ...]
  * Instruksi Pembayaran & Konfirmasi via tautan upload struk.

[SAMPLE PREVIEW RESPONSE]
"Halo Kak! Terima kasih sudah menghubungi kami. Produk Gamis Premium Maroon ukuran L masih tersedia 3 pcs ya Kak. Mau kami bantu amankan stoknya untuk dikirim hari ini? 🙏"`;

      setPromptResult(generated);
      setIsProcessing(false);
      triggerConfetti();
    }, 700);
  };

  // Run Vision AI Generation
  const handleGenerateVision = () => {
    setIsProcessing(true);
    setVisionGenerated(false);
    setVisionProgress(15);

    setTimeout(() => setVisionProgress(45), 250);
    setTimeout(() => setVisionProgress(80), 550);
    setTimeout(() => {
      setVisionProgress(100);
      setIsProcessing(false);
      setVisionGenerated(true);
      triggerConfetti();
    }, 850);
  };

  // Run Agentic Code Assistant
  const handleGenerateCode = () => {
    setIsProcessing(true);
    setCodeResult(null);
    setCodeStep("Menganalisis arsitektur sistem dan dependensi...");

    setTimeout(() => {
      setCodeStep("Menyusun logic dengan zero-downtime streaming pattern...");
    }, 350);

    setTimeout(() => {
      let snippet = "";
      if (codeTask === "nextjs") {
        snippet = `// app/actions/chat-agent.ts
"use server";

import { z } from "zod";

const MessageSchema = z.object({
  prompt: z.string().min(2).max(1000),
  agentRole: z.string().default("BLK-Expert-Trainee"),
});

export async function processAgentTask(formData: FormData) {
  const parsed = MessageSchema.safeParse({
    prompt: formData.get("prompt"),
    agentRole: formData.get("agentRole"),
  });

  if (!parsed.success) {
    return { success: false, error: "Input tidak valid" };
  }

  // Mengintegrasikan Edge AI Engine BLK PVN
  const response = await fetch("https://api.blk-pvn-ai.internal/v1/agent/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek-r1-distill",
      messages: [{ role: "user", content: parsed.data.prompt }],
    }),
    cache: "no-store",
  });

  const result = await response.json();
  return { success: true, answer: result.data };
}`;
      } else if (codeTask === "langchain") {
        snippet = `# agent_rag_pipeline.py
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

def build_blk_rag_engine(docs):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vector_store = FAISS.from_documents(docs, embeddings)
    retriever = vector_store.as_retriever(search_kwargs={"k": 4})

    system_prompt = (
        "Anda adalah asisten cerdas alumni BLK PVN Batch 5. "
        "Gunakan konteks dokumen di bawah untuk menjawab pertanyaan teknis:\\n\\n"
        "{context}"
    )
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        ("human", "{input}"),
    ])

    qa_chain = create_stuff_documents_chain(llm, prompt)
    return create_retrieval_chain(retriever, qa_chain)`;
      } else {
        snippet = `# main.py (FastAPI Microservice)
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch

app = FastAPI(title="BLK PVN GenAI Inference Gateway", version="5.0.0")

class InferencePayload(BaseModel):
    prompt: str
    temperature: float = 0.7
    max_tokens: int = 512

@app.post("/v1/predict")
async def generate_response(payload: InferencePayload):
    try:
        # Load LoRA checkpoint hasil pelatihan Batch 5
        return {
            "status": "success",
            "batch": 5,
            "device": "cuda:0" if torch.cuda.is_available() else "cpu",
            "tokens_generated": 142,
            "latency_ms": 18.4,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`;
      }

      setCodeResult(snippet);
      setCodeStep("");
      setIsProcessing(false);
      triggerConfetti();
    }, 800);
  };

  return (
    <section id="playground" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Feature Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Uji Coba Langsung{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Kemampuan AI Batch 5
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Jelajahi simulasi kecerdasan buatan interaktif. Lihat bagaimana peserta Batch 5 menguasai
            rekayasa prompt tingkat lanjut, pemodelan visual, dan otomasi koding berbasis AI Agent.
          </p>
        </div>

        {/* Playground Container */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Top Controls & Navigation Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 border-b border-slate-800/90 gap-4 bg-[#0a0f1d]">
            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800/80 overflow-x-auto">
              <button
                onClick={() => setActiveTab("prompt")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === "prompt"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Wand2 className="w-3.5 h-3.5" />
                Prompt Optimizer
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === "vision"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                Vision AI Generator
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === "code"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Agentic Code Assistant
              </button>
            </div>

            {/* Model & Config Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400">Model:</span>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer"
                >
                  <option value="Llama-3.3-70B (Ollama / Local)" className="bg-slate-900">
                    Llama 3.3 70B (Vokasi Lab)
                  </option>
                  <option value="DeepSeek-R1-Distill" className="bg-slate-900">
                    DeepSeek R1 (Reasoning)
                  </option>
                  <option value="Gemini-2.5-Flash" className="bg-slate-900">
                    Gemini 2.5 Flash
                  </option>
                  <option value="GPT-4o-Mini-FineTuned" className="bg-slate-900">
                    BLK Custom Fine-Tuned
                  </option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-xs bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-slate-400">Temp:</span>
                <span className="text-indigo-300 font-mono font-semibold">{temperature}</span>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-16 accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Playground Body */}
          <div className="p-5 sm:p-7">
            {/* TAB 1: PROMPT OPTIMIZER */}
            {activeTab === "prompt" && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Masukkan Instruksi / Ide Kasar Anda:
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Coba template siap pakai di bawah
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Contoh: Buatkan bot customer service WhatsApp..."
                    className="w-full bg-[#070b14] border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none transition-colors font-sans"
                  />
                  {/* Preset Quick Chips */}
                  <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
                    <span className="text-slate-400 self-center text-[11px]">Cepat:</span>
                    <button
                      onClick={() =>
                        setPromptInput(
                          "Buat asisten AI WhatsApp untuk melayani order toko online UMKM"
                        )
                      }
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 transition-colors text-[11px]"
                    >
                      🛒 Bot Toko Online
                    </button>
                    <button
                      onClick={() =>
                        setPromptInput(
                          "Analisis sentimen dan topik utama ulasan pelanggan di marketplace"
                        )
                      }
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 transition-colors text-[11px]"
                    >
                      📊 Analisis Sentimen
                    </button>
                    <button
                      onClick={() =>
                        setPromptInput(
                          "Buatkan struktur modul kurikulum pelatihan AI Agent 4 minggu"
                        )
                      }
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 transition-colors text-[11px]"
                    >
                      🎓 Silabus AI Agent
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleOptimizePrompt}
                    disabled={isProcessing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/30 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>{isProcessing ? "Mengoptimalkan Prompt..." : "Optimalkan Prompt (Run AI)"}</span>
                  </button>
                  <button
                    onClick={() => {
                      setPromptInput("");
                      setPromptResult(null);
                    }}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                    title="Reset Form"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Output Area */}
                <div className="rounded-2xl bg-[#060a12] border border-slate-800/90 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
                      <Bot className="w-3.5 h-3.5" />
                      Hasil Optimasi Prompt Industri (System Prompt)
                    </span>
                    {promptResult && (
                      <button
                        onClick={() => handleCopy(promptResult)}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Prompt</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap max-h-[350px] overflow-y-auto">
                    {isProcessing ? (
                      <div className="flex items-center gap-2 text-cyan-400 animate-pulse py-6 justify-center">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Menganalisis parameter, context injection, dan boundary guardrails...</span>
                      </div>
                    ) : promptResult ? (
                      promptResult
                    ) : (
                      <div className="text-slate-500 py-6 text-center">
                        Tekan tombol &quot;Optimalkan Prompt (Run AI)&quot; di atas untuk melihat bagaimana model mentransformasi instruksi sederhana menjadi format siap produksi.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: VISION AI GENERATOR */}
            {activeTab === "vision" && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                      Deskripsi Visual (Text-to-Image Simulation):
                    </label>
                  </div>
                  <input
                    type="text"
                    value={visionPrompt}
                    onChange={(e) => setVisionPrompt(e.target.value)}
                    className="w-full bg-[#070b14] border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-200 focus:outline-none transition-colors"
                  />
                </div>

                {/* Style Selector */}
                <div>
                  <span className="text-xs font-medium text-slate-400 block mb-2">
                    Pilih Style Render Visual:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cyberpunk 3D",
                      "Photorealistic Studio",
                      "Minimalist Vector UI",
                      "Cinematic Anime",
                      "Glassmorphism Clay",
                    ].map((style) => (
                      <button
                        key={style}
                        onClick={() => setVisionStyle(style)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          visionStyle === style
                            ? "bg-cyan-950/80 border-cyan-500 text-cyan-300 font-semibold"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleGenerateVision}
                    disabled={isProcessing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/30 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{isProcessing ? "Merender Visual..." : "Render Konsep Visual AI"}</span>
                  </button>
                </div>

                {/* Render Result Canvas */}
                <div className="rounded-2xl bg-[#060a12] border border-slate-800/90 overflow-hidden p-6 text-center">
                  {isProcessing ? (
                    <div className="py-12 max-w-md mx-auto space-y-4">
                      <div className="text-xs text-cyan-300 font-mono">
                        Denoising Latents ({visionProgress}%) • Style: {visionStyle}
                      </div>
                      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full transition-all duration-300"
                          style={{ width: `${visionProgress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-400">
                        Mengkomputasi diffusion checkpoint pada GPU Vokasi...
                      </span>
                    </div>
                  ) : visionGenerated ? (
                    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                      {/* Generated Art Mockup */}
                      <div className="relative mx-auto max-w-lg aspect-video rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-gradient-to-tr from-[#0a1128] via-[#101b3d] to-[#042838] flex flex-col justify-between p-6">
                        <div className="flex justify-between items-start">
                          <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-500/20">
                            GEN-AI V5 #8821
                          </span>
                          <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                            1024 x 1024 • CFG 7.5
                          </span>
                        </div>

                        {/* Visual Center Graphic representation */}
                        <div className="flex flex-col items-center justify-center my-4 space-y-2">
                          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-pulse">
                            <Sparkles className="w-8 h-8 text-cyan-300" />
                          </div>
                          <span className="text-sm font-bold text-white tracking-wide">
                            {visionStyle} Simulation
                          </span>
                          <span className="text-xs text-slate-300 max-w-sm">
                            &quot;{visionPrompt}&quot;
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[11px] text-slate-400 bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-slate-800">
                          <span>Model: Stable Diffusion XL + BLK FineTune</span>
                          <span className="text-cyan-400 font-mono">Seed: 4928172</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400">
                        Visual berhasil disimulasikan sesuai prompt & parameter styling yang dipilih.
                      </p>
                    </div>
                  ) : (
                    <div className="py-12 text-slate-500 space-y-2">
                      <ImageIcon className="w-10 h-10 mx-auto text-slate-600" />
                      <p className="text-xs">
                        Pilih gaya visual dan klik &quot;Render Konsep Visual AI&quot; untuk menghasilkan simulasi Text-to-Image.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: AGENTIC CODE ASSISTANT */}
            {activeTab === "code" && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Pilih Studi Kasus Kode AI yang Ingin Diuji:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => setCodeTask("nextjs")}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        codeTask === "nextjs"
                          ? "bg-slate-800/90 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold text-emerald-400 mb-1">
                        Next.js Server Actions
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Integrasi Edge AI endpoint dengan Zod validation
                      </div>
                    </button>
                    <button
                      onClick={() => setCodeTask("langchain")}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        codeTask === "langchain"
                          ? "bg-slate-800/90 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold text-cyan-400 mb-1">LangChain RAG Pipeline</div>
                      <div className="text-[11px] text-slate-400">
                        Vector store FAISS + Retrieval Chain Python
                      </div>
                    </button>
                    <button
                      onClick={() => setCodeTask("fastapi")}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        codeTask === "fastapi"
                          ? "bg-slate-800/90 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold text-indigo-400 mb-1">FastAPI AI Gateway</div>
                      <div className="text-[11px] text-slate-400">
                        Inference server dengan GPU torch fallback
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleGenerateCode}
                    disabled={isProcessing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-md shadow-emerald-600/30 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{isProcessing ? "Menjalankan AI Agent..." : "Jalankan Solusi Kode AI"}</span>
                  </button>
                </div>

                {/* Code Terminal Output */}
                <div className="rounded-2xl bg-[#060a12] border border-slate-800/90 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      Arsitektur Kode Terverifikasi (TypeScript / Python)
                    </span>
                    {codeResult && (
                      <button
                        onClick={() => handleCopy(codeResult)}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Kode</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap max-h-[350px] overflow-y-auto">
                    {isProcessing ? (
                      <div className="flex items-center gap-2 text-emerald-400 animate-pulse py-6 justify-center">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>{codeStep}</span>
                      </div>
                    ) : codeResult ? (
                      codeResult
                    ) : (
                      <div className="text-slate-500 py-6 text-center">
                        Pilih salah satu studi kasus di atas dan klik &quot;Jalankan Solusi Kode AI&quot; untuk menginspeksi implementasi arsitektur kode.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
