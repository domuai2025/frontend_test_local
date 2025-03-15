
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TeamImageSection = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0b14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg border border-[#1eb0ff]/20 shadow-lg shadow-[#1eb0ff]/10">
          <img 
            src="/lovable-uploads/c83be227-a649-4e5c-bd55-d2f2168b384e.png" 
            alt="AI Team" 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default TeamImageSection;
