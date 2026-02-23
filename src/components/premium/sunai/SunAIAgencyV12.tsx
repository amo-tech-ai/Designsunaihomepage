import { FooterV11 } from '../../FooterV11';
import { HowItWorksSection } from './HowItWorksSection';
import { HowItWorksLuxury } from './HowItWorksLuxury';
import { MetricsGridSection } from './MetricsGridSection';
import { SolutionCardsSection } from './SolutionCardsSection';
import { AIMaturitySection } from './AIMaturitySection';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Brain, 
  Code, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Eye, 
  Target, 
  Workflow, 
  Heart, 
  AlertCircle, 
  Mic,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  Monitor,
  FileText,
  Smartphone,
  Settings,
  Building,
  Gamepad2,
  Lightbulb
} from 'lucide-react';

export function SunAIAgencyV12() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-[20px] border-b border-[#E0E0DE]/50'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-[24px] font-semibold text-[#1A3A32]" style={{ fontFamily: 'Georgia, serif' }}>
              SunAI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Work
            </Link>
            <Link to="/process" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              Process
            </Link>
            <Link to="/about" className="text-[14px] font-medium text-[#1F2421] hover:text-[#1A3A32] transition-colors">
              About
            </Link>
          </nav>

          <Link
            to="/wizard"
            className="px-6 py-3 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-medium rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg"
          >
            Start Your AI Journey
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-[200px] pb-[128px] px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 
                className="text-[48px] md:text-[64px] leading-[1.1] font-normal text-[#1A3A32] mb-6"
                style={{ 
                  fontFamily: 'Georgia, "Playfair Display", serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Build Intelligent AI Products, Agents & Automation
              </h1>
              <p className="text-[18px] text-[#6B7370] leading-[1.6] mb-8 max-w-[600px]">
                Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wizard"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 text-[#1F2421] text-[14px] font-medium rounded-lg border-2 border-[#1F2421] hover:bg-[#1F2421] hover:text-[#FAF8F5] transition-all duration-200"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div 
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1758876203026-99a024dc43b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwMTQ3OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Analytics Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-[#6B7370]" />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 px-6 md:px-16 border-y border-[#E0E0DE]/50">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.05em] text-[#6B7370] mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
              <div key={company} className="text-[#1F2421] font-medium text-[14px]">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <SolutionCardsSection
        title="Our AI Solutions and Capabilities"
        subtitle="We bring best-in-class AI consulting expertise to every engagement and complement it with critical capabilities from our innovation ecosystem:"
        cards={[
          {
            title: "AI Strategy & Consulting",
            description: "Transform your business model with AI-powered insights and strategic roadmaps designed for scale. We help identify high-impact opportunities.",
            backgroundColor: '#E8F5E9',
            textColor: '#1F2421',
            isDark: false
          },
          {
            title: "Custom AI Development",
            description: "Build intelligent systems tailored to your unique challenges. From CRM automation to predictive analytics, we create solutions that deliver measurable ROI.",
            backgroundColor: '#E8F5E9',
            textColor: '#1F2421',
            isDark: false
          },
          {
            title: "AI Integration & Deployment",
            description: "Seamlessly integrate AI into your existing workflows with zero disruption and maximum impact. We ensure smooth adoption and long-term success.",
            backgroundColor: '#E8F5E9',
            textColor: '#1F2421',
            isDark: false
          }
        ]}
      />

      {/* Impact Stats */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[36px] text-center text-[#FAF8F5] mb-12"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Results That Speak for Themselves
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-[96px] px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzAxNDc5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury Retail Case Study"
                className="w-full h-auto"
              />
            </div>

            <div>
              <div className="inline-block px-2 py-1 bg-[rgba(197,244,103,0.15)] border border-[rgba(197,244,103,0.3)] rounded text-[12px] font-medium text-[#1A3A32] uppercase tracking-[0.05em] mb-4">
                Featured Case Study
              </div>
              <h3 
                className="text-[32px] text-[#1F2421] mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                How Luxury Retailer X Increased Sales 150% with AI-Powered Personalization
              </h3>
              <p className="text-[16px] text-[#1F2421] leading-[1.6] mb-6">
                We partnered with a leading luxury retailer to transform their customer engagement strategy. Through advanced AI recommendation engines and predictive analytics, we created a personalized shopping experience that dramatically increased conversion rates and customer lifetime value.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1A3A32]" />
                  <span className="text-[14px] text-[#1F2421]">150% ROI in 3 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1A3A32]" />
                  <span className="text-[14px] text-[#1F2421]">6-month delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1A3A32]" />
                  <span className="text-[14px] text-[#1F2421]">99.8% accuracy</span>
                </div>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-[14px] font-medium text-[#1A3A32] hover:underline"
              >
                View Full Case Study <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div className="max-w-[800px]">
              <h2 
                className="text-[36px] text-[#1F2421] mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Our Services
              </h2>
              <p className="text-[16px] text-[#6B7370] leading-[1.6]">
                Comprehensive AI development services including MVP creation, enterprise software solutions, intelligent automation systems, and custom AI-powered tools designed to accelerate business growth.
              </p>
            </div>
            <Link
              to="/services"
              className="px-6 py-3 bg-[#1A3A32] text-[#FAF8F5] text-[14px] font-medium rounded-lg hover:bg-[#0D1F1A] transition-all duration-200 hover:shadow-lg whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesGrid.map((service, index) => (
              <ServiceGridCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <HowItWorksLuxury />

      {/* AI Maturity Framework */}
      <AIMaturitySection />

      {/* Portfolio Grid */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[36px] text-center text-[#1F2421] mb-12"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-[#1A3A32] text-[#1A3A32] text-[14px] font-medium rounded-lg hover:bg-[rgba(26,58,50,0.05)] transition-all duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[96px] px-6 md:px-16 bg-[#FAF8F5]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 
            className="text-[36px] text-[#1F2421] mb-12"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            What Our Clients Say
          </h2>

          <div 
            className="p-12 rounded-2xl mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
            }}
          >
            <p 
              className="text-[24px] italic text-[#1F2421] mb-8 leading-[1.5]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-[14px] font-medium text-[#1A3A32]">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-[14px] text-[#6B7370]">
                  {testimonials[activeTestimonial].title}
                </p>
                <p className="text-[14px] text-[#6B7370]">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-[#1A3A32] w-8' : 'bg-[#D0D0CE]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Grid - Executive Stats */}
      <MetricsGridSection
        metrics={[
          { number: '42K+', description: 'in our Global Alumni Network and growing' },
          { number: '1200+', description: 'Alumni lead Global Fortune 500 companies as Senior Executives' },
          { number: '3K+', description: 'company founders' },
          { number: '98%', description: 'of Alumni recommend BCG as the place to work' },
          { number: '35%', description: 'of Alumni hold top management leadership positions' },
          { number: '40%', description: 'of those who leave at A or C level achieve senior positions within 10 years of leaving BCG' }
        ]}
        backgroundColor="#E8F5E9"
        numberColor="#1F2421"
        textColor="#6B7370"
      />

      {/* CTA Section - Above Footer */}
      <section className="py-[96px] px-6 md:px-16 bg-[#1A3A32]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 
            className="text-[48px] text-[#FAF8F5] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Ready to Build a Real AI System?
          </h2>
          <p className="text-[18px] text-[rgba(250,248,245,0.8)] mb-8 max-w-[700px] mx-auto">
            From idea → proposal → production system in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/wizard"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B4A] text-[#FAF8F5] text-[14px] font-semibold rounded-lg hover:bg-[#FF5236] transition-all duration-200 hover:shadow-lg"
            >
              Start Project
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV11 />
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon: Icon, title, description, link, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
        background: 'rgba(255, 255, 255, 0.85)'
      }}
    >
      <Icon className="w-6 h-6 text-[#1A3A32] mb-4" strokeWidth={2} />
      <h3 className="text-[20px] font-semibold text-[#1F2421] mb-3">
        {title}
      </h3>
      <p className="text-[16px] text-[#6B7370] leading-[1.6] mb-4">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center text-[14px] font-medium text-[#1A3A32] hover:underline"
      >
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ number, label, context, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="text-center"
    >
      <div className="text-[48px] font-semibold text-[#C5F467] mb-2" style={{ letterSpacing: '-0.02em' }}>
        {number}
      </div>
      <div className="text-[14px] font-medium text-[#FAF8F5] mb-1">
        {label}
      </div>
      <div className="text-[14px] text-[rgba(250,248,245,0.7)]">
        {context}
      </div>
    </motion.div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description, duration, index, isLast }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="relative"
    >
      <div className="p-8 bg-white rounded-xl border border-[#E0E0DE]/50">
        <div className="text-[48px] font-normal text-[#C5F467] mb-4">
          {number}
        </div>
        <h4 className="text-[20px] font-semibold text-[#1F2421] mb-3">
          {title}
        </h4>
        <p className="text-[16px] text-[#6B7370] leading-[1.6] mb-4">
          {description}
        </p>
        <p className="text-[12px] text-[#6B7370]">
          {duration}
        </p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#1A3A32]">
          <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-[#1A3A32]" />
        </div>
      )}
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ image, title, category, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,36,33,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-[14px] font-medium">
            View Project <ArrowRight className="inline w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
      <h4 className="text-[20px] font-semibold text-[#1F2421] mb-1">
        {title}
      </h4>
      <p className="text-[14px] text-[#6B7370]">
        {category}
      </p>
    </motion.div>
  );
}

// Service Card Detailed Component
function ServiceCardDetailed({ icon: Icon, title, description, link, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
        background: 'rgba(255, 255, 255, 0.85)'
      }}
    >
      <Icon className="w-6 h-6 text-[#1A3A32] mb-4" strokeWidth={2} />
      <h3 className="text-[20px] font-semibold text-[#1F2421] mb-3">
        {title}
      </h3>
      <p className="text-[16px] text-[#6B7370] leading-[1.6] mb-4">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center text-[14px] font-medium text-[#1A3A32] hover:underline"
      >
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </motion.div>
  );
}

