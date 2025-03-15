
import React from "react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 border-t border-gray-800 relative">
      {/* Subtle tech pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="tech-pattern w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#30a8ff]">DOMU</span> AI
            </h3>
            <p className="text-gray-400 mb-4">
              Powerful AI solutions for modern business
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 DOMU AI - All rights reserved
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#30a8ff]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">GitHub</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#30a8ff]">About</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Documentation</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#30a8ff]">Terms</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Security</a></li>
              <li><a href="#" className="hover:text-[#30a8ff]">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Powered by DOMU AI technology</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
