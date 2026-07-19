'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ['Home', 'Skills', 'About', 'Projects'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.toLowerCase());
      setScrolled(window.scrollY > 20);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 w-full h-20 z-50
        flex items-center justify-between px-4 md:px-10
        transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(139,142,209,0.15)] border-b border-[#8B8ED1]/20' 
          : 'bg-white/60 backdrop-blur-xl border-b border-[#C4D8E5]/20'
        }
      `}>
        {/* Logo - lebih ke tengah */}
        <div className="flex-1 flex justify-start md:justify-center">
          <h1 
            className="text-2xl md:text-4xl font-bold cursor-pointer relative group"
            style={{ fontFamily: 'var(--font-srisakdi)' }}
          >
            {/* Gradasi UNGU ke BIRU yang lebih kontras & jelas */}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4B9B] via-[#9B8ED1] to-[#4A8DB7] animate-gradient"
              style={{ textShadow: '0 0 40px rgba(108,75,155,0.15), 0 0 80px rgba(74,141,183,0.1)' }}
            >
              SsaraaPurple
            </span>
            {/* Glow background */}
            <span className="absolute -inset-4 bg-gradient-to-r from-[#6C4B9B]/20 via-[#9B8ED1]/20 to-[#4A8DB7]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-full"></span>
            <Sparkles 
              size={18} 
              className="absolute -top-2 -right-6 text-[#9B8ED1] opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-0 group-hover:rotate-90"
              strokeWidth={2}
            />
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {menuItems.map((item) => {
            const isActive = active === item;
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`
                  relative px-5 py-2 font-medium text-base transition-all duration-300 rounded-xl
                  ${isActive 
                    ? 'text-[#1C2B48]' 
                    : 'text-[#1C2B48]/50 hover:text-[#1C2B48]'
                  }
                `}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                <span className={`
                  absolute inset-0 rounded-xl
                  transition-all duration-500 ease-out
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#8EB1D1]/20 via-[#A7C7E7]/20 to-[#9B8ED1]/20 scale-100 opacity-100 shadow-[0_0_20px_rgba(155,142,209,0.1)]' 
                    : 'bg-transparent scale-95 opacity-0 hover:scale-100 hover:opacity-100 hover:bg-[#A7C7E7]/10'
                  }
                `}></span>
                <span className={`
                  absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 
                  bg-gradient-to-r from-[#8EB1D1] via-[#A7C7E7] to-[#9B8ED1]
                  transition-all duration-500 rounded-full
                  ${isActive ? 'w-10' : 'w-0 group-hover:w-8'}
                `}></span>
                <span className={`
                  absolute -top-1 right-1 w-1.5 h-1.5 rounded-full
                  transition-all duration-500
                  ${isActive ? 'bg-[#9B8ED1] scale-100 shadow-[0_0_12px_#9B8ED1]' : 'scale-0'}
                `}></span>
                <span className="relative z-10">{item}</span>
              </a>
            );
          })}
        </div>

        <div className="flex-1 hidden md:block"></div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1C2B48] p-2 hover:bg-gradient-to-r hover:from-[#8EB1D1]/20 hover:to-[#9B8ED1]/20 rounded-xl transition-all duration-300 relative group"
          aria-label="Toggle menu"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8EB1D1]/10 to-[#9B8ED1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          {isOpen ? (
            <X size={28} className="relative z-10 text-[#9B8ED1]" />
          ) : (
            <Menu size={28} className="relative z-10" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        fixed top-20 left-0 w-full h-[calc(100vh-80px)] z-40
        flex flex-col items-center justify-center gap-10
        transition-all duration-500 ease-in-out
        ${isOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
        }
      `}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8EB1D1]/5 via-[#A7C7E7]/5 to-[#9B8ED1]/10 -z-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#9B8ED1]/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#8EB1D1]/10 blur-3xl -z-10"></div>

        {menuItems.map((item) => {
          const isActive = active === item;
          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`
                text-3xl font-medium transition-all duration-500 relative group
                ${isActive 
                  ? 'text-[#1C2B48]' 
                  : 'text-[#1C2B48]/40 hover:text-[#1C2B48]'
                }
              `}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className={`
                absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#8EB1D1]/10 to-[#9B8ED1]/10
                transition-all duration-500 scale-0 group-hover:scale-100
                ${isActive ? 'scale-100' : ''}
              `}></span>
              <span className="relative inline-block">
                {item}
                <span className={`
                  absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 
                  bg-gradient-to-r from-[#8EB1D1] to-[#9B8ED1]
                  transition-all duration-500 rounded-full
                  ${isActive ? 'w-12' : 'w-0 group-hover:w-10'}
                `}></span>
                <span className={`
                  absolute -top-1 -right-3 w-2 h-2 rounded-full
                  transition-all duration-500
                  ${isActive 
                    ? 'bg-[#9B8ED1] scale-100 shadow-[0_0_16px_#9B8ED1]' 
                    : 'scale-0'
                  }
                `}></span>
              </span>
            </a>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </>
  );
}