// Service Grid Card Component
function ServiceGridCard({ icon: Icon, title, description, link, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
        background: 'rgba(255, 255, 255, 0.85)'
      }}
    >
      <Icon className="w-6 h-6 text-[#1A3A32] mb-4" strokeWidth={2} />
      <h3 className="text-[20px] font-semibold text-[#1F2421] mb-3">
        {title}
      </h3>
      <p className="text-[16px] text-[#6B7370] leading-[1.6] mb-4">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center text-[14px] font-medium text-[#1A3A32] hover:underline"
      >
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </motion.div>
  );
}

// Data
const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description: 'Transform your business model with AI-powered insights and strategic roadmaps designed for scale.',
    link: '/services/ai-development'
  },
  {
    icon: Code,
    title: 'Custom AI Development',
    description: 'Build intelligent systems tailored to your unique challenges. From CRM automation to predictive analytics.',
    link: '/services/ai-development'
  },
  {
    icon: Zap,
    title: 'AI Integration & Deployment',
    description: 'Seamlessly integrate AI into your existing workflows with zero disruption and maximum impact.',
    link: '/services/ai-agents'
  }
];

const servicesDetailed = [
  {
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description: 'Transform your business model with AI-powered insights and strategic roadmaps designed for scale.',
    link: '/services/ai-development'
  },
  {
    icon: Code,
    title: 'Custom AI Development',
    description: 'Build intelligent systems tailored to your unique challenges. From CRM automation to predictive analytics.',
    link: '/services/ai-development'
  },
  {
    icon: Zap,
    title: 'AI Integration & Deployment',
    description: 'Seamlessly integrate AI into your existing workflows with zero disruption and maximum impact.',
    link: '/services/ai-agents'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Transform customer interactions with AI that understands context and intent.',
    link: '/services/nlp'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with machine learning models.',
    link: '/services/predictive-analytics'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Automate visual inspection and quality control with intelligent image analysis.',
    link: '/services/computer-vision'
  },
  {
    icon: Target,
    title: 'Recommendation Engines',
    description: 'Deliver personalized experiences that drive engagement and revenue.',
    link: '/services/recommendation-engines'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Eliminate manual tasks and accelerate operations with intelligent automation.',
    link: '/services/process-automation'
  },
  {
    icon: Heart,
    title: 'Sentiment Analysis',
    description: 'Understand customer emotions and respond with precision across all channels.',
    link: '/services/sentiment-analysis'
  },
  {
    icon: AlertCircle,
    title: 'Anomaly Detection',
    description: 'Identify risks and opportunities in real-time with advanced pattern recognition.',
    link: '/services/anomaly-detection'
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description: 'Create natural voice experiences that scale customer support effortlessly.',
    link: '/services/voice-ai'
  }
];

