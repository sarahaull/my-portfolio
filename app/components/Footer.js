'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay Tipis */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bgx.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-[1px]"></div>
      </div>

      {/* Garis panjang di atas footer */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="h-[4px] w-full rounded-full bg-gradient-to-r from-[#8ED8FF] via-[#FFD6EA] to-[#8ED8FF]" />
      </div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Title - Contact Me!! dengan font Angela White */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative flex items-center justify-center h-[220px]">
              <Image
                src="/cm.png"
                alt="Contact"
                width={750}
                height={450}
                className="absolute object-contain"
                priority
              />
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-angela-white text-[#5A6F43]">
                Contact Me!!
              </h2>
            </div>
          </motion.div>

          {/* Content - Grid 3 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
            
            {/* Left Column - Instagram & GitHub */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              {/* Instagram Card - Link ke Instagram */}
              <a
                href="https://www.instagram.com/userr.sararr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-white/35 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(120,180,255,0.18)] transition-all duration-300 hover:bg-white/45 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-[#B8DBFF] shadow-lg flex items-center justify-center">
                  <FaInstagram className="text-[#5B351C]" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5B351C]">
                    Instagram
                  </p>
                  <p className="text-[#234B73] font-semibold">
                    @userr.sararr
                  </p>
                </div>
              </a>

              {/* GitHub Card - Link ke GitHub */}
              <a
                href="https://github.com/sarahaull"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-white/35 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(120,180,255,0.18)] transition-all duration-300 hover:bg-white/45 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-[#B8DBFF] shadow-lg flex items-center justify-center">
                  <FaGithub className="text-[#5B351C]" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5B351C]">
                    Github
                  </p>
                  <p className="text-[#234B73] font-semibold">
                    sarahaull
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Center Column - ssaraaPurple dengan font Savannah */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-savannah text-pink-300/90 tracking-wide drop-shadow-lg">
                ssaraaPurple
              </h1>
            </motion.div>

            {/* Right Column - Email & Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              {/* Email Card - Link ke Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=ssarahchannel@gmail.com&su=Let's%20Work%20Together&body=Hello%20Sarah,"
                className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-white/35 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(120,180,255,0.18)] transition-all duration-300 hover:bg-white/45 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-[#B8DBFF] shadow-lg flex items-center justify-center">
                  <Mail className="text-[#5B351C]" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5B351C]">
                    Email
                  </p>
                  <p className="text-[#234B73] font-semibold break-all">
                    ssarahchannel@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card - Link ke Telepon */}
              <a
                href="tel:+6288102538776"
                className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-white/35 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(120,180,255,0.18)] transition-all duration-300 hover:bg-white/45 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-[#B8DBFF] shadow-lg flex items-center justify-center">
                  <Phone className="text-[#5B351C]" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5B351C]">
                    Phone
                  </p>
                  <p className="text-[#234B73] font-semibold">
                    +62 881 - 0253 - 8776
                  </p>
                </div>
              </a>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 pt-6 border-t border-white/30 text-center"
          >
            <p className="text-white/70 text-sm font-light tracking-wider drop-shadow-sm">
              ssaraa
            </p>
            <p className="text-white/50 text-xs font-light mt-1 tracking-wider drop-shadow-sm">
              ssaraa
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}