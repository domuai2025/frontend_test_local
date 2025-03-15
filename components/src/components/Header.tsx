
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  ChevronDown, 
  ChevronRight, 
  Zap, 
  Shield, 
  Lightbulb,
  X
} from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a0d12]/90 backdrop-blur-lg py-2 shadow-md border-b border-[#1e2d3d]/30" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Text Only */}
        <div className="transition-transform duration-300 hover:scale-105">
          <span className="text-xl font-bold bg-gradient-to-r from-[#1eb0ff] to-[#2b92cc] bg-clip-text text-transparent">
            DOMU AI
          </span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-400 hover:text-white hover:bg-[#1eb0ff]/10 px-3 py-2 rounded-md transition-colors">
                Resources
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0a0d12] border border-[#1e2d3d] text-white">
                <DropdownMenuItem className="hover:bg-[#1eb0ff]/10 cursor-pointer flex items-center gap-2">
                  <Shield size={14} />
                  <span>Security</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1eb0ff]/10 cursor-pointer flex items-center gap-2">
                  <Lightbulb size={14} />
                  <span>Documentation</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1eb0ff]/10 cursor-pointer flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>API Guide</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavLink href="#testimonials">Testimonials</NavLink>
          </nav>
        )}

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-[#1e2d3d] text-gray-300 hover:bg-[#1eb0ff]/10 transition-all duration-300 hover:border-[#1eb0ff]/50"
            >
              Login
            </Button>
          )}
          
          <Button 
            variant="default"
            size="sm"
            className="text-[#0a0d12] transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,176,255,0.5)] font-semibold"
          >
            <Zap size={16} className="mr-2" />
            Get Started
          </Button>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d12]/95 backdrop-blur-xl border-t border-[#1e2d3d]/30 animate-fade-in">
          <nav className="container max-w-7xl mx-auto py-6 px-4 flex flex-col gap-4">
            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2 w-full border-[#1e2d3d] text-gray-300 hover:bg-[#1eb0ff]/10"
            >
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link 
    to={href} 
    className="text-gray-400 hover:text-white text-sm relative px-3 py-2 transition-colors after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#1eb0ff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className="text-white text-lg py-2 border-b border-[#1e2d3d]/20 flex items-center justify-between hover:text-[#1eb0ff] transition-colors"
  >
    {children}
    <ChevronRight size={16} />
  </Link>
);

export default Header;