const servicesGrid = [
  {
    icon: Zap,
    title: 'AI MVP Development Services',
    description: 'Build your AI MVP fast. We help startups create working products with AI in just 2-3 weeks.',
    link: '/services/mvp-development'
  },
  {
    icon: Monitor,
    title: 'Integrate AI Into Existing Software',
    description: 'Add AI to your current software. We make it work with what you already have. Get smart features and automation.',
    link: '/services/ai-integration'
  },
  {
    icon: FileText,
    title: 'High-Converting Landing Pages',
    description: 'Build landing pages that turn visitors into customers. We make pages that work well for startups and AI products.',
    link: '/services/landing-pages'
  },
  {
    icon: Smartphone,
    title: 'AI-Powered App Development',
    description: 'Build AI apps for phones and websites. We make apps for Android, iOS, and the web. Your app will be smart and easy to use.',
    link: '/services/app-development'
  },
  {
    icon: Settings,
    title: 'Custom AI Tools Development',
    description: 'Create custom AI tools for your business. Automate tasks and make work easier. Help your team get more done.',
    link: '/services/custom-ai-tools'
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Build games for phones, web, and computers. We make games that look great and run smooth.',
    link: '/services/game-development'
  },
  {
    icon: Building,
    title: 'Enterprise Software',
    description: 'Build custom business software. We make systems that handle complex work. Secure, fast, and built for your needs.',
    link: '/services/enterprise-software'
  },
  {
    icon: Settings,
    title: 'Automation Development',
    description: 'Automate your business tasks. We connect your tools and make everything work together. Save time and money.',
    link: '/services/automation'
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting Services',
    description: 'Get expert help with AI. We\'ll guide you on how to use AI in your business. We help you plan and build.',
    link: '/services/ai-consulting'
  }
];

