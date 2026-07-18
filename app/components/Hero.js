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
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Generate posisi kupu-kupu
    const butterflyData = [
      { id: 1, x: '10%', y: '20%', delay: 0, duration: 18, size: 60 },
      { id: 2, x: '85%', y: '15%', delay: 2, duration: 22, size: 50 },
      { id: 3, x: '5%', y: '65%', delay: 4, duration: 20, size: 45 },
      { id: 4, x: '75%', y: '55%', delay: 1, duration: 25, size: 55 },
      { id: 5, x: '50%', y: '10%', delay: 3, duration: 19, size: 40 },
      { id: 6, x: '20%', y: '85%', delay: 5, duration: 23, size: 50 },
      { id: 7, x: '60%', y: '75%', delay: 2.5, duration: 21, size: 45 },
      { id: 8, x: '40%', y: '45%', delay: 4.5, duration: 24, size: 35 },
    ];
    setButterflies(butterflyData);
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
    const footer = document.getElementById('contact');
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
      {/* OVERLAY GRADASI PREMIUM */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a1a2e]/60 via-[#16213e]/40 to-[#0f3460]/30 pointer-events-none" />

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
      {/* KUPU-KUPU BIRU PREMIUM */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {butterflies.map((butterfly) => (
          <div
            key={butterfly.id}
            className="absolute butterfly-container"
            style={{
              left: butterfly.x,
              top: butterfly.y,
              animationDuration: `${butterfly.duration}s`,
              animationDelay: `${butterfly.delay}s`,
            }}
          >
            <div
              className="butterfly"
              style={{
                width: butterfly.size,
                height: butterfly.size * 0.8,
              }}
            >
              {/* Sayap Kiri */}
              <div className="wing wing-left">
                <div className="wing-gradient"></div>
                <div className="wing-sparkle"></div>
                <div className="wing-sparkle-delay"></div>
                <div className="wing-detail"></div>
                <div className="wing-detail-delay"></div>
              </div>
              
              {/* Sayap Kanan */}
              <div className="wing wing-right">
                <div className="wing-gradient"></div>
                <div className="wing-sparkle"></div>
                <div className="wing-sparkle-delay"></div>
                <div className="wing-detail"></div>
                <div className="wing-detail-delay"></div>
              </div>
              
              {/* Badan */}
              <div className="body">
                <div className="body-glow"></div>
              </div>
              
              {/* Antena */}
              <div className="antenna antenna-left"></div>
              <div className="antenna antenna-right"></div>
            </div>
          </div>
        ))}
      </div>

      {/* ============================================== */}
      {/* EFEK BLING-BLING PREMIUM - UKURAN KECIL */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Bintang Kecil 1 - Emas */}
        <div className="absolute top-[8%] left-[12%] animate-premium-twinkle">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.6),0_0_20px_rgba(255,215,0,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-gradient-to-b from-transparent via-yellow-300/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 2 - Perak */}
        <div className="absolute top-[18%] right-[18%] animate-premium-twinkle-delay-1">
          <div className="relative">
            <div className="w-2 h-2 bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-gradient-to-b from-transparent via-white/50 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 3 - Rose Gold */}
        <div className="absolute top-[48%] left-[6%] animate-premium-twinkle-delay-2">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-pink-300 via-rose-400 to-pink-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5),0_0_20px_rgba(244,63,94,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-r from-transparent via-pink-300/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-gradient-to-b from-transparent via-pink-300/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 4 - Platinum */}
        <div className="absolute top-[32%] left-[42%] animate-premium-twinkle-delay-3">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-full shadow-[0_0_10px_rgba(200,200,200,0.6),0_0_20px_rgba(200,200,200,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-transparent via-gray-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-gradient-to-b from-transparent via-gray-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 5 */}
        <div className="absolute top-[68%] right-[10%] animate-premium-twinkle-delay-1">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 rounded-full shadow-[0_0_10px_rgba(255,200,0,0.5),0_0_20px_rgba(255,200,0,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-gradient-to-b from-transparent via-yellow-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 6 */}
        <div className="absolute top-[82%] left-[22%] animate-premium-twinkle-delay-2">
          <div className="relative">
            <div className="w-1 h-1 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-full shadow-[0_0_8px_rgba(100,150,255,0.5),0_0_16px_rgba(100,150,255,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-gradient-to-b from-transparent via-blue-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 7 */}
        <div className="absolute top-[12%] left-[62%] animate-premium-twinkle-delay-3">
          <div className="relative">
            <div className="w-2 h-2 bg-gradient-to-br from-white via-purple-100 to-purple-200 rounded-full shadow-[0_0_14px_rgba(200,150,255,0.6),0_0_28px_rgba(200,150,255,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-gradient-to-b from-transparent via-white/50 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 8 */}
        <div className="absolute top-[58%] left-[82%] animate-premium-twinkle-delay-1">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 rounded-full shadow-[0_0_10px_rgba(255,200,50,0.5),0_0_20px_rgba(255,200,50,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-transparent via-amber-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-gradient-to-b from-transparent via-amber-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 9 */}
        <div className="absolute top-[28%] left-[28%] animate-premium-twinkle-delay-2">
          <div className="relative">
            <div className="w-1 h-1 bg-gradient-to-br from-cyan-200 via-sky-300 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(100,200,255,0.5),0_0_16px_rgba(100,200,255,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-gradient-to-b from-transparent via-cyan-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 10 */}
        <div className="absolute top-[92%] right-[47%] animate-premium-twinkle-delay-3">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-rose-200 via-pink-300 to-rose-400 rounded-full shadow-[0_0_10px_rgba(255,100,150,0.5),0_0_20px_rgba(255,100,150,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-gradient-to-r from-transparent via-rose-200/40 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-gradient-to-b from-transparent via-rose-200/40 to-transparent rotate-45"></div>
          </div>
        </div>

        {/* Bintang Kecil 11 - Tambahan */}
        <div className="absolute top-[45%] left-[55%] animate-premium-twinkle-delay-1">
          <div className="relative">
            <div className="w-1 h-1 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full shadow-[0_0_8px_rgba(255,215,0,0.5)]"></div>
          </div>
        </div>

        {/* Bintang Kecil 12 - Tambahan */}
        <div className="absolute top-[75%] left-[65%] animate-premium-twinkle-delay-2">
          <div className="relative">
            <div className="w-1 h-1 bg-gradient-to-br from-white to-blue-200 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
          </div>
        </div>
      </div>

      {/* ============================================== */}
      {/* PARTIKEL CAHAYA PREMIUM - ORBIT UKURAN KECIL */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-rotate-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-yellow-300/80 to-yellow-500/80 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-premium-sparkle"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-white/80 to-blue-300/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-premium-sparkle-delay-1"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-gradient-to-r from-pink-300/80 to-rose-400/80 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-premium-sparkle-delay-2"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1 bg-gradient-to-r from-cyan-300/80 to-blue-400/80 rounded-full shadow-[0_0_10px_rgba(100,200,255,0.5)] animate-premium-sparkle-delay-3"></div>
        </div>

        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] animate-rotate-slow-reverse">
          <div className="absolute top-[20%] left-[20%] w-0.5 h-0.5 bg-yellow-200/60 rounded-full shadow-[0_0_8px_rgba(255,215,0,0.3)] animate-premium-sparkle-delay-1"></div>
          <div className="absolute top-[20%] right-[20%] w-0.5 h-0.5 bg-white/60 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)] animate-premium-sparkle-delay-2"></div>
          <div className="absolute bottom-[20%] left-[20%] w-0.5 h-0.5 bg-pink-200/60 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.3)] animate-premium-sparkle-delay-3"></div>
          <div className="absolute bottom-[20%] right-[20%] w-0.5 h-0.5 bg-cyan-200/60 rounded-full shadow-[0_0_8px_rgba(100,200,255,0.3)] animate-premium-sparkle"></div>
        </div>
      </div>

      {/* ============================================== */}
      {/* EFEK GLOW PREMIUM PADA TEKS */}
      {/* ============================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-[#8EB1D1]/5 via-[#A7C7E7]/20 to-[#8EB1D1]/5 blur-3xl animate-premium-glow"></div>
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-yellow-300/5 via-white/15 to-yellow-300/5 blur-3xl animate-premium-glow-delay"></div>
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
          src="/clp.png"
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
          src="/clp.png"
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
          src="/clp.png"
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
      {/* JUDUL UTAMA DENGAN ANIMASI POP PREMIUM */}
      {/* ============================================== */}
      <div className="flex-grow flex items-center justify-center z-10 relative py-4 sm:py-6">
        <h1
          className="text-[4.5rem] leading-[0.8] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-black text-white tracking-[-0.03em] text-center animate-pop"
          style={{
            textShadow: '0 4px 40px rgba(0,0,0,0.4), 0 0 80px rgba(167, 199, 231, 0.3), 0 0 120px rgba(255,255,255,0.1)',
          }}
        >
          portfolio
        </h1>
      </div>

      {/* ============================================== */}
      {/* TOMBOL PREMIUM */}
      {/* ============================================== */}
      <div className="relative -top-16 sm:-top-20 md:-top-24 lg:-top-28 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10">
        <button
          onClick={scrollToProjects}
          className="w-[200px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[54px] md:h-[58px] rounded-full bg-gradient-to-r from-[#8EB1D1] via-[#A7C7E7] to-[#8EB1D1] text-white text-[11px] sm:text-sm md:text-base font-bold tracking-[0.12em] shadow-2xl hover:shadow-[0_0_40px_rgba(142,177,209,0.5)] hover:scale-105 transition-all uppercase flex items-center justify-center relative overflow-hidden group"
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="relative z-10">See Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-300"></div>
        </button>

        <button
          onClick={scrollToFooter}
          className="w-[200px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[54px] md:h-[58px] rounded-full border-[3px] border-white/80 text-white text-xl sm:text-2xl md:text-3xl font-bold hover:bg-white hover:text-[#8EB1D1] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center justify-center relative overflow-hidden group backdrop-blur-sm"
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <span className="relative z-10">Contact</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-300"></div>
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
      {/* CSS ANIMATIONS PREMIUM */}
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

        // Premium Twinkling Stars - Ukuran Kecil
        @keyframes premium-twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes premium-twinkle-delay-1 {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.7) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes premium-twinkle-delay-2 {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.25) rotate(-180deg);
          }
        }

        @keyframes premium-twinkle-delay-3 {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.7) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.35) rotate(-180deg);
          }
        }

        // Premium Sparkle Particles - Ukuran Kecil
        @keyframes premium-sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes premium-sparkle-delay-1 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes premium-sparkle-delay-2 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(-180deg);
          }
        }

        @keyframes premium-sparkle-delay-3 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(-180deg);
          }
        }

        // Rotating orbits
        @keyframes rotate-slow {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes rotate-slow-reverse {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        // Premium Glow
        @keyframes premium-glow {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes premium-glow-delay {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        // Butterfly Animations
        @keyframes fly-path-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(100px, -80px) scale(1.1) rotate(5deg);
          }
          50% {
            transform: translate(180px, 20px) scale(0.9) rotate(-3deg);
          }
          75% {
            transform: translate(80px, 60px) scale(1.05) rotate(3deg);
          }
        }

        @keyframes wing-flap {
          0%, 100% {
            transform: rotateY(0deg) scaleX(1);
          }
          50% {
            transform: rotateY(60deg) scaleX(0.6);
          }
        }

        @keyframes wing-flap-slow {
          0%, 100% {
            transform: rotateY(0deg) scaleX(1);
          }
          50% {
            transform: rotateY(45deg) scaleX(0.7);
          }
        }

        .butterfly-container {
          animation: fly-path-1 20s ease-in-out infinite;
          z-index: 1;
        }

        .butterfly {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: center;
          filter: drop-shadow(0 0 20px rgba(100, 150, 255, 0.3));
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        .wing {
          position: absolute;
          width: 45%;
          height: 100%;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          transform-origin: center center;
        }

        .wing-left {
          left: 5%;
          transform-origin: right center;
          animation: wing-flap 0.6s ease-in-out infinite;
        }

        .wing-right {
          right: 5%;
          transform-origin: left center;
          animation: wing-flap 0.6s ease-in-out infinite reverse;
        }

        .wing-gradient {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.8),
            rgba(37, 99, 235, 0.6),
            rgba(147, 197, 253, 0.4),
            rgba(59, 130, 246, 0.7)
          );
          box-shadow: 
            inset 0 0 30px rgba(147, 197, 253, 0.3),
            0 0 40px rgba(59, 130, 246, 0.2);
          animation: wing-glow 2s ease-in-out infinite;
        }

        @keyframes wing-glow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .wing-sparkle {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 20%;
          height: 20%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
          border-radius: 50%;
          animation: sparkle-move 2s ease-in-out infinite;
        }

        .wing-sparkle-delay {
          position: absolute;
          bottom: 25%;
          right: 25%;
          width: 15%;
          height: 15%;
          background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
          border-radius: 50%;
          animation: sparkle-move 2.5s ease-in-out infinite 1s;
        }

        @keyframes sparkle-move {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }

        .wing-detail {
          position: absolute;
          top: 40%;
          left: 40%;
          width: 30%;
          height: 30%;
          background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: detail-pulse 3s ease-in-out infinite;
        }

        .wing-detail-delay {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 15%;
          height: 15%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: detail-pulse 3.5s ease-in-out infinite 1.5s;
        }

        @keyframes detail-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        .body {
          position: absolute;
          width: 8%;
          height: 60%;
          background: linear-gradient(180deg, 
            rgba(30, 58, 138, 0.9),
            rgba(59, 130, 246, 0.8),
            rgba(30, 58, 138, 0.9)
          );
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          z-index: 2;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .body-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: body-glow 2s ease-in-out infinite;
        }

        @keyframes body-glow {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }

        .antenna {
          position: absolute;
          width: 2px;
          height: 25%;
          background: linear-gradient(to top, 
            rgba(59, 130, 246, 0.8),
            rgba(147, 197, 253, 0.6)
          );
          border-radius: 50%;
          top: -20%;
          transform-origin: bottom;
          animation: antenna-move 1.5s ease-in-out infinite;
        }

        .antenna-left {
          left: 35%;
          transform: rotate(-15deg);
        }

        .antenna-right {
          right: 35%;
          transform: rotate(15deg);
        }

        @keyframes antenna-move {
          0%, 100% {
            transform: rotate(-15deg) scaleY(1);
          }
          50% {
            transform: rotate(-25deg) scaleY(1.1);
          }
        }

        .antenna-right {
          animation-name: antenna-move-right;
        }

        @keyframes antenna-move-right {
          0%, 100% {
            transform: rotate(15deg) scaleY(1);
          }
          50% {
            transform: rotate(25deg) scaleY(1.1);
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

        .animate-premium-twinkle {
          animation: premium-twinkle 3s ease-in-out infinite;
        }

        .animate-premium-twinkle-delay-1 {
          animation: premium-twinkle-delay-1 3.5s ease-in-out infinite;
        }

        .animate-premium-twinkle-delay-2 {
          animation: premium-twinkle-delay-2 4s ease-in-out infinite;
        }

        .animate-premium-twinkle-delay-3 {
          animation: premium-twinkle-delay-3 4.5s ease-in-out infinite;
        }

        .animate-premium-sparkle {
          animation: premium-sparkle 2.5s ease-in-out infinite;
        }

        .animate-premium-sparkle-delay-1 {
          animation: premium-sparkle-delay-1 3s ease-in-out infinite;
        }

        .animate-premium-sparkle-delay-2 {
          animation: premium-sparkle-delay-2 3.5s ease-in-out infinite;
        }

        .animate-premium-sparkle-delay-3 {
          animation: premium-sparkle-delay-3 4s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-rotate-slow-reverse {
          animation: rotate-slow-reverse 25s linear infinite;
        }

        .animate-premium-glow {
          animation: premium-glow 4s ease-in-out infinite;
        }

        .animate-premium-glow-delay {
          animation: premium-glow-delay 5s ease-in-out infinite;
        }
      `}</style>
      
    </section>
  );
}