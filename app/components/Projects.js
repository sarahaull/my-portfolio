'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Layout,
  Smartphone,
  Monitor,
  Grid3x3,
  Sparkles,
  Zap,
  Eye,
  ArrowRight
} from 'lucide-react'
import { FaGithub, FaFigma } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'QKdrama WEB',
    subtitle: 'Movie WEB',
    description: 'A modern movie website UI/UX design focused on creating an intuitive and visually appealing experience. It includes a responsive layout, easy navigation, and a clean interface for exploring movie information.',
    images: [
      '/4.png',
      '/mw1.png',
      '/mw2.png',
      '/mw3.png',
    ],
    tags: ['Figma', 'UI/UX Design'],
    category: 'design',
    figmaLink: 'https://www.figma.com/design/x7QylEv7lPYKsIdE80nTwo/Untitled?t=RbS2uYyXuIjw2bii-1',
    githubLink: null,
    demoLink: null,
    showFigma: true,
    showGithub: false,
    showDemo: false,
  },
  {
    id: 2,
    title: 'SWARA APP',
    subtitle: 'Complaint Application',
    description: 'A mobile UI/UX design for a community complaint application that enables users to submit reports, track complaint status, and communicate with administrators through a simple and user-friendly interface.',
    images: [
      '/mobile1.png',
      '/mobile2.png',
      '/mobile3.png',
    ],
    tags: ['Figma', 'UI/UX'],
    category: 'mobile',
    figmaLink: 'https://www.figma.com/design/tMk4htZLwTToMAvNBrvjtA/Sistem-Pengaduan-Masyarakat?node-id=0-1&t=ysCciWQkfwOGx5uy-1',
    githubLink: 'https://github.com/sarahaull/sistem-pengaduan-masyarakat',
    demoLink: null,
    showFigma: true,
    showGithub: true,
    showDemo: false,
  },
  {
    id: 3,
    title: 'ShinyShop',
    subtitle: 'Basic E-Commerce WEB',
    description: 'A basic e-commerce website that provides a simple and seamless online shopping experience. It includes product browsing, product details, a shopping cart, and a responsive interface for easy navigation.',
    images: [
      '/win1.png',
      '/win2.png',
      '/win3.png',
      '/win4.png',
    ],
    tags: ['Data Viz', 'Dashboard'],
    category: 'web',
    figmaLink: 'https://www.figma.com/design/7wTK9O7jHKqvroWDIeTp53/e-commerce-basic-project-AAS-X?node-id=0-1&t=RbS2uYyXuIjw2bii-1',
    githubLink: 'https://github.com/sarahaull/e-commerce-basic',
    demoLink: 'https://shinyshop.vercel.app',
    showFigma: true,
    showGithub: true,
    showDemo: true,
  },
  {
    id: 4,
    title: 'Stel Vativ',
    subtitle: 'Mobile Payment',
    description: 'A mobile UI/UX design for a digital payment application that enables users to make QR code payments, transfer money, manage transactions, and track payment history through a simple and intuitive interface.',
    images: [
      '/stel1.png',
      '/stel2.png',
      '/stel3.png',
      '/stel4.png',
    ],
    tags: ['Branding', 'Design'],
    category: 'design',
    figmaLink: 'https://www.figma.com/design/vF1RmMgZCA5gL4KWue1qrI/project-ddg?node-id=0-1&t=z5VKZDhHRPQcEpFE-1',
    githubLink: null,
    demoLink: null,
    showFigma: true,
    showGithub: false,
    showDemo: false,
  },
  {
    id: 5,
    title: 'MYLIBRARY',
    subtitle: 'Basic Library WEB',
    description: 'A basic library website developed to help users browse book collections, search for books, and access detailed book information through a clean and responsive interface.',
    images: [
      '/library2.png',
      '/oul3.png',
      '/oul2.png',
      '/oul1.png',
    ],
    tags: ['Data Viz', 'Dashboard'],
    category: 'web',
    figmaLink: 'https://www.figma.com/design/skCV6JgN3Iyocpyx1jbCoo/library?node-id=0-1&t=ldo1EyXPA71Ejgw3-1',
    githubLink: 'https://github.com/sarahaull/mylibrary-project',
    demoLink: null,
    showFigma: true,
    showGithub: true,
    showDemo: false,
  },
  {
    id: 6,
    title: 'QKdrama',
    subtitle: 'Movie App UI/UX',
    description: 'A mobile library app UI/UX design that provides an easy and intuitive way for users to explore book collections, search for books, and manage their reading experience through a clean and modern interface',
    images: [
      '/movie.png',
      '/second.png',
      '/third.png',
      '/terakhir.png',
    ],
    tags: ['Figma', 'Design'],
    category: 'design',
    figmaLink: 'https://www.figma.com/design/pu1czXyh1RaSNLCMTMnnST/Untitled?t=RbS2uYyXuIjw2bii-1',
    githubLink: null,
    demoLink: null,
    showFigma: true,
    showGithub: false,
    showDemo: false,
  },
  {
    id: 7,
    title: 'MYLIBRARY APP',
    subtitle: 'Basic Library App',
    description: 'A basic mobile library application designed to help users browse book collections, search for books, and view book details through a simple and user-friendly interface.',
    images: [
      '/m1.png',
      '/m2.png',
      '/m3.png',
    ],
    tags: ['Mobile', 'UI/UX'],
    category: 'mobile',
    figmaLink: 'https://www.figma.com/design/NamNDZYuCs7oH34s3GESiM/Untitled?node-id=0-1&t=jbnK7annGT5FrGDE-1',
    githubLink: 'https://github.com/yourusername/mylibrary-app',
    demoLink: null,
    showFigma: true,
    showGithub: true,
    showDemo: false,
  },
  {
    id: 8,
    title: 'SWARA WEB',
    subtitle: 'Complaint Application',
    description: 'A basic mobile library application designed to help users browse book collections, search for books, and view book details through a simple and user-friendly interface.',
    images: [
      '/swaraweb.png',
      '/swaraweb1.png',
      '/swaraweb2.png',
      '/swaraweb3.png',
    ],
    tags: ['Data viz', 'Dashboard'],
    category: 'web',
    figmaLink: 'https://www.figma.com/design/tMk4htZLwTToMAvNBrvjtA/Sistem-Pengaduan-Masyarakat?node-id=0-1&t=ysCciWQkfwOGx5uy-1',
    githubLink: 'https://github.com/sarahaull/sistem-pengaduan-masyarakat',
    demoLink: null,
    showFigma: true,
    showGithub: true,
    showDemo: false,
  },
  {
    id: 9,
    title: 'HEAVEN RECIPE',
    subtitle: 'Basic Recipe WEB',
    description: 'A beautiful recipe application UI/UX design that helps users discover, save, and share delicious recipes. Features include recipe browsing, detailed recipe views, ingredient lists, and cooking instructions.',
    images: [
      '/r1.png',
      '/r2.png',
      '/r3.png',
      '/r4.png',
    ],
    tags: ['Data viz', 'Dashboard'],
    category: 'web',
    figmaLink: 'https://www.figma.com/design/tMk4htZLwTToMAvNBrvjtA/Sistem-Pengaduan-Masyarakat?node-id=0-1&t=ysCciWQkfwOGx5uy-1',
    githubLink: 'https://github.com/sarahaull/sistem-pengaduan-masyarakat',
    demoLink: 'https://heavenrecipe-project.vercel.app',
    showFigma: false,   // <-- Perubahan: tombol Figma dihilangkan
    showGithub: true,
    showDemo: true,
  },
]

