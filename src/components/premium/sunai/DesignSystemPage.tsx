import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard as safeCopyToClipboard } from '../../../utils/clipboard';

export function DesignSystemPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedColor(label);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-[20px] border-b border-[#E0E0DE]/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-[72px] flex items-center justify-between">
          <Link to="/sunai" className="flex items-center">
            <span className="text-[24px] font-semibold text-[#1A3A32]" style={{ fontFamily: 'Georgia, serif' }}>
              SunAI Design System
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#colors" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Colors
            </a>
            <a href="#typography" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Typography
            </a>
            <a href="#spacing" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Spacing
            </a>
            <a href="#components" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Components
            </a>
          </nav>

          <Link
            to="/sunai/design-system/preview"
            className="px-6 py-3 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-medium rounded-lg hover:bg-[#0D1F1A] transition-all duration-200"
          >
            View Reference
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-[120px] pb-[80px] px-6 md:px-16 bg-gradient-to-b from-[#FAF8F5] to-[#F5F3EF]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A32]/10 rounded-full mb-6">
            <Palette className="w-4 h-4 text-[#1A3A32]" />
            <span className="text-[13px] font-medium text-[#1A3A32]">Calm Luxury Design Language</span>
          </div>
          
          <h1 
            className="text-[64px] leading-[1.1] text-[#1F2421] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            SunAI Design System
          </h1>
          
          <p className="text-[20px] text-[#6B7370] max-w-[700px] mx-auto mb-12">
            A comprehensive design language for building elegant, editorial AI experiences.
            Extracted from our production marketing suite.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/sunai/design-system/preview"
              className="inline-flex items-center gap-2 px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg"
            >
              <Eye className="w-4 h-4" />
              Visual Reference
            </Link>
            <a
              href="#colors"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-[#1A3A32]/5 transition-all duration-200"
            >
              Explore System
            </a>
          </div>
        </div>
      </section>

      {/* Brand Principles */}
      <section className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Design Principles
            </h2>
            <p className="text-[18px] text-[#6B7370] max-w-[600px] mx-auto">
              The core values that guide every design decision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calm Luxury',
                description: 'Editorial sophistication meets enterprise reliability. Every element breathes, creating space for focus.',
                icon: Layers
              },
              {
                title: 'Executive Grade',
                description: 'Built for decision-makers. Clear hierarchy, confident messaging, zero cognitive friction.',
                icon: Eye
              },
              {
                title: 'Systems First',
                description: 'Modular, reusable, scalable. Every component serves the larger system architecture.',
                icon: Box
              }
            ].map((principle, idx) => (
              <div key={idx} className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#E0E0DE]">
                <principle.icon className="w-8 h-8 text-[#1A3A32] mb-4" />
                <h3 className="text-[24px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {principle.title}
                </h3>
                <p className="text-[16px] text-[#6B7370] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color System */}
      <section id="colors" className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Color System
            </h2>
            <p className="text-[18px] text-[#6B7370]">
              A curated palette of warm neutrals and confident greens
            </p>
          </div>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-6">Primary Brand Colors</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Deep Teal', hex: '#1A3A32', usage: 'Primary brand, headers, CTAs' },
                { name: 'Dark Teal', hex: '#0D1F1A', usage: 'Hover states, emphasis' },
                { name: 'Sage Green', hex: '#A8C5B8', usage: 'Accents, highlights' },
                { name: 'Mint Light', hex: '#E8F5E9', usage: 'Backgrounds, surfaces' }
              ].map((color) => (
                <button
                  key={color.hex}
                  onClick={() => copyToClipboard(color.hex, color.name)}
                  className="group text-left"
                >
                  <div 
                    className="w-full h-[120px] rounded-xl mb-4 border border-[#E0E0DE] shadow-sm group-hover:shadow-lg transition-shadow duration-200 relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="px-3 py-1 bg-white rounded-full text-[12px] font-semibold text-[#1F2421]">
                          Copied!
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#1F2421] mb-1">{color.name}</h4>
                  <p className="text-[14px] font-mono text-[#6B7370] mb-2">{color.hex}</p>
                  <p className="text-[13px] text-[#9B9F9D]">{color.usage}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-6">Neutral Palette</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Cream Base', hex: '#FAF8F5', usage: 'Primary background' },
                { name: 'Warm White', hex: '#F5F3EF', usage: 'Secondary background' },
                { name: 'Soft Gray', hex: '#E0E0DE', usage: 'Borders, dividers' },
                { name: 'Medium Gray', hex: '#9B9F9D', usage: 'Disabled states' }
              ].map((color) => (
                <button
                  key={color.hex}
                  onClick={() => copyToClipboard(color.hex, color.name)}
                  className="group text-left"
                >
                  <div 
                    className="w-full h-[120px] rounded-xl mb-4 border border-[#E0E0DE] shadow-sm group-hover:shadow-lg transition-shadow duration-200 relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="px-3 py-1 bg-white rounded-full text-[12px] font-semibold text-[#1F2421]">
                          Copied!
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#1F2421] mb-1">{color.name}</h4>
                  <p className="text-[14px] font-mono text-[#6B7370] mb-2">{color.hex}</p>
                  <p className="text-[13px] text-[#9B9F9D]">{color.usage}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-6">Text Colors</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Primary Text', hex: '#1F2421', usage: 'Headlines, body copy' },
                { name: 'Secondary Text', hex: '#6B7370', usage: 'Subheadings, metadata' },
                { name: 'Muted Text', hex: '#9B9F9D', usage: 'Helper text, captions' },
                { name: 'Accent Orange', hex: '#FF6B4A', usage: 'Links, highlights (SunAI standard)' }
              ].map((color) => (
                <button
                  key={color.hex}
                  onClick={() => copyToClipboard(color.hex, color.name)}
                  className="group text-left"
                >
                  <div 
                    className="w-full h-[120px] rounded-xl mb-4 border border-[#E0E0DE] shadow-sm group-hover:shadow-lg transition-shadow duration-200 relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="px-3 py-1 bg-white rounded-full text-[12px] font-semibold text-[#1F2421]">
                          Copied!
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#1F2421] mb-1">{color.name}</h4>
                  <p className="text-[14px] font-mono text-[#6B7370] mb-2">{color.hex}</p>
                  <p className="text-[13px] text-[#9B9F9D]">{color.usage}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Typography
            </h2>
            <p className="text-[18px] text-[#6B7370]">
              Georgia for editorial elegance, system fonts for clarity
            </p>
          </div>

          {/* Font Families */}
          <div className="mb-16 p-8 bg-[#FAF8F5] rounded-2xl border border-[#E0E0DE]">
            <h3 className="text-[20px] font-semibold text-[#1F2421] mb-6">Font Families</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-[14px] text-[#6B7370] mb-2">Display / Headings</p>
                <p className="text-[32px] text-[#1F2421]" style={{ fontFamily: 'Georgia, serif' }}>
                  Georgia Serif
                </p>
                <code className="text-[13px] text-[#6B7370] bg-white px-3 py-1 rounded">
                  font-family: 'Georgia, serif'
                </code>
              </div>
              <div>
                <p className="text-[14px] text-[#6B7370] mb-2">Body / UI Text</p>
                <p className="text-[32px] text-[#1F2421]">
                  System Sans-Serif
                </p>
                <code className="text-[13px] text-[#6B7370] bg-white px-3 py-1 rounded">
                  font-family: system-ui, -apple-system
                </code>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="space-y-8">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-6">Type Scale</h3>
            
            {[
              { label: 'H1 / Hero', size: '64px', weight: '400', lineHeight: '1.1', example: 'Build Real AI Systems' },
              { label: 'H2 / Section', size: '48px', weight: '400', lineHeight: '1.2', example: 'Our Approach to AI' },
              { label: 'H3 / Subsection', size: '32px', weight: '600', lineHeight: '1.3', example: 'Core Capabilities' },
              { label: 'H4 / Card Title', size: '24px', weight: '600', lineHeight: '1.4', example: 'AI Strategy & Consulting' },
              { label: 'Body Large', size: '20px', weight: '400', lineHeight: '1.6', example: 'Supporting text for major sections and introductions' },
              { label: 'Body', size: '16px', weight: '400', lineHeight: '1.6', example: 'Standard body copy for content and descriptions' },
              { label: 'Small / UI', size: '14px', weight: '500', lineHeight: '1.5', example: 'Buttons, labels, and interface elements' },
              { label: 'Caption', size: '13px', weight: '400', lineHeight: '1.5', example: 'Helper text, metadata, fine print' }
            ].map((type, idx) => (
              <div key={idx} className="pb-8 border-b border-[#E0E0DE] last:border-0">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[14px] font-semibold text-[#1F2421]">{type.label}</span>
                  <span className="text-[13px] text-[#6B7370]">
                    {type.size} / {type.weight} / {type.lineHeight}
                  </span>
                </div>
                <p 
                  className="text-[#1F2421]"
                  style={{ 
                    fontFamily: idx < 4 ? 'Georgia, serif' : 'inherit',
                    fontSize: type.size,
                    fontWeight: type.weight,
                    lineHeight: type.lineHeight
                  }}
                >
                  {type.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing System */}
      <section id="spacing" className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Spacing & Layout
            </h2>
            <p className="text-[18px] text-[#6B7370]">
              Consistent rhythm based on 8px baseline grid
            </p>
          </div>

          {/* Spacing Scale */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-8">Spacing Scale</h3>
            <div className="space-y-4">
              {[
                { name: 'xs', value: '4px', usage: 'Icon gaps, tight spacing' },
                { name: 'sm', value: '8px', usage: 'Component internal padding' },
                { name: 'md', value: '16px', usage: 'Card padding, element gaps' },
                { name: 'lg', value: '24px', usage: 'Section internal spacing' },
                { name: 'xl', value: '32px', usage: 'Component gaps' },
                { name: '2xl', value: '48px', usage: 'Section gaps' },
                { name: '3xl', value: '64px', usage: 'Major section spacing' },
                { name: '4xl', value: '96px', usage: 'Section padding (vertical)' },
                { name: '5xl', value: '128px', usage: 'Hero sections' }
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-6">
                  <div className="w-24 text-[14px] font-semibold text-[#1F2421]">{space.name}</div>
                  <div className="w-20 text-[14px] font-mono text-[#6B7370]">{space.value}</div>
                  <div 
                    className="h-8 bg-[#1A3A32] rounded"
                    style={{ width: space.value }}
                  />
                  <div className="text-[14px] text-[#6B7370]">{space.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Layout Grid */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-8">Layout Standards</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-[#E0E0DE]">
                <h4 className="text-[18px] font-semibold text-[#1F2421] mb-4">Max Width</h4>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded mb-2">
                  max-width: 1280px (content)
                </code>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded mb-2">
                  max-width: 1440px (layout)
                </code>
                <p className="text-[14px] text-[#6B7370] mt-4">
                  Content constrained for readability, layout allows breathing room
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-[#E0E0DE]">
                <h4 className="text-[18px] font-semibold text-[#1F2421] mb-4">Horizontal Padding</h4>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded mb-2">
                  Mobile: 24px (px-6)
                </code>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded">
                  Desktop: 64px (md:px-16)
                </code>
                <p className="text-[14px] text-[#6B7370] mt-4">
                  Responsive padding maintains visual balance
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-[#E0E0DE]">
                <h4 className="text-[18px] font-semibold text-[#1F2421] mb-4">Section Padding</h4>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded mb-2">
                  Standard: 96px vertical
                </code>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded">
                  Hero: 128px - 200px vertical
                </code>
                <p className="text-[14px] text-[#6B7370] mt-4">
                  Generous whitespace creates calm, focused experience
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-[#E0E0DE]">
                <h4 className="text-[18px] font-semibold text-[#1F2421] mb-4">Grid System</h4>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded mb-2">
                  Cards: 2-3 columns (md:grid-cols-3)
                </code>
                <code className="block text-[14px] text-[#6B7370] bg-[#FAF8F5] px-4 py-3 rounded">
                  Gap: 24px - 32px
                </code>
                <p className="text-[14px] text-[#6B7370] mt-4">
                  Flexible grid adapts to content density
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section id="components" className="py-[96px] px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 
              className="text-[48px] text-[#1F2421] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Component Library
            </h2>
            <p className="text-[18px] text-[#6B7370]">
              Production-ready patterns and usage guidelines
            </p>
          </div>

          {/* Buttons */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-8">Buttons</h3>
            <div className="space-y-6">
              <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#E0E0DE]">
                <p className="text-[14px] font-semibold text-[#1F2421] mb-4">Primary Button</p>
                <button className="px-6 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg">
                  Start Your AI Journey
                </button>
                <code className="block mt-4 text-[13px] text-[#6B7370] bg-white px-4 py-3 rounded">
                  bg-[#1A3A32] hover:bg-[#0D1F1A] px-6 py-4 rounded-lg
                </code>
              </div>

              <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#E0E0DE]">
                <p className="text-[14px] font-semibold text-[#1F2421] mb-4">Secondary Button</p>
                <button className="px-6 py-4 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-[#1A3A32]/5 transition-all duration-200">
                  Learn More
                </button>
                <code className="block mt-4 text-[13px] text-[#6B7370] bg-white px-4 py-3 rounded">
                  border border-[#1A3A32] hover:bg-[#1A3A32]/5 px-6 py-4 rounded-lg
                </code>
              </div>

              <div className="p-8 bg-[#1A3A32] rounded-2xl">
                <p className="text-[14px] font-semibold text-[#FAF8F5] mb-4">Ghost Button (on dark)</p>
                <button className="px-6 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200">
                  Book a Call
                </button>
                <code className="block mt-4 text-[13px] text-[#FAF8F5]/70 bg-[#0D1F1A] px-4 py-3 rounded">
                  border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)]
                </code>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-8">Cards</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-[#E0E0DE] hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-[#1A3A32]" />
                </div>
                <h4 className="text-[20px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Feature Card
                </h4>
                <p className="text-[16px] text-[#6B7370] leading-relaxed mb-6">
                  Clean borders, generous padding, subtle hover states
                </p>
                <code className="block text-[12px] text-[#6B7370] bg-[#FAF8F5] px-3 py-2 rounded">
                  p-8 rounded-2xl border border-[#E0E0DE]
                </code>
              </div>

              <div className="p-8 bg-[#FAF8F5] rounded-2xl">
                <div className="w-12 h-12 bg-[#1A3A32] rounded-xl flex items-center justify-center mb-6">
                  <Layout className="w-6 h-6 text-[#FAF8F5]" />
                </div>
                <h4 className="text-[20px] font-semibold text-[#1F2421] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Filled Card
                </h4>
                <p className="text-[16px] text-[#6B7370] leading-relaxed mb-6">
                  Subtle background, no border, softer emphasis
                </p>
                <code className="block text-[12px] text-[#6B7370] bg-white px-3 py-2 rounded">
                  p-8 rounded-2xl bg-[#FAF8F5]
                </code>
              </div>
            </div>
          </div>

          {/* Badge / Pill */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#1F2421] mb-8">Badges & Pills</h3>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A32]/10 rounded-full">
                <Check className="w-4 h-4 text-[#1A3A32]" />
                <span className="text-[13px] font-medium text-[#1A3A32]">Primary Pill</span>
              </span>
              
              <span className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] text-[#1A3A32] text-[12px] font-semibold rounded-full">
                NEW
              </span>

              <span className="inline-flex items-center px-3 py-1 border border-[#E0E0DE] text-[#6B7370] text-[12px] font-medium rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 
            className="text-[48px] text-[#FAF8F5] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Ready to Build?
          </h2>
          <p className="text-[18px] text-[rgba(250,248,245,0.8)] mb-8 max-w-[600px] mx-auto">
            Use this design system across your marketing, product, and internal tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sunai/design-system/preview"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg"
            >
              <Eye className="w-4 h-4" />
              Visual Reference
            </Link>
            <Link
              to="/sunai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <FooterV11 />
    </div>
  );
}