const stats = [
  { number: '94%', label: 'Client Retention Rate', context: 'Long-term partnerships built on trust' },
  { number: '3M+', label: 'Revenue Generated', context: 'Measurable ROI across all projects' },
  { number: '6+/10', label: 'Industry Rating', context: 'Recognized excellence in AI transformation' },
  { number: '200%', label: 'Average Growth Rate', context: 'Client businesses scale faster with AI' }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'Deep analysis of your business, challenges, and opportunities. We map existing workflows and identify AI potential.',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Collaborative roadmap development. We design AI solutions aligned with your goals and timeline.',
    duration: '2-3 weeks'
  },
  {
    number: '03',
    title: 'Build & Test',
    description: 'Agile development with continuous feedback. We create, iterate, and perfect your AI solution.',
    duration: '8-12 weeks'
  },
  {
    number: '04',
    title: 'Deploy & Optimize',
    description: 'Seamless integration and team training. We monitor, optimize, and ensure long-term success.',
    duration: 'Ongoing'
  }
];

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'AI-Powered Personal Shopping',
    category: 'Retail · Recommendation Engine'
  },
  {
    image: 'https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'Predictive Health Analytics',
    category: 'Healthcare · Machine Learning'
  },
  {
    image: 'https://images.unsplash.com/photo-1758876203026-99a024dc43b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'Fraud Detection System',
    category: 'FinTech · Anomaly Detection'
  },
  {
    image: 'https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'Intelligent Concierge Platform',
    category: 'Hospitality · Natural Language'
  },
  {
    image: 'https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'Visual Quality Inspection',
    category: 'Manufacturing · Computer Vision'
  },
  {
    image: 'https://images.unsplash.com/photo-1758876203026-99a024dc43b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    title: 'Dynamic Pricing Engine',
    category: 'E-commerce · Predictive Analytics'
  }
];

const testimonials = [
  {
    quote: 'SunAI transformed our approach to customer engagement. The AI solution they built increased our conversion by 150% in just 3 months.',
    name: 'Sarah Chen',
    title: 'Chief Innovation Officer',
    company: 'Luxury Brand Co.',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200'
  },
  {
    quote: 'Their expertise in AI strategy helped us identify opportunities we did not know existed. The ROI has been exceptional.',
    name: 'Michael Rodriguez',
    title: 'VP of Digital Transformation',
    company: 'Global Retail Group',
    image: 'https://images.unsplash.com/photo-1758876204244-930299843f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200'
  },
  {
    quote: 'From discovery to deployment, SunAI was a true partner. They understood our business and delivered beyond expectations.',
    name: 'Emily Thompson',
    title: 'Head of Operations',
    company: 'FinTech Innovations',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200'
  }
];