// Filter options
const filters = [
  { id: "all", label: "All" },
  { id: "design", label: "UI / UX " },
  { id: "web", label: "Web " },
  { id: "mobile", label: "Mobile" },
];

// Gelembung data
const bubbles = [
  { id: 1, size: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28', x: 'left-[2%]', y: 'top-[5%]', duration: 12, delay: 0, color: 'from-blue-300/40 to-sky-300/30', border: 'border-blue-300/30' },
  { id: 2, size: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16', x: 'left-[8%]', y: 'top-[35%]', duration: 10, delay: 2, color: 'from-purple-300/35 to-pink-300/25', border: 'border-purple-300/25' },
  { id: 3, size: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20', x: 'left-[5%]', y: 'top-[70%]', duration: 14, delay: 4, color: 'from-cyan-300/35 to-blue-300/25', border: 'border-cyan-300/25' },
  { id: 4, size: 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12', x: 'left-[12%]', y: 'top-[85%]', duration: 8, delay: 1, color: 'from-yellow-300/30 to-orange-300/20', border: 'border-yellow-300/20' },
  { id: 5, size: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24', x: 'left-[1%]', y: 'top-[50%]', duration: 16, delay: 3, color: 'from-pink-300/35 to-rose-300/25', border: 'border-pink-300/25' },
  { id: 6, size: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32', x: 'right-[2%]', y: 'top-[8%]', duration: 11, delay: 1, color: 'from-purple-300/40 to-indigo-300/30', border: 'border-purple-300/30' },
  { id: 7, size: 'w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18', x: 'right-[8%]', y: 'top-[40%]', duration: 13, delay: 3, color: 'from-blue-300/35 to-cyan-300/25', border: 'border-blue-300/25' },
  { id: 8, size: 'w-16 h-16 sm:w-18 sm:h-18 md:w-22 md:h-22', x: 'right-[4%]', y: 'top-[65%]', duration: 9, delay: 0, color: 'from-pink-300/35 to-purple-300/25', border: 'border-pink-300/25' },
  { id: 9, size: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14', x: 'right-[10%]', y: 'top-[85%]', duration: 15, delay: 2, color: 'from-sky-300/30 to-blue-300/20', border: 'border-sky-300/20' },
  { id: 10, size: 'w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26', x: 'right-[1%]', y: 'top-[50%]', duration: 10, delay: 4, color: 'from-yellow-300/30 to-amber-300/20', border: 'border-yellow-300/20' },
]

// Image Carousel Component
const ImageCarousel = ({ images, title, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const goToSlide = (index) => setCurrentIndex(index)

  const handleTouchStart = (e) => setStartX(e.touches[0].pageX)
  const handleTouchEnd = (e) => {
    const diff = startX - e.changedTouches[0].pageX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return
    const diff = startX - e.pageX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
      setIsDragging(false)
    }
  }
  const handleMouseUp = () => setIsDragging(false)

  const getCategoryLabel = () => {
    switch(category) {
      case 'design': return 'UI/UX Design'
      case 'web': return 'Web App'
      case 'mobile': return 'Mobile App'
      default: return 'Project'
    }
  }

  const getCategoryStyle = () => {
    switch(category) {
      case 'design': 
        return {
          bg: 'bg-gradient-to-r from-[#F5E6E8] to-[#F0D6DF]',
          text: 'text-[#B5838D]',
          border: 'border-[#E8D0D8]',
          shadow: 'shadow-[#B5838D]/20'
        }
      case 'web': 
        return {
          bg: 'bg-gradient-to-r from-[#E3EDF5] to-[#D6E4F0]',
          text: 'text-[#6B8FA7]',
          border: 'border-[#C8DCE8]',
          shadow: 'shadow-[#6B8FA7]/20'
        }
      case 'mobile': 
        return {
          bg: 'bg-gradient-to-r from-[#E0F0E8] to-[#D0E8DD]',
          text: 'text-[#6B9B8A]',
          border: 'border-[#C0DDD0]',
          shadow: 'shadow-[#6B9B8A]/20'
        }
      default: 
        return {
          bg: 'bg-gradient-to-r from-[#EDEDF0] to-[#E3E3E8]',
          text: 'text-[#7A7A8A]',
          border: 'border-[#D5D5DD]',
          shadow: 'shadow-[#7A7A8A]/20'
        }
    }
  }

  const style = getCategoryStyle()

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-sky-50">
      <div 
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-4 left-4 z-10">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${style.bg} backdrop-blur-sm ${style.border} border shadow-lg ${style.shadow}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${style.text} bg-current animate-pulse`}></div>
            <span className={`text-[10px] font-medium tracking-wider uppercase ${style.text}`}>
              {getCategoryLabel()}
            </span>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110 hover:shadow-xl z-10"
            >
              <ChevronLeft className="w-5 h-5 text-sky-600" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110 hover:shadow-xl z-10"
            >
              <ChevronRight className="w-5 h-5 text-sky-600" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); goToSlide(index) }}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-1.5 bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7] shadow-lg'
                  : 'w-2 h-2 bg-white/70 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Component untuk efek klik pada card - LEBIH TERLIHAT
const RippleEffect = ({ isActive }) => {
  if (!isActive) return null
  
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{ scale: 1.5, opacity: 0 }}
        exit={{ scale: 2, opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 rounded-2xl border-4 border-[#8EB1D1]"
      />
      <motion.div
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={{ scale: 1.4, opacity: 0 }}
        exit={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute inset-0 rounded-2xl border-4 border-[#A7C7E7]"
      />
      <motion.div
        initial={{ scale: 0.7, opacity: 0.4 }}
        animate={{ scale: 1.3, opacity: 0 }}
        exit={{ scale: 1.6, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8EB1D1]/30 to-[#A7C7E7]/30"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={{ scale: 1.2, opacity: 0 }}
        exit={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute inset-0 rounded-2xl bg-[#8EB1D1]/20 backdrop-blur-sm"
      />
    </>
  )
}

// Floating sparkles component
const FloatingSparkles = ({ isActive }) => {
  if (!isActive) return null
  
  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    angle: (i / 12) * Math.PI * 2,
    delay: i * 0.05
  }))

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: Math.cos(sparkle.angle) * 60,
            y: Math.sin(sparkle.angle) * 60,
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 0.8,
            delay: sparkle.delay,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7] shadow-lg shadow-[#8EB1D1]/50"
        />
      ))}
    </>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [clickedProjectId, setClickedProjectId] = useState(null)
  const [hoveredProjectId, setHoveredProjectId] = useState(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const headerY = useTransform(scrollYProgress, [0, 0.4], [0, -50])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(filteredProjects.length / itemsPerSlide)

  const nextSlide = () => {
    if (!isAnimating && currentSlide < totalSlides - 1) {
      setIsAnimating(true)
      setCurrentSlide(prev => prev + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true)
      setCurrentSlide(prev => prev - 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setCurrentSlide(0)
  }

  const getVisibleProjects = () => {
    const start = currentSlide * itemsPerSlide
    const end = start + itemsPerSlide
    return filteredProjects.slice(start, end)
  }

  const visibleProjects = getVisibleProjects()

  const handleCardClick = (projectId) => {
    setClickedProjectId(projectId)
    setTimeout(() => setClickedProjectId(null), 1200)
  }

  // Function to render action buttons based on project settings
  const renderActionButtons = (project) => {
    const buttons = []
    
    // Figma Button
    if (project.showFigma && project.figmaLink) {
      buttons.push(
        <a 
          key="figma"
          href={project.figmaLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[80px] px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7] text-white text-xs font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <FaFigma className="w-4 h-4" />
          <span>Figma</span>
        </a>
      )
    }
    
    // GitHub Button
    if (project.showGithub && project.githubLink) {
      buttons.push(
        <a 
          key="github"
          href={project.githubLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[80px] px-3 py-2.5 rounded-lg bg-[#24292e] hover:bg-[#2b3137] text-white text-xs font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      )
    }
    
    // Demo Button
    if (project.showDemo && project.demoLink) {
      buttons.push(
        <a 
          key="demo"
          href={project.demoLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[80px] px-3 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 group relative"
          onClick={(e) => e.stopPropagation()}
        >
          <Eye className="w-4 h-4" />
          <span>Live Demo</span>
          <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 -z-10"></span>
        </a>
      )
    }
    
    return buttons
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section relative overflow-hidden flex items-center justify-center min-h-screen bg-transparent py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Gelembung-gelembung animasi */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`absolute ${bubble.x} ${bubble.y}`}
            animate={{
              y: ['0%', '-35%', '-70%', '-35%', '0%'],
              x: ['0%', '12%', '0%', '-12%', '0%'],
              scale: [1, 1.15, 1.3, 1.15, 1],
              opacity: [0.5, 0.8, 1, 0.8, 0.5],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bubble.delay,
            }}
          >
            <div 
              className={`${bubble.size} rounded-full bg-gradient-to-br ${bubble.color} backdrop-blur-md border-2 ${bubble.border} shadow-2xl shadow-blue-200/20`}
            >
              <div className="absolute inset-[15%] rounded-full bg-white/30 blur-sm" />
              <div className="absolute inset-[30%] rounded-full bg-white/10 blur-md" />
              <div className="absolute top-[12%] left-[20%] w-2 h-2 rounded-full bg-white/80 blur-[1px]" />
              <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/60 blur-[1px]" />
              <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-white/50 blur-[1px]" />
              <div className="absolute bottom-[30%] right-[20%] w-2 h-2 rounded-full bg-white/70 blur-[1px]" />
              <div className="absolute top-[10%] left-[30%] w-[30%] h-[20%] rounded-full bg-white/20 blur-xl" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container-custom w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered - JUDUL DIKECILKAN */}
        <motion.div
          style={{ y: headerY }}
          className="relative text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-3 text-[#8EB1D1] font-medium"
          >
            Portfolio
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C2B48]"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7]">Projects</span>
          </motion.h2>
          
          <div className="relative w-20 sm:w-24 md:w-32 lg:w-40 h-0.5 mx-auto mt-3 sm:mt-4 md:mt-5 overflow-hidden rounded-full bg-[#A7C7E7]/30">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "250%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#8EB1D1] to-transparent"
            />
          </div>
        </motion.div>

        {/* Filter Tabs - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/70 backdrop-blur-2xl rounded-full border border-[#D7E7F4] shadow-[0_10px_35px_rgba(142,177,209,0.15)]">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`
                    relative
                    px-5 sm:px-7 py-2 sm:py-3
                    rounded-full
                    text-xs sm:text-sm
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-[#8EB1D1]
                          to-[#A7C7E7]
                          text-white
                          shadow-lg
                          shadow-[#8EB1D1]/40
                          scale-105
                        `
                        : `
                          text-[#5B6D85]
                          hover:text-[#1C2B48]
                          hover:bg-[#EDF5FB]
                          hover:scale-105
                        `
                    }
                  `}
                >
                  {filter.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 rounded-full bg-white/80"></span>
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Project Count - Centered */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[10px] sm:text-xs text-[#1C2B48]/50 mb-5 sm:mb-7 md:mb-9"
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Carousel Container */}
        <div className="relative px-8 sm:px-12 md:px-16">
          {/* Navigation Buttons - Lebih besar dan lebih terlihat */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`
                  absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 
                  p-3 sm:p-4 rounded-full 
                  bg-[#072248] backdrop-blur-md 
                  border-2 border-[#8EB1D1]/30 
                  shadow-xl shadow-[#8EB1D1]/20
                  transition-all duration-300
                  ${currentSlide === 0 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:scale-110 hover:border-[#8EB1D1] hover:shadow-2xl hover:shadow-[#8EB1D1]/30'
                  }
                `}
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#9bbed6]" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className={`
                  absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 
                  p-3 sm:p-4 rounded-full 
                  bg-[#072248] backdrop-blur-md 
                  border-2 border-[#8EB1D1]/30 
                  shadow-xl shadow-[#8EB1D1]/20
                  transition-all duration-300
                  ${currentSlide === totalSlides - 1 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:scale-110 hover:border-[#8EB1D1] hover:shadow-2xl hover:shadow-[#8EB1D1]/30'
                  }
                `}
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#9bbed6]" />
              </button>
            </>
          )}

          {/* Projects Grid - Card lebih besar */}
          <div className="overflow-hidden">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-9 lg:gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={activeFilter}
            >
              {visibleProjects.length > 0 ? (
                visibleProjects.map((project, i) => {
                  const isClicked = clickedProjectId === project.id
                  const isHovered = hoveredProjectId === project.id
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ y: -8 }}
                      onClick={() => handleCardClick(project.id)}
                      onMouseEnter={() => setHoveredProjectId(project.id)}
                      onMouseLeave={() => setHoveredProjectId(null)}
                      className="flex justify-center cursor-pointer relative"
                    >
                      {/* Efek klik - LEBIH TERLIHAT */}
                      <RippleEffect isActive={isClicked} />
                      
                      {/* Floating sparkles saat diklik */}
                      <FloatingSparkles isActive={isClicked} />
                      
                      {/* Efek glow saat hover - LEBIH TERANG */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute -inset-2 bg-gradient-to-r from-[#8EB1D1]/30 via-[#A7C7E7]/30 to-[#8EB1D1]/30 rounded-3xl blur-2xl"
                        />
                      )}
                      
                      <div className="w-full max-w-sm sm:max-w-none card flex flex-col p-0 hover:border-[#8EB1D1]/60 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden relative">
                        
                        {/* Image Section - Lebih besar */}
                        <div className="relative overflow-hidden group">
                          <ImageCarousel 
                            images={project.images} 
                            title={project.title}
                            category={project.category}
                          />
                          
                          {/* Overlay saat diklik - LEBIH TERLIHAT */}
                          {isClicked && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-[#8EB1D1]/30 backdrop-blur-sm flex items-center justify-center"
                            >
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="bg-white/95 backdrop-blur-md rounded-full p-5 sm:p-6 shadow-2xl shadow-[#8EB1D1]/50 border-2 border-[#8EB1D1]/30"
                              >
                                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#8EB1D1]" />
                              </motion.div>
                            </motion.div>
                          )}
                          
                          {/* Efek shine saat hover */}
                          {isHovered && (
                            <motion.div
                              initial={{ x: '-100%' }}
                              animate={{ x: '100%' }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            />
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow relative">
                          {/* Indikator interaktif */}
                          <div className="absolute top-3 right-3 flex gap-1.5">
                            <motion.div
                              animate={isHovered ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 0.5 }}
                              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#8EB1D1]"
                            />
                            <motion.div
                              animate={isHovered ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 0.5 }}
                              transition={{ duration: 0.8, delay: 0.15, repeat: isHovered ? Infinity : 0 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#A7C7E7]"
                            />
                            <motion.div
                              animate={isHovered ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 0.5 }}
                              transition={{ duration: 0.8, delay: 0.3, repeat: isHovered ? Infinity : 0 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#8EB1D1]"
                            />
                          </div>
                          
                          {/* Title Section */}
                          <div className="mb-2 sm:mb-3 md:mb-4">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1C2B48] leading-tight group-hover:text-[#8EB1D1] transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-medium text-[#8EB1D1] mt-1 sm:mt-1.5">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-[#1C2B48]/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-5 flex-grow line-clamp-3 sm:line-clamp-4">
                            {project.description}
                          </p>

                        
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
                            {project.tags.map((tag, j) => (
                              <span 
                                key={j} 
                                className="badge text-[8px] sm:text-[9px] md:text-[10px] bg-[#8EB1D1]/8 text-[#8EB1D1] border-[#8EB1D1]/15 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 transition-all duration-300 hover:bg-[#8EB1D1]/20 hover:scale-105"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 md:pt-5 border-t border-[#A7C7E7]/20">
                            {renderActionButtons(project)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })
              ) : (
                <div className="col-span-full text-center py-12 sm:py-16 md:py-20">
                  <p className="text-[#1C2B48]/50 text-xs sm:text-sm">No projects found in this category</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Pagination Dots - Centered */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-[#8EB1D1] to-[#A7C7E7] shadow-lg'
                      : 'w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-[#8EB1D1]/30 hover:bg-[#8EB1D1]/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}