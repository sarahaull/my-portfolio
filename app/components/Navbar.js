'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Skills', 'About', 'Projects'];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.toLowerCase());
      
      // Cari section yang sedang aktif berdasarkan scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Jika section terlihat di viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Panggil sekali untuk inisialisasi
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-white/70 backdrop-blur-xl border-b border-[#C4D8E5]/30 shadow-sm flex items-center justify-between px-4 md:px-10 z-50 transition-all duration-500 hover:bg-white/80">
        {/* Logo - lebih ke tengah */}
        <div className="flex-1 flex justify-start md:justify-center">
          <h1 
            className="text-2xl md:text-4xl font-bold cursor-pointer relative group"
            style={{ fontFamily: 'var(--font-srisakdi)' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EB1D1] via-[#A7C7E7] to-[#8EB1D1]">
              SsaraaPurple
            </span>
            <span className="absolute -inset-2 bg-[#8EB1D1]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
          </h1>
        </div>

        {/* Menu Desktop - lebih ke tengah */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`
                relative px-4 py-2 font-medium text-base transition-all duration-300 rounded-lg
                ${active === item 
                  ? 'text-[#1C2B48]' 
                  : 'text-[#1C2B48]/60 hover:text-[#1C2B48]'
                }
              `}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className={`
                absolute inset-0 rounded-lg bg-[#A7C7E7]/30
                transition-all duration-300
                ${active === item ? 'scale-100 opacity-100' : 'scale-0 opacity-0 hover:scale-100 hover:opacity-100'}
              `}></span>
              <span className={`
                absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7]
                transition-all duration-300 rounded-full
                ${active === item ? 'w-8' : 'w-0 group-hover:w-6'}
              `}></span>
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </div>

        {/* Spacer untuk menjaga keseimbangan */}
        <div className="flex-1 hidden md:block"></div>

        {/* Tombol Hamburger Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1C2B48] p-2 hover:bg-[#A7C7E7]/20 rounded-lg transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl 
        flex flex-col items-center justify-center gap-8 z-40
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => {
              setActive(item);
              setIsOpen(false);
            }}
            className={`
              text-2xl font-medium transition-all duration-300 relative group
              ${active === item 
                ? 'text-[#1C2B48]' 
                : 'text-[#1C2B48]/50 hover:text-[#1C2B48]'
              }
            `}
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {item}
            <span className={`
              absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7]
              transition-all duration-300 rounded-full
              ${active === item ? 'w-8' : 'w-0 group-hover:w-8'}
            `}></span>
          </a>
        ))}
      </div>
    </>
  );
}