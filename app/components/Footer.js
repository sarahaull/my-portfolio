'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

// ---------- SPARKLE UNTUK BUNGA (diperkecil & warnanya dibedakan) ----------
const FlowerSparkle = ({ delay = 0, duration = 2, x = 0, y = 0, color = 'yellow-200' }) => {
  const colorMap = {
    'yellow': 'bg-yellow-200 shadow-[0_0_10px_3px_rgba(255,240,150,0.8)]',
    'pink': 'bg-pink-200 shadow-[0_0_10px_3px_rgba(255,180,200,0.8)]',
    'blue': 'bg-blue-200 shadow-[0_0_10px_3px_rgba(150,200,255,0.8)]',
    'purple': 'bg-purple-200 shadow-[0_0_10px_3px_rgba(200,150,255,0.8)]',
    'white': 'bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]',
    'emerald': 'bg-emerald-200 shadow-[0_0_10px_3px_rgba(150,255,200,0.8)]',
  }
  const selectedColor = colorMap[color] || colorMap['yellow']

  return (
    <motion.span
      className={`absolute w-1.5 h-1.5 rounded-full ${selectedColor}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.8, 0],
        x: [0, (Math.random() - 0.5) * 30],
        y: [0, (Math.random() - 0.5) * 30],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 0.5,
        ease: "easeOut",
      }}
    />
  )
}

// ---------- SPARKLE JATUH DARI ATAS (banyak & estetik) ----------
const FallingSparkle = ({ delay = 0, x = 0, size = 2, color = 'white', duration = 6 }) => {
  const colorClass = {
    'white': 'bg-white/80 shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]',
    'pink': 'bg-pink-200/80 shadow-[0_0_6px_2px_rgba(255,180,200,0.6)]',
    'purple': 'bg-purple-200/80 shadow-[0_0_6px_2px_rgba(200,150,255,0.6)]',
    'blue': 'bg-blue-200/80 shadow-[0_0_6px_2px_rgba(150,200,255,0.6)]',
    'gold': 'bg-yellow-200/80 shadow-[0_0_6px_2px_rgba(255,240,150,0.6)]',
    'emerald': 'bg-emerald-200/80 shadow-[0_0_6px_2px_rgba(150,255,200,0.6)]',
  }

  return (
    <motion.div
      className={`absolute rounded-full ${colorClass[color]}`}
      style={{
        left: `${x}%`,
        top: '-10px',
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: ['0vh', '110vh'],
        x: [0, (Math.random() - 0.5) * 60],
      }}
      transition={{
        duration: duration + Math.random() * 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "linear",
      }}
    />
  )
}

export default function Footer() {
  // Kumpulan partikel jatuh (40 partikel dengan variasi)
  const fallingSparkles = []
  const colors = ['white', 'pink', 'purple', 'blue', 'gold', 'emerald']
  for (let i = 0; i < 45; i++) {
    const x = Math.random() * 100
    const size = 1.5 + Math.random() * 3
    const color = colors[Math.floor(Math.random() * colors.length)]
    const delay = Math.random() * 8
    const duration = 5 + Math.random() * 5
    fallingSparkles.push({ x, size, color, delay, duration, id: i })
  }

  return (
    <footer className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/bgx.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-[1px]" />
      </div>

      {/* ====== HUJAN SPARKLE DARI ATAS ====== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {fallingSparkles.map((sp) => (
          <FallingSparkle
            key={sp.id}
            x={sp.x}
            size={sp.size}
            color={sp.color}
            delay={sp.delay}
            duration={sp.duration}
          />
        ))}
      </div>

      {/* ====== BUNGA DENGAN SPARKLE KECIL & BERWARNA ====== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Bunga 1 - warna pink */}
        <div className="absolute" style={{ left: '5%', top: '10%' }}>
          <motion.div
            style={{ width: '70px', height: '70px' }}
            animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/b1.png" alt="bunga" width={70} height={70} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.3} duration={2.5} x={15} y={-10} color="pink" />
          <FlowerSparkle delay={1.0} duration={3.0} x={-12} y={20} color="blue" />
          <FlowerSparkle delay={1.8} duration={2.2} x={30} y={8} color="white" />
          <FlowerSparkle delay={2.5} duration={3.5} x={-5} y={-18} color="purple" />
        </div>

        {/* Bunga 2 - warna purple */}
        <div className="absolute" style={{ right: '8%', top: '20%' }}>
          <motion.div
            style={{ width: '60px', height: '60px' }}
            animate={{ y: [0, 25, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Image src="/b3.png" alt="bunga" width={60} height={60} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.5} duration={2.8} x={-18} y={-12} color="purple" />
          <FlowerSparkle delay={1.3} duration={3.2} x={20} y={15} color="emerald" />
          <FlowerSparkle delay={2.1} duration={2.6} x={-8} y={-5} color="pink" />
          <FlowerSparkle delay={3.0} duration={3.0} x={25} y={-8} color="white" />
        </div>

        {/* Bunga 3 - warna emas */}
        <div className="absolute" style={{ left: '15%', bottom: '20%' }}>
          <motion.div
            style={{ width: '80px', height: '80px' }}
            animate={{ y: [0, -30, 0], rotate: [0, 25, -25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Image src="/b4.png" alt="bunga" width={80} height={80} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.2} duration={2.2} x={25} y={-15} color="gold" />
          <FlowerSparkle delay={1.1} duration={3.5} x={-10} y={25} color="pink" />
          <FlowerSparkle delay={1.9} duration={2.7} x={15} y={-20} color="blue" />
          <FlowerSparkle delay={2.8} duration={3.1} x={-20} y={10} color="white" />
          <FlowerSparkle delay={3.5} duration={2.4} x={5} y={-5} color="purple" />
        </div>

        {/* Bunga 4 - warna biru */}
        <div className="absolute" style={{ right: '20%', bottom: '30%' }}>
          <motion.div
            style={{ width: '50px', height: '50px' }}
            animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Image src="/b2.png" alt="bunga" width={50} height={50} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.7} duration={2.4} x={-12} y={-8} color="blue" />
          <FlowerSparkle delay={1.6} duration={3.0} x={18} y={15} color="purple" />
          <FlowerSparkle delay={2.4} duration={2.8} x={-5} y={12} color="emerald" />
          <FlowerSparkle delay={3.2} duration={3.3} x={22} y={-6} color="pink" />
        </div>

        {/* Bunga 5 - warna putih */}
        <div className="absolute" style={{ left: '45%', top: '5%' }}>
          <motion.div
            style={{ width: '60px', height: '60px' }}
            animate={{ y: [0, -18, 0], rotate: [0, 20, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image src="/b6.png" alt="bunga" width={60} height={60} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.4} duration={3.1} x={10} y={-15} color="white" />
          <FlowerSparkle delay={1.2} duration={2.6} x={-20} y={12} color="gold" />
          <FlowerSparkle delay={2.0} duration={3.4} x={15} y={5} color="pink" />
          <FlowerSparkle delay={2.9} duration={2.5} x={-10} y={-10} color="blue" />
        </div>

        {/* Bunga 6 - warna emerald */}
        <div className="absolute" style={{ right: '35%', bottom: '5%' }}>
          <motion.div
            style={{ width: '70px', height: '70px' }}
            animate={{ y: [0, 22, 0], rotate: [0, -25, 25, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <Image src="/b5.png" alt="bunga" width={70} height={70} className="object-contain opacity-100 drop-shadow-[0_0_12px_rgba(255,200,200,0.6)]" />
          </motion.div>
          <FlowerSparkle delay={0.6} duration={2.9} x={-10} y={-8} color="emerald" />
          <FlowerSparkle delay={1.5} duration={3.3} x={22} y={-6} color="purple" />
          <FlowerSparkle delay={2.3} duration={2.5} x={-25} y={18} color="gold" />
          <FlowerSparkle delay={3.1} duration={3.6} x={12} y={-12} color="white" />
          <FlowerSparkle delay={3.8} duration={2.8} x={-5} y={20} color="pink" />
        </div>
      </div>

      {/* Garis atas */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="h-[4px] w-full rounded-full bg-gradient-to-r from-[#8ED8FF] via-[#FFD6EA] to-[#8ED8FF]" />
      </div>

      {/* ====== KONTEN UTAMA (sama persis) ====== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative flex items-center justify-center h-[220px]">
              <Image src="/cm.png" alt="Contact" width={750} height={450} className="absolute object-contain" priority />
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-angela-white text-[#5A6F43]">Contact Me!!</h2>
            </div>
          </motion.div>

          {/* Grid 3 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
            {/* Kiri */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              {/* Instagram */}
              <a href="https://www.instagram.com/userr.sararr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <FaInstagram className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">Instagram</p>
                  <p className="text-rose-800 font-semibold">@userr.sararr</p>
                </div>
              </a>
              {/* GitHub */}
              <a href="https://github.com/sarahaull" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <FaGithub className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">Github</p>
                  <p className="text-rose-800 font-semibold">sarahaull</p>
                </div>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sarah-aulia-529ab6423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <FaLinkedin className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">LinkedIn</p>
                  <p className="text-rose-800 font-semibold">Sarah Aulia</p>
                </div>
              </a>
            </motion.div>

            {/* Tengah */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-savannah text-pink-300/90 tracking-wide drop-shadow-lg">ssaraaPurple</h1>
            </motion.div>

            {/* Kanan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              <a href="https://mail.google.com/mail/?view=cm&to=ssarahchannel@gmail.com&su=Let's%20Work%20Together&body=Hello%20Sarah," className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <Mail className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">Email</p>
                  <p className="text-rose-800 font-semibold break-all">ssarahchannel@gmail.com</p>
                </div>
              </a>
              <a href="tel:+6288102538776" className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <Phone className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">Phone</p>
                  <p className="text-rose-800 font-semibold">+62 881 - 0253 - 8776</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-6 px-8 py-5 rounded-[26px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-rose-100/40 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(200,120,255,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200/50 hover:via-pink-200/50 hover:to-rose-200/50 hover:scale-[1.02] cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/80 border border-purple-200 shadow-lg flex items-center justify-center">
                  <MapPin className="text-purple-700" size={20}/>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-purple-700 font-medium">Address</p>
                  <p className="text-rose-800 font-semibold">Depok, Indonesia</p>
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
            <p className="text-white/70 text-sm font-light tracking-wider drop-shadow-sm">ssaraa</p>
            <p className="text-white/50 text-xs font-light mt-1 tracking-wider drop-shadow-sm">ssaraa</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}