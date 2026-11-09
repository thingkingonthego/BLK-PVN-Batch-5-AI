"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AiPlayground from "@/components/AiPlayground";
import DashboardPreview from "@/components/DashboardPreview";
import TestimonialSlider from "@/components/TestimonialSlider";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Top Navigation */}
      <Navbar onOpenRegister={() => setIsRegisterModalOpen(true)} />

      {/* Hero Section with Interactive Terminal */}
      <Hero onOpenRegister={() => setIsRegisterModalOpen(true)} />

      {/* Feature 1: Interactive AI Playground & Sandbox */}
      <AiPlayground />

      {/* Feature 2: Interactive Live Dashboard, Curriculum & Showcase Gallery */}
      <DashboardPreview />

      {/* Feature 3: Interactive Testimonials Carousel */}
      <TestimonialSlider />

      {/* Feature 4: Interactive FAQ with Real-Time Search */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Registration / Waitlist Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </main>
  );
}
