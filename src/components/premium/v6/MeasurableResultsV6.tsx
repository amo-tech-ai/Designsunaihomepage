import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const roiData = [
  { month: 'M1', value: 100 },
  { month: 'M2', value: 120 },
  { month: 'M3', value: 160 },
  { month: 'M4', value: 240 },
  { month: 'M5', value: 380 },
  { month: 'M6', value: 540 },
];

export function MeasurableResultsV6() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-orange-50/30 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#00334F] text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#0EA5E9]" />
            AI That Drives Measurable Results
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6 leading-tight"
          >
            Real Business Impact <br className="hidden md:block" /> Powered by Sun AI
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light"
          >
            See how AI accelerates delivery, reduces costs, and boosts productivity across the enterprise.
          </motion.p>
        </div>

        {/* 2. Analytics Row (Two Large Cards) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* LEFT CARD: Time-to-Production (Redesigned) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-bold text-[#00334F]">Time to Production</h3>
              </div>
              <p className="text-slate-500 font-light">
                How long it takes to launch an AI product
              </p>
            </div>

            {/* Comparison Bar Chart */}
            <div className="relative z-10 flex-grow flex flex-col justify-end">
              <div className="relative h-[240px] w-full mt-4">
                
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full border-t border-dashed border-slate-200 last:border-solid last:border-slate-300" />
                  ))}
                </div>

                {/* Bars Container */}
                <div className="absolute inset-0 flex items-end justify-around px-4 sm:px-12 pb-[1px]">
                    {/* Traditional */}
                    <div className="flex flex-col items-center gap-3 w-1/2 max-w-[120px]">
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 }}
                           viewport={{ once: true }}
                           className="text-lg font-bold text-[#94A3B8]"
                        >
                          4 months
                        </motion.div>
                        <motion.div 
                           initial={{ height: 0 }}
                           whileInView={{ height: '80%' }} 
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, ease: "easeOut" }}
                           className="w-full bg-[#C6CEDA] rounded-t-2xl relative"
                        />
                         <span className="text-sm font-medium text-slate-500 mt-2">Traditional</span>
                    </div>

                    {/* Sun AI */}
                    <div className="flex flex-col items-center gap-3 w-1/2 max-w-[120px]">
                         <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.7 }}
                           viewport={{ once: true }}
                           className="text-lg font-bold text-[#FF6A3D]"
                        >
                          1 month
                        </motion.div>
                         <motion.div 
                           initial={{ height: 0 }}
                           whileInView={{ height: '20%' }} 
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                           className="w-full bg-[#FF6A3D] rounded-t-2xl shadow-[0_10px_20px_-5px_rgba(255,106,61,0.3)] relative"
                        />
                        <span className="text-sm font-bold text-[#00334F] mt-2">Sun AI</span>
                    </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  Sun AI accelerates time-to-production by <span className="font-bold text-[#FF6A3D]">75%</span>
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT CARD: ROI Growth Curve */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden min-h-[400px] flex flex-col"
          >
             <div className="mb-6 relative z-10">
               <div className="flex items-start justify-between">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-[#00334F]">ROI Growth</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#00334F]">3.4x</span>
                      <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full text-sm">
                        +240%
                      </span>
                    </div>
                    <p className="text-slate-500 mt-2 font-light">Real efficiency gains within 90 days.</p>
                 </div>
                 <div className="hidden sm:block">
                   <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                     <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Projected</span>
                     <div className="font-bold text-[#00334F]">$1.2M Savings</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Chart */}
             <div className="flex-grow w-full h-[200px] -ml-4">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={roiData}>
                   <defs>
                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.2}/>
                       <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                   <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 12 }} 
                      dy={10}
                   />
                   <Tooltip 
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                     labelStyle={{ color: '#64748B' }}
                   />
                   <Area 
                     type="monotone" 
                     dataKey="value" 
                     stroke="#0EA5E9" 
                     strokeWidth={3} 
                     fillOpacity={1} 
                     fill="url(#colorValue)" 
                   />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </motion.div>

        </div>

        {/* 3. Metrics Row (Three Stat Cards) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <MetricCard 
            icon={Zap}
            value="6x"
            label="Faster Deployment"
            desc="Automated workflows accelerate shipping velocity."
            delay={0.1}
          />
          
          <MetricCard 
            icon={TrendingUp} // Or generic chart icon
            value="35%"
            label="Cost Efficiency"
            desc="AI-generated code reduces development hours."
            delay={0.2}
          />
          
          <MetricCard 
            icon={ArrowUpRight}
            value="340%"
            label="Productivity Lift"
            desc="Teams deliver more with AI-assisted workflows."
            delay={0.3}
          />

        </div>

        {/* 4. Insight Block */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-[#FF6B2C]" />
            <span className="text-[#00334F] font-medium text-sm md:text-base">
              Insight: Companies using Sun AI cut bottlenecks by <span className="font-bold border-b-2 border-[#FF6B2C]/30">50%</span>.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function MetricCard({ icon: Icon, value, label, desc, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-blue-50 rounded-xl text-[#0EA5E9]">
          <Icon className="w-6 h-6" />
        </div>
        {/* Optional decorative element */}
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      
      <div className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-3 tracking-tight">
        {value}
      </div>
      
      <h4 className="text-lg font-bold text-slate-800 mb-2">
        {label}
      </h4>
      
      <p className="text-slate-500 font-light text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
