import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Layout, Brain, Workflow, Server, Shield, Smartphone, Globe, Layers } from 'lucide-react';
import { WizardFormData } from '../../lib/schemas';
import { Typography } from '../ui/design-system/Typography';
import { Card } from '../ui/design-system/Card';

interface ArchitectureVisualizerProps {
  data: WizardFormData;
  step: number;
}

export function ArchitectureVisualizer({ data, step }: ArchitectureVisualizerProps) {
  const stack = getRecommendedStack(data);

  return (
    <div className="sticky top-32 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Layers className="w-5 h-5 text-orange-500" />
        <Typography variant="h4" className="text-slate-900 text-sm font-bold uppercase tracking-wider">
          Live Architecture Blueprint
        </Typography>
      </div>

      <Card variant="outline" className="bg-slate-50/50 backdrop-blur-sm border-slate-200 p-6 overflow-hidden relative min-h-[400px]">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />

        <div className="relative z-10 space-y-8">
          {/* Frontend Layer */}
          <LayerSection title="Client Layer" delay={0.1}>
             <TechNode icon={<Layout className="w-4 h-4" />} label="Next.js 14" sub="React Framework" active={true} />
             <TechNode icon={<Smartphone className="w-4 h-4" />} label="Responsive" sub="Mobile First" active={true} />
          </LayerSection>

          {/* AI / Logic Layer - Dynamic based on services */}
          <AnimatePresence mode="wait">
            {(data.services.includes('AI Web App') || data.services.includes('Custom Chatbot')) && (
              <LayerSection title="Intelligence Layer" delay={0.2}>
                <TechNode icon={<Brain className="w-4 h-4" />} label="LLM Orchestration" sub="LangChain / OpenAI" active={true} />
                {data.services.includes('Custom Chatbot') && (
                   <TechNode icon={<Database className="w-4 h-4" />} label="Vector DB" sub="Pinecone" active={true} />
                )}
              </LayerSection>
            )}
          </AnimatePresence>

          {/* Backend Layer */}
          <LayerSection title="Infrastructure" delay={0.3}>
            <TechNode icon={<Server className="w-4 h-4" />} label="Supabase" sub="PostgreSQL + Auth" active={true} />
            <TechNode icon={<Shield className="w-4 h-4" />} label="Edge Functions" sub="Serverless APIs" active={true} />
          </LayerSection>

          {/* Integrations Layer */}
          <AnimatePresence mode="wait">
             {data.services.includes('Workflow Automation') && (
                <LayerSection title="Automation" delay={0.4}>
                  <TechNode icon={<Workflow className="w-4 h-4" />} label="n8n / Zapier" sub="Workflows" active={true} />
                  <TechNode icon={<Globe className="w-4 h-4" />} label="Webhooks" sub="Event Bus" active={true} />
                </LayerSection>
             )}
          </AnimatePresence>
        </div>

        {/* Dynamic Status Overlay */}
        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">
           BUILD_ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}
        </div>
      </Card>

      {/* Real-time Cost/Timeline Estimator (Mock) */}
      <div className="grid grid-cols-2 gap-4">
        <EstimateCard label="Est. Complexity" value={calculateComplexity(data)} delay={0.5} />
        <EstimateCard label="Est. Team Size" value={calculateTeamSize(data)} delay={0.6} />
      </div>
    </div>
  );
}

// --- Sub-components ---

function LayerSection({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-3"
    >
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">{title}</div>
      <div className="grid grid-cols-2 gap-3">
        {children}
      </div>
    </motion.div>
  );
}

function TechNode({ icon, label, sub, active }: { icon: React.ReactNode, label: string, sub: string, active: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        p-3 rounded-lg border flex items-center gap-3 bg-white shadow-sm transition-all
        ${active ? 'border-slate-200' : 'opacity-50 border-dashed'}
      `}
    >
      <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-800">{label}</div>
        <div className="text-[10px] text-slate-400">{sub}</div>
      </div>
    </motion.div>
  );
}

function EstimateCard({ label, value, delay }: { label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm"
    >
      <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">{label}</div>
      <div className="text-sm font-bold text-slate-900">{value}</div>
    </motion.div>
  );
}

// --- Logic ---

function getRecommendedStack(data: WizardFormData) {
  // Logic to determine stack based on inputs
  return [];
}

function calculateComplexity(data: WizardFormData): string {
  let score = 0;
  if (data.services.length > 1) score++;
  if (data.services.includes('AI Web App')) score += 2;
  if (data.services.includes('Workflow Automation')) score += 1;
  if (data.budget > 20000) score++;
  
  if (score > 3) return 'High';
  if (score > 1) return 'Medium';
  return 'Low';
}

function calculateTeamSize(data: WizardFormData): string {
  if (data.services.includes('AI Web App')) return '2-3 Engineers';
  if (data.services.includes('Consulting')) return '1 Strategist';
  return '1-2 Engineers';
}
