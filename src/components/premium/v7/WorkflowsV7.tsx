import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function WorkflowsV7() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 space-y-32">
        
        {/* Block 1: Automation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Abstract UI Visual */}
             <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
                       <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-blue-100 text-blue-500' : i === 2 ? 'bg-orange-100 text-orange-500' : 'bg-green-100 text-green-500'}`}>
                           <div className="w-4 h-4 rounded-full bg-current" />
                         </div>
                         <div>
                           <div className="h-3 w-24 bg-slate-100 rounded mb-1" />
                           <div className="h-2 w-16 bg-slate-50 rounded" />
                         </div>
                       </div>
                       <div className="h-6 w-16 bg-slate-50 rounded-full" />
                    </div>
                  ))}
                </div>
                
                {/* Connector Line Animation */}
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20">
                   <div className="w-3 h-3 bg-[#FF6A3D] rounded-full animate-ping" />
                </div>
             </div>
             
             <div className="absolute -top-10 -left-10 w-full h-full bg-[#FF6A3D]/5 rounded-3xl -z-10" />
          </motion.div>

          <div>
             <div className="text-[#FF6A3D] font-bold text-sm tracking-widest uppercase mb-4">Smart Automation</div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Proven workflows that <br/> scale with you.</h2>
             <p className="text-slate-500 text-lg mb-8 leading-relaxed">
               Stop wasting time on manual tasks. Our AI agents handle the heavy lifting, 
               connecting your apps and data to automate complex processes instantly.
             </p>
             
             <ul className="space-y-4 mb-8">
               {["Zero-setup integration", "Real-time error handling", "Human-in-the-loop control"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <CheckCircle2 className="w-5 h-5 text-[#FF6A3D]" />
                   {item}
                 </li>
               ))}
             </ul>

             <button className="text-[#FF6A3D] font-bold flex items-center gap-2 hover:gap-3 transition-all">
               Explore Workflows <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Block 2: Data */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="text-[#FF6A3D] font-bold text-sm tracking-widest uppercase mb-4">Data Intelligence</div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">We build IT for <br/> IT stuff.</h2>
             <p className="text-slate-500 text-lg mb-8 leading-relaxed">
               Turn your messy data into structured insights. Sun AI automatically cleans, 
               categorizes, and analyzes your data streams in real-time.
             </p>
             
             <ul className="space-y-4 mb-8">
               {["99% Extraction accuracy", "Custom data schemas", "Export to any database"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <CheckCircle2 className="w-5 h-5 text-[#FF6A3D]" />
                   {item}
                 </li>
               ))}
             </ul>

             <button className="text-[#FF6A3D] font-bold flex items-center gap-2 hover:gap-3 transition-all">
               See Documentation <ArrowRight className="w-4 h-4" />
             </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
             {/* Abstract Data Visual */}
             <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-xs text-slate-400 mb-1">Total Processed</div>
                      <div className="text-2xl font-bold text-white">1.2M</div>
                   </div>
                   <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-xs text-slate-400 mb-1">Accuracy</div>
                      <div className="text-2xl font-bold text-[#FF6A3D]">99.8%</div>
                   </div>
                </div>
                
                {/* Code Snippet Look */}
                <div className="bg-black/30 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 border border-white/5">
                   <div className="flex gap-2">
                     <span className="text-purple-400">const</span>
                     <span className="text-blue-400">extractData</span>
                     <span className="text-white">=</span>
                     <span className="text-yellow-400">await</span>
                     <span className="text-white">ai.process(doc);</span>
                   </div>
                   <div className="flex gap-2 pl-4">
                     <span className="text-purple-400">return</span>
                     <span className="text-white">{`{`}</span>
                   </div>
                   <div className="flex gap-2 pl-8">
                     <span className="text-green-400">status:</span>
                     <span className="text-orange-400">"success"</span>,
                   </div>
                   <div className="flex gap-2 pl-8">
                     <span className="text-green-400">confidence:</span>
                     <span className="text-blue-400">0.99</span>
                   </div>
                   <div className="pl-4 text-white">{`}`}</div>
                </div>
             </div>
             
             <div className="absolute -bottom-10 -right-10 w-full h-full bg-slate-100 rounded-3xl -z-10" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
