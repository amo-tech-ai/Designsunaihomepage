import { motion } from 'motion/react';

export function ResultsV11() {
  return (
    <section className="py-24 bg-white border-b border-[#EFE9E4]">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="mb-16 border-l-2 border-[#FCD34D] pl-6">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-2">
            AI That Drives Measurable Results
          </h2>
          <p className="text-[#666666] text-sm font-serif" style={{ fontFamily: 'Lora, serif' }}>
            Data-driven performance across all key metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Chart 1: Time to Production */}
          <div className="bg-[#FDFCFB] p-8 border border-[#EFE9E4]">
             <h3 className="font-bold text-[#1A1A1A] mb-8 uppercase tracking-wide text-sm">Time to Production (Weeks)</h3>
             <div className="relative h-64 flex items-end gap-12 pl-12 border-l border-[#D1C7BD] border-b pb-4">
                
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#888888] -translate-x-full pr-4 pb-4 font-mono">
                  <span>30</span>
                  <span>15</span>
                  <span>0</span>
                </div>

                {/* Bar 1 */}
                <div className="flex-1 flex flex-col justify-end gap-2 group">
                   <motion.div 
                     initial={{ height: 0 }} 
                     whileInView={{ height: "80%" }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 1 }}
                     className="w-full bg-[#D1C7BD] relative"
                   >
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-[#666666] font-mono">32w</div>
                   </motion.div>
                   <div className="text-center text-[10px] font-bold text-[#888888] uppercase tracking-wide">Traditional</div>
                </div>

                {/* Bar 2 */}
                <div className="flex-1 flex flex-col justify-end gap-2 group">
                   <motion.div 
                     initial={{ height: 0 }} 
                     whileInView={{ height: "20%" }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 1, delay: 0.2 }}
                     className="w-full bg-[#F59E0B] relative"
                   >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-[#F59E0B] font-mono">8w</div>
                   </motion.div>
                   <div className="text-center text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wide">Sun AI</div>
                </div>

             </div>
          </div>

          {/* Chart 2: Cost Savings */}
          <div className="bg-[#FDFCFB] p-8 border border-[#EFE9E4]">
             <h3 className="font-bold text-[#1A1A1A] mb-8 uppercase tracking-wide text-sm">Operating Cost Reduction (%)</h3>
             <div className="relative h-64 flex items-end gap-12 pl-12 border-l border-[#D1C7BD] border-b pb-4">
                
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#888888] -translate-x-full pr-4 pb-4 font-mono">
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                {/* Bar 1 */}
                <div className="flex-1 flex flex-col justify-end gap-2">
                   <motion.div 
                     initial={{ height: 0 }} 
                     whileInView={{ height: "30%" }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 1, delay: 0.4 }}
                     className="w-full bg-[#D1C7BD] relative"
                   >
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-[#666666] font-mono">15%</div>
                   </motion.div>
                   <div className="text-center text-[10px] font-bold text-[#888888] uppercase tracking-wide">Manual</div>
                </div>

                {/* Bar 2 */}
                <div className="flex-1 flex flex-col justify-end gap-2">
                   <motion.div 
                     initial={{ height: 0 }} 
                     whileInView={{ height: "70%" }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 1, delay: 0.6 }}
                     className="w-full bg-[#F59E0B] relative"
                   >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-[#F59E0B] font-mono">35%</div>
                   </motion.div>
                   <div className="text-center text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wide">AI-Powered</div>
                </div>

             </div>
          </div>

        </div>

        {/* Key Metrics Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { metric: "4x", label: "Faster Deployment" },
            { metric: "65%", label: "Lower TCO" },
            { metric: "99.9%", label: "System Uptime" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-[#F59E0B] pl-6 py-4"
            >
              <div className="text-4xl font-serif text-[#1A1A1A] mb-2">{item.metric}</div>
              <div className="text-xs uppercase tracking-widest text-[#888888] font-bold">{item.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
