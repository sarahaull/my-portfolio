'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [isLoading, setIsLoading] = useState(false)

  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    setIsLoading(true)
    
    // URL file CV (ganti dengan path file CV Anda)
    const cvUrl = '/CV SARAH NURBILQIS AULIA.pdf'
    
    // Buat link download
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV_Sarah_Nurbilqis_Aulia.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setIsLoading(false)
  }

  // Fungsi untuk scroll ke footer
  const scrollToFooter = () => {
    const footer = document.getElementById('contact')
    if (footer) {
      footer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section 
      id="about" 
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/polka.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/25"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 container mx-auto max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center -translate-y-4 sm:-translate-y-6 md:-translate-y-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[#D8E7F2] bg-[#F8FBFD] px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 shadow-[0_8px_18px_rgba(124,156,189,.08)] transition-all duration-300 hover:scale-105">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#82AFCF] animate-pulse"></span>
            <span
              className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] md:tracking-[0.28em] font-semibold text-[#6788A7]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-6 sm:mt-7 md:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Get to Know{" "}
            <span className="bg-gradient-to-r from-[#7FD9FF] via-[#86afd8] to-[#B5F2FF] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8 md:mt-10">
            <div className="w-20 sm:w-24 md:w-28 h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-gradient-to-r from-[#7FD9FF] via-[#42C2FF] to-[#B5F2FF] shadow-[0_0_20px_rgba(66,194,255,0.5)]"></div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left: Photo - Dengan animasi gerak perlahan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 flex justify-center items-center lg:translate-x-6 xl:translate-x-12"
          >
            <motion.div 
              className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px]"
              animate={{
                y: [0, -8, 0, 8, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative p-1 sm:p-1.5 md:p-2 backdrop-blur-none rounded-2xl shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/ck1.png"
                    alt="Profile Photo"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 420px"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium text-blue-700 shadow-lg">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Decorations */}
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-lg overflow-hidden"
              >
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-14 sm:h-14 lg:w-16 lg:h-16">
                  <Image
                    src="/kiwi.png"
                    alt="Star"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 1 
                }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-lg overflow-hidden"
              >
                <div className="relative w-6 h-6 sm:w-10 sm:h-10 md:w-12 sm:h-12 lg:w-14 lg:h-14">
                  <Image
                    src="/lemon.png"
                    alt="Diamond"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Content Card dengan Animasi Gerak Perlahan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              animate={{
                y: [0, -5, 0, 5, 0],
                rotate: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[30px] border border-[#D9E6F2] bg-gradient-to-br from-[#FBFCFE] via-[#F6F9FC] to-[#EEF4F8] backdrop-blur-2xl shadow-[0_20px_50px_rgba(96,125,158,.10)] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16"
            >
              {/* Glow */}
              <div className="absolute -top-40 -right-40 w-[300px] sm:w-[350px] md:w-[420px] h-[300px] sm:h-[350px] md:h-[420px] rounded-full bg-[#D9EAF7]/70 blur-[100px] sm:blur-[120px] md:blur-[130px]" />
              <div className="absolute -bottom-40 -left-40 w-[280px] sm:w-[320px] md:w-[380px] h-[280px] sm:h-[320px] md:h-[380px] rounded-full bg-[#EDF6FC]/80 blur-[100px] sm:blur-[120px] md:blur-[130px]" />

              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-[#E3EDF6] bg-gradient-to-br from-white/95 via-[#F8FBFD]/95 to-[#F3F8FC]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(88,120,155,.08)] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">

                {/* Glow */}
                <div className="absolute -top-40 -right-40 w-[300px] sm:w-[350px] md:w-[420px] h-[300px] sm:h-[350px] md:h-[420px] rounded-full bg-[#DDECF8]/70 blur-[100px] sm:blur-[120px] md:blur-[130px]" />
                <div className="absolute -bottom-40 -left-40 w-[260px] sm:w-[300px] md:w-[360px] h-[260px] sm:h-[300px] md:h-[360px] rounded-full bg-[#F2F8FC]/80 blur-[100px] sm:blur-[120px] md:blur-[130px]" />

                <div className="relative z-10 w-full">

                  {/* Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[#D8E7F2] bg-[#F8FBFD] px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3.5 shadow-[0_8px_18px_rgba(124,156,189,.08)]">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#82AFCF] animate-pulse"></span>
                      <span
                        className="uppercase tracking-[0.2em] sm:tracking-[0.22em] md:tracking-[0.25em] text-[10px] sm:text-[11px] md:text-[13px] font-semibold text-[#6788A7]"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        About Me
                      </span>
                    </div>
                  </div>

                  {/* Heading - Nama */}
                  <div className="mt-6 sm:mt-7 md:mt-8">
                    <p
                      className="text-[#7B93AA] text-base sm:text-lg md:text-xl lg:text-2xl"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Hello, I'm
                    </p>
                    <h2
                      className="mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug text-[#2C4E70]"
                      style={{ fontFamily: "var(--font-srisakdi)" }}
                    >
                      Sarah Nurbilqis Aulia
                    </h2>
                    
                    <div className="mt-4 sm:mt-5 md:mt-6 h-[3px] sm:h-[4px] w-20 sm:w-28 md:w-36 rounded-full bg-gradient-to-r from-[#8DB2D1] via-[#ABC9E2] to-[#D8EBF7]" />
                  </div>

                  {/* Subtitle */}
                  <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-2 sm:gap-3">
                    <span className="rounded-full border border-[#DCE8F2] bg-[#F5FAFD] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-[#6788A7] shadow-sm">
                      Software Engineering
                    </span>
                    <span className="rounded-full border border-[#DCE8F2] bg-[#F5FAFD] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-[#6788A7] shadow-sm">
                      Front-End Developer
                    </span>
                    <span className="rounded-full border border-[#DCE8F2] bg-[#F5FAFD] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-[#6788A7] shadow-sm">
                      UI/UX Designer
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-[#667F96]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    I am passionate about creating intuitive and visually engaging digital
                    experiences through modern front-end development and thoughtful UI/UX
                    design. My goal is to build interfaces that are not only aesthetically
                    pleasing but also simple, responsive, and enjoyable for everyone to use.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      {/* Tombol Download CV */}
                      <button
                        onClick={handleDownloadCV}
                        disabled={isLoading}
                        className="w-full sm:w-auto min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]
                        rounded-xl sm:rounded-2xl
                        bg-gradient-to-r
                        from-[#7DA9CA]
                        via-[#91B8D7]
                        to-[#A8CAE5]
                        px-6 sm:px-8 md:px-10 lg:px-12
                        py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-5
                        text-sm sm:text-base
                        font-medium
                        text-white
                        shadow-[0_14px_28px_rgba(120,166,205,.20)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-105
                        hover:shadow-[0_18px_35px_rgba(120,166,205,.28)]
                        active:scale-95
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        flex items-center justify-center gap-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                          </>
                        )}
                      </button>
                    </div>

                    {/* Tombol Contact */}
                    <button
                      onClick={scrollToFooter}
                      className="w-full sm:w-auto min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]
                      rounded-xl sm:rounded-2xl
                      border
                      border-[#D7E6F2]
                      bg-white/80
                      backdrop-blur-sm
                      px-6 sm:px-8 md:px-10 lg:px-12
                      py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-5
                      text-sm sm:text-base
                      font-medium
                      text-[#6485A5]
                      shadow-sm
                      transition-all
                      duration-300
                      hover:bg-[#F5FAFD]
                      hover:border-[#A9C7DF]
                      hover:-translate-y-1
                      hover:shadow-lg
                      active:scale-95
                      flex items-center justify-center gap-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}