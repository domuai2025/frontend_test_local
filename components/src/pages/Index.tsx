
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamImageSection from "@/components/TeamImageSection";
import AdaptiveAISection from "@/components/AdaptiveAISection";
import AIAgentsSection from "@/components/AIAgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationSection from "@/components/IntegrationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* AI Team Image Section */}
      <TeamImageSection />

      {/* AI That Adapts & Grows with Your Business Section */}
      <AdaptiveAISection />

      {/* AI Agents Section */}
      <AIAgentsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Integration Section */}
      <IntegrationSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
