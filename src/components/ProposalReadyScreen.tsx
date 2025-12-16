import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  FileText, 
  Layers, 
  Code2, 
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  DollarSign,
  Target
} from 'lucide-react';

interface ProposalReadyScreenProps {
  onViewProposal?: () => void;
  onGoToDashboard?: () => void;
}

// Mock proposal data (would come from form submission in real app)
const proposalData = {
  projectName: 'AI-Powered Customer Support Platform',
  services: ['AI Chatbot', 'Knowledge Base', 'Analytics Dashboard', 'API Integration'],
  timeline: '8-10 weeks',
  budgetRange: '$45,000 - $65,000',
  summary: 'A complete AI customer support solution with intelligent routing, automated responses, and real-time analytics to reduce support ticket volume by 60%.',
  whatsIncluded: [
    {
      icon: FileText,
      title: 'Scope & Deliverables',
      description: 'Complete feature list, user flows, and final outputs',
    },
    {
      icon: Code2,
      title: 'Tech Stack Recommendations',
      description: 'AI models, frameworks, and infrastructure choices',
    },
    {
      icon: Calendar,
      title: 'Project Timeline & Milestones',
      description: 'Week-by-week breakdown with key checkpoints',
    },
  ],
};

export function ProposalReadyScreen({ onViewProposal, onGoToDashboard }: ProposalReadyScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FB] via-white to-[#F7F9FB] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Success Banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Success Icon with Confetti Effect */}
          <div className="relative inline-block mb-6">
            {/* Glow Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0 blur-2xl bg-gradient-to-br from-[#FF6A3D]/30 to-[#00334F]/20 rounded-full"
            />
            
            {/* Check Circle */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3 
              }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center shadow-xl">
                <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>

            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 60,
                  y: Math.sin((i * Math.PI * 2) / 8) * 60,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 left-1/2"
              >
                <Sparkles 
                  className="w-4 h-4 text-[#FF6A3D]" 
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[48px] md:text-[56px] leading-[1.1] text-[#202020] mb-4"
            style={{ fontWeight: 600 }}
          >
            Your AI Proposal Is Ready!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[18px] md:text-[20px] text-[#555] leading-[1.7] max-w-2xl mx-auto"
          >
            Sun AI has generated a tailored project plan based on your goals, budget, and requirements.
          </motion.p>
        </motion.div>

        {/* Proposal Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative bg-white rounded-3xl shadow-lg mb-8 overflow-hidden"
        >
          {/* Gradient Top Border */}
          <div className="h-1 bg-gradient-to-r from-[#FF6A3D] via-[#FF8A4F] to-[#FF6A3D]" />
          
          <div className="p-8 md:p-10">
            {/* Project Name */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00334F] to-[#005578] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-[#999] mb-1">Project Name</p>
                <h2 
                  className="text-[24px] md:text-[28px] text-[#202020] leading-[1.2]"
                  style={{ fontWeight: 600 }}
                >
                  {proposalData.projectName}
                </h2>
              </div>
            </div>

            {/* Summary */}
            <p className="text-[16px] text-[#555] leading-[1.7] mb-6">
              {proposalData.summary}
            </p>

            {/* Key Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Services */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#FF6A3D]" />
                  <p className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                    Services
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proposalData.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#F7F9FB] text-[#00334F] text-[12px]"
                      style={{ fontWeight: 500 }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#FF6A3D]" />
                  <p className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                    Estimated Timeline
                  </p>
                </div>
                <p className="text-[18px] text-[#202020]" style={{ fontWeight: 600 }}>
                  {proposalData.timeline}
                </p>
              </div>

              {/* Budget */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-4 h-4 text-[#FF6A3D]" />
                  <p className="text-[13px] text-[#999]" style={{ fontWeight: 600 }}>
                    Budget Range
                  </p>
                </div>
                <p className="text-[18px] text-[#202020]" style={{ fontWeight: 600 }}>
                  {proposalData.budgetRange}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <h3 
            className="text-[20px] text-[#202020] mb-6 text-center"
            style={{ fontWeight: 600 }}
          >
            What&apos;s Included
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {proposalData.whatsIncluded.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md text-center"
                >
                  <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A3D]/10 to-[#FF8A4F]/10 items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FF6A3D]" />
                  </div>
                  <h4 
                    className="text-[16px] text-[#202020] mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Helper Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gradient-to-br from-[#00334F]/5 to-[#FF6A3D]/5 rounded-2xl p-6 mb-8 border border-[#E9EAEE]"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4F] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[14px] text-[#555] leading-[1.7]">
                Your proposal includes scope, deliverables, recommended tech stack, workflow automations, timelines, and next steps — fully tailored to your project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Primary Button */}
          <button
            onClick={onViewProposal}
            className="group px-8 py-4 bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4F] text-white rounded-full hover:shadow-xl transition-all flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            <span className="text-[16px]">View Full Proposal</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={onGoToDashboard}
            className="text-[14px] text-[#555] hover:text-[#00334F] transition-colors"
            style={{ fontWeight: 500 }}
          >
            Go to Project Dashboard
          </button>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="h-12" />
      </div>
    </div>
  );
}
