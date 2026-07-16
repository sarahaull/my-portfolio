'use client';

import { useState, useEffect } from 'react';
import { Sniglet } from 'next/font/google';
import Image from 'next/image';

// Load font
const sniglet = Sniglet({
  subsets: ['latin'],
  weight: ['400', '800'],
  display: 'swap',
});

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Fungsi untuk scroll ke Projects
  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fungsi untuk scroll ke Footer
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      className={`${sniglet.className} relative w-full min-h-screen pt-20 overflow-hidden select-none flex flex-col justify-between px-6 py-8 md:px-10 md:py-10`}
    >
      {/* ============================================== */}
      {/* BACKGROUND FOTO */}
      {/* ============================================== */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/bb.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ============================================== */}
      {/* OVERLAY GELAP TIPIS */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 bg-black/10 pointer-events-none" />

      {/* ============================================== */}
      {/* GRADASI BIRU PASTEL - TIPIS */}
      {/* ============================================== */}
      <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-[#8EB1D1]/35 via-[#A7C7E7]/15 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#8EB1D1]/30 via-[#A7C7E7]/10 to-transparent pointer-events-none z-0" />

      {/* ============================================== */}
      {/* ANIMASI OMBAK */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-[200%] h-full"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%,
                rgba(142, 177, 209, 0.5) 8%,
                rgba(167, 199, 231, 0.35) 18%,
                rgba(142, 177, 209, 0.25) 28%,
                transparent 38%,
                transparent 55%,
                rgba(142, 177, 209, 0.5) 65%,
                rgba(167, 199, 231, 0.35) 75%,
                rgba(142, 177, 209, 0.25) 85%,
                transparent 95%
              )
            `,
            animation: 'waveFlow 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-1/4 left-0 w-[200%] h-3/4"
          style={{
            background: `
              linear-gradient(270deg, 
                transparent 0%,
                rgba(167, 199, 231, 0.4) 12%,
                rgba(142, 177, 209, 0.25) 25%,
                rgba(167, 199, 231, 0.15) 38%,
                transparent 50%,
                transparent 60%,
                rgba(167, 199, 231, 0.4) 72%,
                rgba(142, 177, 209, 0.25) 82%,
                rgba(167, 199, 231, 0.15) 92%,
                transparent 100%
              )
            `,
            animation: 'waveFlowReverse 11s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-1/2 left-0 w-[200%] h-1/3"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%,
                rgba(100, 149, 237, 0.3) 15%,
                rgba(167, 199, 231, 0.2) 30%,
                transparent 45%,
                transparent 55%,
                rgba(100, 149, 237, 0.3) 70%,
                rgba(167, 199, 231, 0.2) 85%,
                transparent 100%
              )
            `,
            animation: 'waveFlow 14s ease-in-out infinite',
            opacity: 0.6,
          }}
        />
      </div>

      {/* ============================================== */}
      {/* BERCAK-BERCAK (SPLATTER) */}
      {/* ============================================== */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 15%, rgba(142, 177, 209, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 85% 10%, rgba(142, 177, 209, 0.2) 0%, transparent 45%),
            radial-gradient(circle at 50% 40%, rgba(167, 199, 231, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 5% 80%, rgba(142, 177, 209, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 90% 75%, rgba(142, 177, 209, 0.2) 0%, transparent 45%),
            radial-gradient(circle at 30% 60%, rgba(167, 199, 231, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 70% 50%, rgba(142, 177, 209, 0.15) 0%, transparent 30%)
          `,
          filter: 'blur(30px)',
          animation: 'splatterFloat 8s ease-in-out infinite',
        }}
      />

      {/* ============================================== */}
      {/* ELEMEN AWAN - DI SAMPING KIRI */}
      {/* ============================================== */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-5 pointer-events-none w-[200px] md:w-[300px] lg:w-[400px] animate-cloudFloat">
        <Image
          src="/cloud1.png"
          alt="Awan"
          width={400}
          height={200}
          className="w-full h-auto opacity-70"
          priority
        />
      </div>

      {/* ============================================== */}
      {/* ELEMEN AWAN - DI SAMPING KANAN */}
      {/* ============================================== */}
      <div className="absolute right-0 top-1/3 z-5 pointer-events-none w-[150px] md:w-[250px] lg:w-[350px] animate-cloudFloatReverse">
        <Image
          src="/cloud1.png"
          alt="Awan"
          width={350}
          height={175}
          className="w-full h-auto opacity-60"
          priority
        />
      </div>

      {/* ============================================== */}
      {/* AWAN KECIL TAMBAHAN */}
      {/* ============================================== */}
      <div className="absolute left-[20%] bottom-[15%] z-5 pointer-events-none w-[100px] md:w-[150px] lg:w-[200px] animate-cloudFloatSlow">
        <Image
          src="/cloud1.png"
          alt="Awan kecil"
          width={200}
          height={100}
          className="w-full h-auto opacity-40"
        />
      </div>

      {/* ============================================== */}
      {/* TEXTURE NOISE */}
      {/* ============================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ============================================== */}
      {/* JUDUL UTAMA DENGAN ANIMASI POP */}
      {/* ============================================== */}
      <div className="flex-grow flex items-center justify-center z-10 relative py-4 sm:py-6">
        <h1
          className="text-[4.5rem] leading-[0.8] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-black text-white tracking-[-0.03em] text-center animate-pop"
          style={{
            textShadow: '0 4px 40px rgba(0,0,0,0.3)',
          }}
        >
          portfolio
        </h1>
      </div>

      {/* ============================================== */}
      {/* TOMBOL - LEBIH DEKAT KE TEKS */}
      {/* ============================================== */}
      <div className="relative -top-16 sm:-top-20 md:-top-24 lg:-top-28 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10">
        <button
          onClick={scrollToProjects}
          className="w-[200px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[54px] md:h-[58px] rounded-full bg-[#8EB1D1] text-white text-[11px] sm:text-sm md:text-base font-bold tracking-[0.12em] shadow-xl hover:bg-[#7A9FBF] hover:scale-105 transition-all uppercase flex items-center justify-center"
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          See Project
        </button>

        <button
          onClick={scrollToFooter}
          className="w-[200px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[54px] md:h-[58px] rounded-full border-[3px] border-white text-white text-xl sm:text-2xl md:text-3xl font-bold hover:bg-white hover:text-[#8EB1D1] hover:scale-105 transition-all flex items-center justify-center"
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          }}
        >
          Contact
        </button>
      </div>

      {/* ============================================== */}
      {/* PEMBATAS GELOMBANG DI BAWAH */}
      {/* ============================================== */}
      <div className="absolute bottom-0 left-0 w-full z-5 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 40L60 45C120 50 240 60 360 55C480 50 600 30 720 35C840 40 960 70 1080 75C1200 80 1320 65 1380 57.5L1440 50V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z" 
            fill="#E8ECEF"
            opacity="0.9"
          />
          <path 
            d="M0 60L60 65C120 70 240 80 360 75C480 70 600 50 720 55C840 60 960 90 1080 95C1200 100 1320 85 1380 77.5L1440 70V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" 
            fill="#C4D8E5"
            opacity="0.4"
          />
          <path 
            d="M0 80L60 75C120 70 240 60 360 65C480 70 600 90 720 85C840 80 960 50 1080 45C1200 40 1320 55 1380 62.5L1440 70V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" 
            fill="#A7C7E7"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* ============================================== */}
      {/* CSS ANIMATIONS */}
      {/* ============================================== */}
      <style jsx>{`
        @keyframes waveFlow {
          0% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes waveFlowReverse {
          0% {
            transform: translateX(25%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(25%);
          }
        }

        @keyframes splatterFloat {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(6px, -4px) scale(1.02);
          }
          50% {
            transform: translate(-4px, 6px) scale(0.98);
          }
          75% {
            transform: translate(4px, 4px) scale(1.01);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes popSlow {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.06);
          }
          50% {
            transform: scale(0.97);
          }
          75% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes cloudFloat {
          0% {
            transform: translateY(-10px) translateX(0);
          }
          50% {
            transform: translateY(10px) translateX(15px);
          }
          100% {
            transform: translateY(-10px) translateX(0);
          }
        }

        @keyframes cloudFloatReverse {
          0% {
            transform: translateY(10px) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          100% {
            transform: translateY(10px) translateX(0);
          }
        }

        @keyframes cloudFloatSlow {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-8px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        .animate-pop {
          animation: popSlow 3s ease-in-out infinite;
        }

        .animate-cloudFloat {
          animation: cloudFloat 10s ease-in-out infinite;
        }

        .animate-cloudFloatReverse {
          animation: cloudFloatReverse 12s ease-in-out infinite;
        }

        .animate-cloudFloatSlow {
          animation: cloudFloatSlow 15s ease-in-out infinite;
        }
      `}</style>
      
    </section>
  );
}