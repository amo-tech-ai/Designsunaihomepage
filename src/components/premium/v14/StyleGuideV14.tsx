import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Sparkles, Check, X } from 'lucide-react';

export function StyleGuideV14() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] font-['Inter',sans-serif] antialiased">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#1E1E1E] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8FAE9E]/10 border border-[#8FAE9E]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#8FAE9E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8FAE9E]">
                Design System V14
              </span>
            </div>
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-medium text-[#FAFAF7] mb-6 tracking-tight leading-[1.1]">
              Luxury AI CRM<br />Design System
            </h1>
            <p className="text-lg md:text-xl text-[#8B8B8B] leading-relaxed max-w-2xl">
              The single source of truth for visual language, interactive patterns, and architectural invariants that define our executive-grade CRM experience.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE9E]/5 via-transparent to-[#C9A86A]/5 pointer-events-none" />
      </motion.section>

      {/* Table of Contents */}
      <section className="bg-white border-b border-[#E5E1D8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#philosophy" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Philosophy</h3>
              <p className="text-sm text-[#8B8B8B]">Brand personality & UI principles</p>
            </a>
            <a href="#colors" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Color System</h3>
              <p className="text-sm text-[#8B8B8B]">Palette & functional colors</p>
            </a>
            <a href="#typography" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Typography</h3>
              <p className="text-sm text-[#8B8B8B]">Font families & type scale</p>
            </a>
            <a href="#layout" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Layout</h3>
              <p className="text-sm text-[#8B8B8B]">3-Panel OS & spacing</p>
            </a>
            <a href="#components" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Components</h3>
              <p className="text-sm text-[#8B8B8B]">Buttons, cards & patterns</p>
            </a>
            <a href="#motion" className="group p-6 rounded-[32px] border border-[#E5E1D8] hover:border-[#8FAE9E] hover:shadow-lg transition-all duration-500">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-2 group-hover:text-[#8FAE9E] transition-colors">Motion</h3>
              <p className="text-sm text-[#8B8B8B]">Transitions & interactions</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* 1. DESIGN PHILOSOPHY */}
        <section id="philosophy" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">01</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Design Philosophy
            </h2>

            {/* Brand Personality */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-6">BRAND PERSONALITY</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-3">Sophisticated</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Refined aesthetic that speaks to executive decision-makers</p>
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-3">Architectural</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Structural precision in every layout and component</p>
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-3">Neural</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">AI-powered intelligence with human warmth</p>
                </div>
              </div>
            </div>

            {/* UI Principles */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-6">UI PRINCIPLES</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-[#8FAE9E] pl-6">
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Quiet Luxury</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Whitespace as a luxury commodity. Every element justifies its existence.</p>
                </div>
                <div className="border-l-2 border-[#C9A86A] pl-6">
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Neural Precision</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Data visualizations feel like high-end architectural tools—precise, clean, clinical but warm.</p>
                </div>
                <div className="border-l-2 border-[#E8D6D1] pl-6">
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">The 3-Panel Invariant</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Interface as triptych—Navigation (Left), Canvas (Center), Intelligence (Right).</p>
                </div>
                <div className="border-l-2 border-[#8FAE9E] pl-6">
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Cinematic Transitions</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Motion is never abrupt. Everything glides (500ms–700ms easings).</p>
                </div>
              </div>
            </div>

            {/* Anti-Patterns */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[48px] border border-red-200/50 p-8 md:p-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-900 mb-6 flex items-center gap-2">
                <X className="w-4 h-4" />
                ANTI-PATTERNS (NEVER DO)
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">Never use saturated "tech" blues or neon colors</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">Never use sharp corners (minimum 12px, preferred 24px+)</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">Never use generic system fonts for brand-level headings</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. COLOR SYSTEM */}
        <section id="colors" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">02</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Color System
            </h2>

            {/* Primary Palette */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">PRIMARY PALETTE</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Ivory', hex: '#FAFAF7', usage: 'Primary Background / Paper', validation: 'Pass (AA on Charcoal)' },
                  { name: 'Charcoal', hex: '#1E1E1E', usage: 'Primary Text / Dark Mode UI', validation: 'Pass (AAA on Ivory)' },
                  { name: 'Sage', hex: '#8FAE9E', usage: 'Primary AI Action / Success', validation: 'Pass (AA on White/Ivory)' },
                  { name: 'Champagne', hex: '#C9A86A', usage: 'Secondary Accents / Premium Data', validation: 'Pass (AA on Charcoal)' },
                  { name: 'Blush', hex: '#E8D6D1', usage: 'Warning / Low Compliance Background', validation: 'Pass (Decorative only)' },
                  { name: 'Warm Gray', hex: '#8B8B8B', usage: 'Meta Info / Secondary Labels', validation: 'Pass (AA on White)' }
                ].map((color, idx) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div 
                      className="h-32 rounded-[32px] mb-4 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">{color.name}</h4>
                    <p className="text-xs font-mono text-[#8B8B8B] mb-2">{color.hex}</p>
                    <p className="text-xs text-[#8B8B8B] leading-relaxed mb-2">{color.usage}</p>
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#8FAE9E]/10 text-[10px] text-[#8FAE9E]">
                      <Check className="w-3 h-3" />
                      {color.validation}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Functional Colors */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-6">FUNCTIONAL COLORS</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-[24px] border border-[#E5E1D8]">
                  <div className="w-12 h-12 rounded-[16px] bg-[#8FAE9E]" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E]">Success / Verified</h4>
                    <p className="text-xs font-mono text-[#8B8B8B]">Sage #8FAE9E</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-[24px] border border-[#E5E1D8]">
                  <div className="w-12 h-12 rounded-[16px] bg-[#C9A86A]" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E]">Warning / Review</h4>
                    <p className="text-xs font-mono text-[#8B8B8B]">Champagne #C9A86A</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-[24px] border border-[#E5E1D8]">
                  <div className="w-12 h-12 rounded-[16px] bg-[#E8D6D1]" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E]">Error / Friction</h4>
                    <p className="text-xs font-mono text-[#8B8B8B]">Blush #E8D6D1</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-[24px] border border-[#E5E1D8]">
                  <div className="w-12 h-12 rounded-[16px] border-2 border-[#E5E1D8] bg-white" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E]">Borders</h4>
                    <p className="text-xs font-mono text-[#8B8B8B]">#E5E1D8 (Low contrast for elegance)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. TYPOGRAPHY */}
        <section id="typography" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">03</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Typography System
            </h2>

            {/* Font Families */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">FONT FAMILIES</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-[32px] bg-gradient-to-br from-[#8FAE9E]/5 to-transparent border border-[#E5E1D8]">
                  <h4 className="font-['Playfair_Display',serif] text-5xl font-medium text-[#1E1E1E] mb-4">Playfair Display</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Display/Headings — Used for brand names, manifestos, and primary page titles.</p>
                </div>
                <div className="p-6 rounded-[32px] bg-gradient-to-br from-[#C9A86A]/5 to-transparent border border-[#E5E1D8]">
                  <h4 className="font-['Inter',sans-serif] text-4xl font-medium text-[#1E1E1E] mb-4">Inter</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">UI/Body — Used for functional labels, data points, and long-form copy.</p>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">TYPE SCALE</h3>
              <div className="space-y-8">
                <div className="pb-6 border-b border-[#E5E1D8]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">H1 (Hero)</span>
                    <span className="text-xs text-[#8B8B8B]">72px / 4.5rem • Medium 500 • -0.05em</span>
                  </div>
                  <h1 className="font-['Playfair_Display',serif] text-[72px] font-medium text-[#1E1E1E] leading-none" style={{ letterSpacing: '-0.05em' }}>
                    Hero Title
                  </h1>
                </div>
                
                <div className="pb-6 border-b border-[#E5E1D8]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">H2 (Page)</span>
                    <span className="text-xs text-[#8B8B8B]">48px / 3rem • Medium 500 • -0.02em</span>
                  </div>
                  <h2 className="font-['Playfair_Display',serif] text-5xl font-medium text-[#1E1E1E] leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    Page Title
                  </h2>
                </div>

                <div className="pb-6 border-b border-[#E5E1D8]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">H3 (Section)</span>
                    <span className="text-xs text-[#8B8B8B]">30px / 1.8rem • Regular 400</span>
                  </div>
                  <h3 className="font-['Playfair_Display',serif] text-3xl font-normal text-[#1E1E1E]">
                    Section Title
                  </h3>
                </div>

                <div className="pb-6 border-b border-[#E5E1D8]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">LABEL (UI)</span>
                    <span className="text-xs text-[#8B8B8B]">10px / 0.625rem • Bold 700 • 0.3em • UPPERCASE</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1E1E1E]">
                    UI Label
                  </p>
                </div>

                <div className="pb-6 border-b border-[#E5E1D8]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">Body (Main)</span>
                    <span className="text-xs text-[#8B8B8B]">14px / 0.875rem • Regular 400</span>
                  </div>
                  <p className="text-sm text-[#1E1E1E] leading-relaxed">
                    This is the primary body text used throughout the interface. It should be comfortable to read at extended lengths while maintaining excellent legibility across all screen sizes.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-mono text-[#8B8B8B]">Caption</span>
                    <span className="text-xs text-[#8B8B8B]">12px / 0.75rem • Regular 400</span>
                  </div>
                  <p className="text-xs text-[#8B8B8B]">
                    Caption text for metadata, timestamps, and supplementary information.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 4. LAYOUT SYSTEM */}
        <section id="layout" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">04</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Layout System
            </h2>

            {/* 3-Panel OS */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">THE 3-PANEL OS</h3>
              <div className="flex gap-4 h-64 mb-8">
                <div className="w-1/6 bg-[#1E1E1E] rounded-[24px] flex items-center justify-center">
                  <p className="text-white text-xs font-bold uppercase tracking-wider [writing-mode:vertical-lr] rotate-180">Sidebar</p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#FAFAF7] to-white border-2 border-dashed border-[#E5E1D8] rounded-[24px] flex items-center justify-center">
                  <p className="text-[#8B8B8B] text-sm font-bold uppercase tracking-wider">Canvas (Center)</p>
                </div>
                <div className="w-1/4 bg-[#8FAE9E]/10 border border-[#8FAE9E]/20 rounded-[24px] flex items-center justify-center">
                  <p className="text-[#8FAE9E] text-xs font-bold uppercase tracking-wider [writing-mode:vertical-lr] rotate-180">Intelligence</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Sidebar (Left)</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Fixed 72px (Collapsed) or 288px (Expanded)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Canvas (Center)</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">Fluid width. The human workspace.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Intelligence (Right)</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">320px fixed width. Context-aware AI assistant.</p>
                </div>
              </div>
            </div>

            {/* Spacing Scale */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">SPACING SCALE (4PX GRID)</h3>
              <div className="space-y-4">
                {[
                  { name: 'Page Padding', value: 'p-8 (32px) mobile, p-12 (48px) desktop' },
                  { name: 'Card Gaps', value: 'gap-8 (32px) or gap-10 (40px)' },
                  { name: 'Internal Padding', value: 'p-6 (24px) or p-8 (32px)' }
                ].map((spacing) => (
                  <div key={spacing.name} className="flex items-center justify-between p-4 rounded-[24px] border border-[#E5E1D8]">
                    <span className="font-semibold text-[#1E1E1E]">{spacing.name}</span>
                    <span className="text-sm font-mono text-[#8B8B8B]">{spacing.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. COMPONENTS */}
        <section id="components" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">05</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Component Library
            </h2>

            {/* Buttons */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">BUTTONS</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-[#8B8B8B] uppercase tracking-wider">Primary</p>
                  <button className="w-full px-8 py-4 bg-[#1E1E1E] text-white rounded-full font-medium hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-lg">
                    Primary Action
                  </button>
                  <p className="text-xs text-[#8B8B8B] font-mono">bg-charcoal + rounded-full + 32-48px height</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-[#8B8B8B] uppercase tracking-wider">Secondary</p>
                  <button className="w-full px-8 py-4 bg-[#FAFAF7] text-[#1E1E1E] border border-[#1E1E1E] rounded-full font-medium hover:scale-[1.02] transition-all duration-500">
                    Secondary Action
                  </button>
                  <p className="text-xs text-[#8B8B8B] font-mono">bg-ivory + border-charcoal</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-[#8B8B8B] uppercase tracking-wider">AI Action</p>
                  <button className="w-full px-8 py-4 bg-[#8FAE9E] text-white rounded-full font-medium hover:scale-[1.02] transition-all duration-500 shadow-[0_4px_20px_rgba(143,174,158,0.2)]">
                    AI Action
                  </button>
                  <p className="text-xs text-[#8B8B8B] font-mono">bg-sage + shadow-sage/20</p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">STRATEGIC CARDS</h3>
              <div className="space-y-6">
                <div className="p-8 rounded-[48px] border border-[#E5E1D8] shadow-sm hover:shadow-2xl transition-all duration-500">
                  <h4 className="font-['Playfair_Display',serif] text-2xl font-medium text-[#1E1E1E] mb-3">Large Container Card</h4>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed mb-4">Radius: rounded-[48px] • Border: 1px solid #E5E1D8 • Shadow: sm on rest, 2xl on hover</p>
                  
                  <div className="p-6 rounded-[32px] border border-[#E5E1D8] bg-[#FAFAF7]">
                    <h5 className="font-semibold text-[#1E1E1E] mb-2">Child Card</h5>
                    <p className="text-xs text-[#8B8B8B]">Radius: rounded-[32px]</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 6. MOTION & INTERACTION */}
        <section id="motion" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">06</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Interaction & Motion
            </h2>

            {/* Transitions */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 mb-8 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">TRANSITIONS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-[32px] border border-[#E5E1D8] bg-gradient-to-br from-[#8FAE9E]/5 to-transparent cursor-pointer"
                >
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Hover Effect</h4>
                  <p className="text-xs text-[#8B8B8B] mb-2">hover:scale-[1.02] + transition-all duration-500</p>
                  <code className="text-xs font-mono text-[#8FAE9E]">Try hovering over this card</code>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-[32px] border border-[#E5E1D8] bg-gradient-to-br from-[#C9A86A]/5 to-transparent"
                >
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">Page Entry</h4>
                  <p className="text-xs text-[#8B8B8B] mb-2">fade-in + slide-in-from-bottom-4 duration-1000</p>
                  <code className="text-xs font-mono text-[#C9A86A]">Cinematic page transitions</code>
                </motion.div>
              </div>
            </div>

            {/* Micro-interactions */}
            <div className="bg-white rounded-[48px] border border-[#E5E1D8] p-8 md:p-12 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B] mb-8">MICRO-INTERACTIONS</h3>
              <div className="flex items-center gap-6 p-6 rounded-[32px] border border-[#E5E1D8]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8FAE9E] animate-pulse" />
                  <span className="text-sm text-[#8B8B8B]">Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A86A] animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="text-sm text-[#8B8B8B]">Synchronized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8FAE9E]" />
                  <span className="text-sm text-[#8B8B8B]">AI Processing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 7. DO/DON'T RULES */}
        <section className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A86A]">07</span>
              <div className="h-px w-12 bg-[#E5E1D8]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-[#1E1E1E] mb-8">
              Do / Don't Rules
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DO Column */}
              <div className="bg-gradient-to-br from-[#8FAE9E]/10 to-transparent rounded-[48px] border border-[#8FAE9E]/30 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Check className="w-5 h-5 text-[#8FAE9E]" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8FAE9E]">DO</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <Check className="w-5 h-5 text-[#8FAE9E] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1E1E1E]">Use tracking-[0.3em] on all uppercase labels</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <Check className="w-5 h-5 text-[#8FAE9E] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1E1E1E]">Use Serif for brand names like "Luxury AI CRM"</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <Check className="w-5 h-5 text-[#8FAE9E] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1E1E1E]">Use Sage (#8FAE9E) for "DNA Verified" checkmarks</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <Check className="w-5 h-5 text-[#8FAE9E] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1E1E1E]">Ensure "Handshake" animation clarity in AI flows</p>
                  </div>
                </div>
              </div>

              {/* DON'T Column */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[48px] border border-red-200/50 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <X className="w-5 h-5 text-red-500" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-900">DON'T</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900">Use standard tracking on small labels (illegible)</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900">Use Serif for pricing table data</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900">Use standard green (#00FF00) for success states</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-[24px] bg-white">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900">Let AI content appear instantly without context</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="bg-[#1E1E1E] border-t border-[#8FAE9E]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8FAE9E]/10 border border-[#8FAE9E]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#8FAE9E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8FAE9E]">
                Living Document
              </span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium text-white mb-6">
              This system evolves with every feature
            </h2>
            <p className="text-[#8B8B8B] mb-8 max-w-2xl mx-auto leading-relaxed">
              As we build out the 9 AI features across the Sales Intelligence OS, these patterns become production-tested standards.
            </p>
            <Link 
              to="/v12"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8FAE9E] text-white font-medium rounded-full hover:bg-[#8FAE9E]/90 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(143,174,158,0.3)] hover:scale-[1.02]"
            >
              View V12 Implementation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}