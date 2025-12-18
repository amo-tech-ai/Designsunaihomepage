import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, MessageSquare, Workflow, Users, Sparkles } from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';
import { Card } from '../../ui/design-system/Card';
import { Badge } from '../../ui/design-system/Badge';

export function FeaturesV7() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="orange" className="mb-4">Our Expertise</Badge>
            <Typography variant="h2" className="text-white mb-4">
              Intelligent Capabilities
            </Typography>
            <Typography variant="body" className="text-slate-400 text-lg">
              We build scalable AI systems that solve real business problems, not just demos.
            </Typography>
          </div>
          <div className="hidden md:block">
            {/* Optional decoration or secondary link could go here */}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          
          {/* Card 1: AI Web Apps (Large: 2x1) */}
          <motion.div variants={itemVariants} className="md:col-span-2 group">
            <Card variant="glass" className="h-full p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors cursor-pointer group-hover:bg-slate-800/60">
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="text-orange-500 w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <Typography variant="h3" className="text-white">AI Web Applications</Typography>
                <Typography variant="body" className="text-slate-400 max-w-md">
                  Intelligent platforms built to scale. We integrate LLMs, vector databases, and modern frameworks into production-ready web apps.
                </Typography>
              </div>

              {/* Visual Decoration */}
              <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 bg-gradient-to-tl from-blue-500 to-transparent blur-2xl" />
              <div className="absolute bottom-6 right-6 p-4 rounded-lg bg-slate-950/50 border border-white/10 font-mono text-xs text-blue-300 opacity-60">
                <span className="text-purple-400">const</span> <span className="text-yellow-200">app</span> = <span className="text-green-300">new</span> <span className="text-blue-300">AIStack</span>();
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Chatbots (Tall: 1x2) */}
          <motion.div variants={itemVariants} className="md:row-span-2 group">
            <Card variant="glass" className="h-full p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors cursor-pointer group-hover:bg-slate-800/60">
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="text-orange-500 w-6 h-6" />
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <Typography variant="h3" className="text-white mb-4">AI Chatbots</Typography>
                <Typography variant="body" className="text-slate-400 mb-8">
                  24/7 assistants that convert and support. Custom trained on your knowledge base to provide accurate, human-like responses.
                </Typography>
              </div>

              {/* Chat Bubble Visual */}
              <div className="space-y-3 mt-auto">
                <div className="bg-slate-800/80 p-3 rounded-lg rounded-tl-none border border-white/5 text-xs text-slate-300 w-[80%]">
                  How can I help you today?
                </div>
                <div className="bg-orange-500/10 p-3 rounded-lg rounded-tr-none border border-orange-500/20 text-xs text-orange-200 w-[80%] ml-auto">
                  I need to automate my support...
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Automation (Standard) */}
          <motion.div variants={itemVariants} className="group">
             <Card variant="glass" className="h-full p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors cursor-pointer group-hover:bg-slate-800/60">
               <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="text-orange-500 w-6 h-6" />
              </div>
              
               <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                  <Workflow className="w-6 h-6" />
               </div>
               <div>
                  <Typography variant="h4" className="text-white mb-2">Automations</Typography>
                  <Typography variant="body-sm" className="text-slate-400">
                    Remove manual work with smart workflows. Connect your tools seamlessly.
                  </Typography>
               </div>
             </Card>
          </motion.div>

          {/* Card 4: Consulting (Standard) */}
          <motion.div variants={itemVariants} className="group">
             <Card variant="glass" className="h-full p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors cursor-pointer group-hover:bg-slate-800/60">
               <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="text-orange-500 w-6 h-6" />
              </div>
              
               <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Users className="w-6 h-6" />
               </div>
               <div>
                  <Typography variant="h4" className="text-white mb-2">Consulting</Typography>
                  <Typography variant="body-sm" className="text-slate-400">
                    Strategy, architecture, and execution. We help you navigate the AI landscape.
                  </Typography>
               </div>
             </Card>
          </motion.div>

        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Not sure what you need?</span>
            <a href="#" className="text-white underline decoration-slate-700 hover:text-orange-500 hover:decoration-orange-500 transition-all">
              Take the AI Brief to find out
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
