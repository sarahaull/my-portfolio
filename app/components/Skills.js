'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const skills = [
  { 
    name: 'React', 
    icon: 'logos:react',
    color: '#61DAFB',
    description: 'UI Library',
    bgGradient: 'from-cyan-500/10 to-blue-500/10'
  },
  { 
    name: 'Next.js', 
    icon: 'logos:nextjs-icon',
    color: '#000000',
    description: 'React Framework',
    bgGradient: 'from-gray-500/10 to-slate-500/10'
  },
  { 
    name: 'TypeScript', 
    icon: 'logos:typescript-icon',
    color: '#3178C6',
    description: 'Type Safety',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  { 
    name: 'Tailwind', 
    icon: 'logos:tailwindcss-icon',
    color: '#06B6D4',
    description: 'CSS Framework',
    bgGradient: 'from-cyan-500/10 to-teal-500/10'
  },
  { 
    name: 'Node.js', 
    icon: 'logos:nodejs-icon',
    color: '#339933',
    description: 'Runtime',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  { 
    name: 'Supabase', 
    icon: 'logos:supabase-icon',
    color: '#3ECF8E',
    description: 'Backend',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  { 
    name: 'Figma', 
    icon: 'logos:figma',
    color: '#F24E1E',
    description: 'Design Tool',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  { 
    name: 'JavaScript', 
    icon: 'logos:javascript',
    color: '#F7DF1E',
    description: 'Core Language',
    bgGradient: 'from-yellow-500/10 to-amber-500/10'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'logos:postgresql',
    color: '#4169E1',
    description: 'Database',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  { 
    name: 'MySQL', 
    icon: 'logos:mysql',
    color: '#4479A1',
    description: 'Database',
    bgGradient: 'from-blue-500/10 to-sky-500/10'
  },
  { 
    name: 'HTML', 
    icon: 'logos:html-5',
    color: '#E34F26',
    description: 'Markup Language',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  { 
    name: 'GitHub', 
    icon: 'logos:github-icon',
    color: '#6e5494',
    description: 'Collaboration',
    bgGradient: 'from-purple-500/10 to-violet-500/10'
  },
]

// Data floating dots dengan nilai FIXED - DIPERBESAR
const FIXED_DOTS = [
  { id: 0, width: '5.18', height: '6.68', top: '77.72', left: '27.88', duration: '11.97', delay: '0.45' },
  { id: 1, width: '6.67', height: '4.72', top: '51.11', left: '92.97', duration: '8.88', delay: '0.04' },
  { id: 2, width: '4.94', height: '4.77', top: '77.40', left: '92.69', duration: '8.57', delay: '1.77' },
  { id: 3, width: '6.61', height: '5.64', top: '44.82', left: '79.44', duration: '6.33', delay: '0.81' },
  { id: 4, width: '4.83', height: '6.63', top: '73.50', left: '45.52', duration: '5.76', delay: '0.80' },
  { id: 5, width: '6.86', height: '4.03', top: '61.21', left: '20.20', duration: '10.74', delay: '2.46' },
  { id: 6, width: '5.63', height: '6.19', top: '78.61', left: '83.18', duration: '12.71', delay: '1.97' },
  { id: 7, width: '5.22', height: '5.31', top: '8.19', left: '31.98', duration: '7.90', delay: '2.12' },
  { id: 8, width: '6.20', height: '5.64', top: '94.58', left: '16.01', duration: '11.70', delay: '1.45' },
  { id: 9, width: '4.39', height: '5.37', top: '60.31', left: '90.36', duration: '5.26', delay: '2.18' },
  { id: 10, width: '4.63', height: '4.22', top: '20.55', left: '70.78', duration: '7.28', delay: '1.37' },
  { id: 11, width: '4.16', height: '4.22', top: '49.42', left: '80.63', duration: '10.13', delay: '1.40' },
  { id: 12, width: '4.53', height: '4.86', top: '82.78', left: '48.41', duration: '11.14', delay: '2.78' },
  { id: 13, width: '4.09', height: '4.49', top: '63.17', left: '89.56', duration: '8.85', delay: '0.61' },
  { id: 14, width: '6.91', height: '5.15', top: '29.86', left: '79.29', duration: '11.20', delay: '1.62' },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const rows = skills.reduce((acc, skill, i) => {
    const rowIndex = Math.floor(i / 4)
    if (!acc[rowIndex]) acc[rowIndex] = []
    acc[rowIndex].push(skill)
    return acc
  }, [])

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 overflow-hidden flex items-center justify-center font-poppins"
      suppressHydrationWarning
    >
      {/* ============================================== */}
      {/* PITA GELOMBANG ATAS */}
      {/* ============================================== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20 rotate-180">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[45px] md:h-[60px] lg:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F4EE"
            opacity="0.9"
            d="M0,80 C160,140 320,20 480,80 C640,140 800,20 960,80 C1120,140 1280,20 1440,80 L1440,180 L0,180 Z"
          />
          <path
            fill="#E8ECEF"
            opacity="0.5"
            d="M0,95 C200,155 400,35 600,95 C800,155 1000,35 1200,95 C1300,135 1400,55 1440,95 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* ============================================== */}
      {/* DEKORASI - DIPERBESAR */}
      {/* ============================================== */}
      
      {/* Kincir Angin Kiri - DIPERBESAR */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 left-0 w-full z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="absolute -left-4 sm:-left-8 md:-left-12 bottom-0 animate-windmill-slow">
            <Image
              src="/kin.png"
              alt="Kincir Angin"
              width={200}
              height={100}
              className="w-20 h-10 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 object-contain opacity-60"
              priority
            />
          </div>
        </div>
      </div>

      {/* Kincir Angin Kanan - DIPERBESAR */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 right-0 w-full z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="absolute -right-4 sm:-right-8 md:-right-12 bottom-0 animate-windmill-slow-reverse">
            <Image
              src="/bin.png"
              alt="Kincir Angin"
              width={180}
              height={90}
              className="w-16 h-8 sm:w-28 sm:h-14 md:w-40 md:h-20 lg:w-56 lg:h-28 object-contain opacity-50"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bunga - DIPERBESAR */}
      <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40 left-[5%] sm:left-[8%] z-10 pointer-events-none animate-float-flower">
        <Image
          src="/ikan.png"
          alt="Bunga"
          width={48}
          height={48}
          className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-44 right-[5%] sm:right-[6%] z-10 pointer-events-none animate-float-flower-delay">
        <Image
          src="/ppp.png"
          alt="Bunga"
          width={44}
          height={44}
          className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-20 lg:h-30 object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-36 sm:bottom-40 md:bottom-44 lg:bottom-48 left-[45%] sm:left-[48%] z-10 pointer-events-none animate-float-flower-slow">
        <Image
          src="/spirul.png"
          alt="Bunga"
          width={40}
          height={40}
          className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          priority
        />
      </div>

      {/* Lebah - DIPERBESAR */}
      <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40 left-[20%] sm:left-[22%] z-10 pointer-events-none animate-bee">
        <Image
          src="/kumbang.png"
          alt="Lebah"
          width={40}
          height={40}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-44 right-[20%] sm:right-[22%] z-10 pointer-events-none animate-bee-delay">
        <Image
          src="/kumbang.png"
          alt="Lebah"
          width={36}
          height={36}
          className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain"
          priority
        />
      </div>

      {/* Sparkle - DIPERBESAR */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 left-[30%] sm:left-[35%] z-10 pointer-events-none animate-sparkle">
        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
        </svg>
      </div>

      <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40 right-[35%] sm:right-[40%] z-10 pointer-events-none animate-sparkle-delay">
        <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
        </svg>
      </div>

      {/* ============================================== */}
      {/* PITA GELOMBANG BAWAH */}
      {/* ============================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] sm:h-[55px] md:h-[70px] lg:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F4EE"
            opacity="0.95"
            d="M0,80 C160,140 320,20 480,80 C640,140 800,20 960,80 C1120,140 1280,20 1440,80 L1440,180 L0,180 Z"
          />
          <path
            fill="#E8ECEF"
            opacity="0.6"
            d="M0,95 C200,155 400,35 600,95 C800,155 1000,35 1200,95 C1300,135 1400,55 1440,95 L1440,180 L0,180 Z"
          />
          <path
            fill="#D5E3EE"
            opacity="0.4"
            d="M0,110 C240,170 480,50 720,110 C960,170 1200,50 1440,110 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* Background Decoration - Floating Dots - DIPERBESAR dan lebih terang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />
        
        {mounted && (
          <div className="absolute inset-0 opacity-30">
            {FIXED_DOTS.map((dot) => (
              <div
                key={dot.id}
                className="absolute rounded-full bg-blue-300/40"
                style={{
                  width: dot.width + 'px',
                  height: dot.height + 'px',
                  top: dot.top + '%',
                  left: dot.left + '%',
                  animation: `float ${dot.duration}s ease-in-out infinite`,
                  animationDelay: `${dot.delay}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }

        @keyframes windmill-slow {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes windmill-slow-reverse {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(-360deg) scale(1); }
        }

        @keyframes float-flower {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }

        @keyframes float-flower-delay {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }

        @keyframes float-flower-slow {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes bee {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          25% { 
            transform: translateX(20px) translateY(-12px) rotate(10deg) scale(1.08);
          }
          50% { 
            transform: translateX(40px) translateY(0) rotate(0deg) scale(1);
          }
          75% { 
            transform: translateX(20px) translateY(-12px) rotate(-10deg) scale(1.08);
          }
        }

        @keyframes bee-delay {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          25% { 
            transform: translateX(-20px) translateY(-12px) rotate(-10deg) scale(1.08);
          }
          50% { 
            transform: translateX(-40px) translateY(0) rotate(0deg) scale(1);
          }
          75% { 
            transform: translateX(-20px) translateY(-12px) rotate(10deg) scale(1.08);
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            transform: scale(0.6) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.5) rotate(180deg); 
            opacity: 1;
          }
        }

        @keyframes sparkle-delay {
          0%, 100% { 
            transform: scale(0.5) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.6) rotate(180deg); 
            opacity: 1;
          }
        }

        .animate-windmill-slow {
          animation: windmill-slow 12s linear infinite;
        }

        .animate-windmill-slow-reverse {
          animation: windmill-slow-reverse 14s linear infinite;
        }

        .animate-float-flower {
          animation: float-flower 4s ease-in-out infinite;
        }

        .animate-float-flower-delay {
          animation: float-flower-delay 5s ease-in-out infinite;
        }

        .animate-float-flower-slow {
          animation: float-flower-slow 6s ease-in-out infinite;
        }

        .animate-bee {
          animation: bee 5s ease-in-out infinite;
        }

        .animate-bee-delay {
          animation: bee-delay 6s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .animate-sparkle-delay {
          animation: sparkle-delay 4s ease-in-out infinite;
        }
      `}</style>

      {/* ============================================== */}
      {/* KONTEN SKILLS - Dengan Iconify modern */}
      {/* ============================================== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 font-poppins">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-sky-400/30 rounded-full blur-2xl" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="-mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins"
          >
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              SKILL
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-blue-400/60 text-xs sm:text-sm mt-1.5 sm:mt-2 font-poppins"
          >
            Ssaraapurple
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              {row.map((skill, i) => {
                const globalIndex = rowIndex * 4 + i
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: globalIndex * 0.08,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.2, type: "spring", stiffness: 300 }
                    }}
                    className="group relative font-poppins"
                  >
                    <div className={`
                      relative 
                      rounded-2xl sm:rounded-2xl md:rounded-3xl
                      px-4 sm:px-5 md:px-6 lg:px-8 
                      py-6 sm:py-7 md:py-8 lg:py-10
                      bg-gradient-to-br ${skill.bgGradient}
                      backdrop-blur-sm 
                      border-2 border-white/30
                      shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]
                      transition-all duration-400 
                      overflow-hidden
                      flex flex-col items-center justify-center
                      min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px]
                      text-center
                      font-poppins
                      before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl before:p-[2px] before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500
                    `}>
                      {/* Gradient background on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${skill.color}20, transparent 70%)`
                        }}
                      />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-white/0 via-white/10 to-white/0" />
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-400/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-cyan-400/5 blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100" />
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
                      </div>
                      
                      {/* Content dengan Iconify modern */}
                      <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 font-poppins">
                        <div className="relative">
                          {/* Glow behind icon */}
                          <div 
                            className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
                            style={{ 
                              background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`,
                            }}
                          />
                          
                          <motion.div
                            whileHover={{ 
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.2,
                            }}
                            transition={{ 
                              duration: 0.6,
                              type: "spring",
                              stiffness: 400
                            }}
                            className="relative"
                          >
                            <Icon 
                              icon={skill.icon}
                              width={44}
                              height={44}
                              className="transition-all duration-300 group-hover:scale-110 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                            />
                          </motion.div>
                          
                          {/* Ring indicator */}
                          <div className="absolute -inset-3 rounded-full border-2 border-transparent group-hover:border-opacity-20 transition-all duration-500" 
                            style={{ borderColor: skill.color }}
                          />
                        </div>
                        
                        <div className="space-y-1 sm:space-y-1.5 font-poppins">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors font-poppins">
                            {skill.name}
                          </h3>
                          <div className="relative font-poppins">
                            <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-blue-400/60 uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold leading-tight font-poppins">
                              {skill.description}
                            </p>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-10 sm:group-hover:w-12 md:group-hover:w-14 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}