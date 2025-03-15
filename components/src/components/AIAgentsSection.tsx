
import React from "react";
import { FileText, Calendar, MessageSquare, CalendarCheck, Target } from "lucide-react";
import AIAgent from "./AIAgent";

const AIAgentsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#0a0b14]">
      {/* Enhanced animated background with larger radiant effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[1000px] h-[1000px]">
          {/* Outer circle with glow */}
          <div className="absolute inset-0 border border-[#1eb0ff]/10 rounded-full animate-pulse-light"></div>
          
          {/* Middle circle with brighter glow */}
          <div className="absolute inset-[100px] border border-[#1eb0ff]/15 rounded-full"></div>
          
          {/* Inner circle with brightest glow */}
          <div className="absolute inset-[200px] border border-[#1eb0ff]/20 rounded-full"></div>
          
          {/* Radiant center glow */}
          <div className="absolute inset-[300px] bg-gradient-to-br from-[#1eb0ff]/10 via-[#9b87f5]/10 to-[#8B5CF6]/10 rounded-full blur-xl"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1eb0ff] mb-6 relative inline-block">
            Meet Your AI Team
            <div className="absolute inset-0 blur-lg bg-[#1eb0ff]/20 -z-10"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our specialized AI agents seamlessly integrate into your business, working individually or together to not just automate tasks, but to function as an intelligent extension of your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AIAgent 
            name="Kat AI" 
            description="Your AI-powered content creator for text, images, and videos. From blogs to social media, Kat generates high-quality content that engages and converts."
            icon={FileText}
            tag="Content Creator"
            color="text-[#1eb0ff]"
            initials="KA"
            avatarImage="/lovable-uploads/5af68220-c931-45f3-9ffe-92d8face074f.png"
            customAvatarStyle={{
              transform: "scale(1.25)",
              objectPosition: "center 20%",
              height: "110%"
            }}
          />
          
          <AIAgent 
            name="Eva AI" 
            description="The ultimate content scheduler, ensuring your AI-generated posts go live at the right time across Facebook, Instagram, TikTok, YouTube, LinkedIn, and more."
            icon={Calendar}
            tag="Scheduler"
            color="text-[#8B5CF6]"
            initials="EA"
            avatarImage="/lovable-uploads/c102eb03-35ee-4715-9597-59943e279b45.png"
            customAvatarStyle={{
              transform: "scale(1.1)",
              objectPosition: "center 15%",
              height: "105%"
            }}
          />
          
          <AIAgent 
            name="Alley AI" 
            description="Your AI messaging specialist that automates conversations on WhatsApp, Telegram, SMS, and email, responding to leads, answering FAQs, and keeping customers engaged."
            icon={MessageSquare}
            tag="Messaging"
            color="text-[#0EA5E9]"
            initials="AA"
            avatarImage="/lovable-uploads/3ddd5622-db3a-4186-a8a1-b20be6b11a94.png"
            customAvatarStyle={{
              transform: "scale(1.2)",
              objectPosition: "center 15%",
              height: "110%"
            }}
          />
          
          <AIAgent 
            name="Ben AI" 
            description="A smart appointment setter that manages bookings, syncs with Google Calendar, and ensures your schedule stays optimized for maximum efficiency."
            icon={CalendarCheck}
            tag="Appointments"
            color="text-[#10B981]"
            initials="BA"
            avatarImage="/lovable-uploads/a1122d99-a79f-4608-9bbf-b9252de01eba.png"
            customAvatarStyle={{
              transform: "scale(1.2)",
              objectPosition: "center top",
              height: "110%"
            }}
          />
          
          <AIAgent 
            name="Magi AI" 
            description="A lead engagement and retargeting expert, identifying website visitors and re-engaging lost leads with intelligent AI-driven marketing sequences."
            icon={Target}
            tag="Lead Engagement"
            color="text-[#F97316]"
            initials="MA"
            avatarImage="/lovable-uploads/f616ebad-263e-4bfb-bd43-f4308240f664.png"
            customAvatarStyle={{
              transform: "scale(1.15)",
              objectPosition: "center top",
              height: "115%"
            }}
          />
        </div>
        
        <div className="flex justify-center">
          <div className="relative px-6 py-3 rounded-lg bg-[#15162b] border border-[#1eb0ff]/20 max-w-xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1eb0ff]/10 to-[#8B5CF6]/10 rounded-lg blur opacity-30"></div>
            <p className="relative text-gray-300 text-center">
              Join the future of AI-driven success today with our team of specialized AI agents working together to elevate your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
