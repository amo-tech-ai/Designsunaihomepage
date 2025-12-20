import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, Users, Server, CheckCircle2, ArrowLeft, ExternalLink, Zap } from 'lucide-react';
import { Card } from '../../ui/design-system/Card';
import { Typography } from '../../ui/design-system/Typography';
import { Badge } from '../../ui/design-system/Badge';
import { Button } from '../../ui/design-system/Button';
import { SunScoreBadge } from '../SunScoreBadge';

export interface EnrichedLeadData {
  name: string;
  role: string;
  email: string;
  company: string;
  sunScore: number;
  aiSummary: string;
  companySnapshot: {
    industry: string;
    size: string;
    location: string;
    funding: string;
    news?: string[];
  };
  techStack: {
    frontend?: string[];
    backend?: string[];
    infra?: string[];
    payments?: string[];
  };
  keyPeople: Array<{
    name: string;
    role: string;
    linkedin?: string;
  }>;
}

interface DeepDossierProps {
  data: EnrichedLeadData;
  onClose: () => void;
  onSave: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function DeepDossier({ data, onClose, onSave }: DeepDossierProps) {
  return (
    <div className="w-full max-w-4xl mx-auto pb-12">
      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 flex items-center justify-between"
      >
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </button>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose}>Discard</Button>
          <Button variant="primary" onClick={onSave} leftIcon={<CheckCircle2 className="w-4 h-4" />}>
            Save to CRM
          </Button>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header Card */}
        <motion.div variants={itemVariants}>
          <Card variant="solid" className="p-8 bg-white border-slate-200">
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-inner">
                  {data.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Typography variant="h3" className="font-bold text-slate-900">
                      {data.name}
                    </Typography>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-emerald-700" />
                      Enriched
                    </Badge>
                  </div>
                  <Typography variant="h4" className="text-slate-500 font-medium mb-3">
                    {data.role} at <span className="text-slate-900">{data.company}</span>
                  </Typography>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4" />
                      {data.company.toLowerCase().replace(/\s/g, '')}.com
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {data.companySnapshot.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <SunScoreBadge score={data.sunScore} />
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">Sun Score</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* AI Executive Summary (Hero) */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 p-8 shadow-xl">
             <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-4 text-indigo-300 font-medium text-xs uppercase tracking-wider">
                 <Zap className="w-4 h-4" />
                 AI Executive Summary
               </div>
               <Typography variant="body" className="text-lg text-indigo-50 leading-relaxed font-medium">
                 {data.aiSummary}
               </Typography>
             </div>
          </div>
        </motion.div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Company Snapshot */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card variant="solid" className="h-full p-6">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Building2 className="w-5 h-5 text-indigo-500" />
                Company Snapshot
              </div>
              <div className="space-y-4">
                <DetailRow label="Industry" value={data.companySnapshot.industry} />
                <DetailRow label="Size" value={data.companySnapshot.size} />
                <DetailRow label="Funding" value={data.companySnapshot.funding} />
                
                {data.companySnapshot.news && data.companySnapshot.news.length > 0 && (
                   <div className="pt-4 mt-4 border-t border-slate-100">
                     <span className="text-xs font-bold text-slate-400 uppercase">Recent Signals</span>
                     <ul className="mt-2 space-y-2">
                       {data.companySnapshot.news.map((news, i) => (
                         <li key={i} className="text-xs text-slate-600 flex gap-2">
                           <span className="text-indigo-500">•</span>
                           {news}
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card variant="solid" className="h-full p-6">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Server className="w-5 h-5 text-purple-500" />
                Tech Stack Signals
              </div>
              <div className="space-y-6">
                <StackGroup label="Frontend" tags={data.techStack.frontend} />
                <StackGroup label="Backend" tags={data.techStack.backend} />
                <StackGroup label="Infrastructure" tags={data.techStack.infra} />
              </div>
            </Card>
          </motion.div>

          {/* Key People */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card variant="solid" className="h-full p-6">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Users className="w-5 h-5 text-amber-500" />
                Key People
              </div>
              <div className="space-y-4">
                {data.keyPeople.map((person, i) => (
                  <div key={i} className="flex items-start justify-between group">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{person.name}</div>
                      <div className="text-xs text-slate-500">{person.role}</div>
                    </div>
                    {person.linkedin && (
                      <a href={person.linkedin} className="text-slate-300 hover:text-blue-500 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function StackGroup({ label, tags }: { label: string, tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div>
      <div className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">{label}</div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
