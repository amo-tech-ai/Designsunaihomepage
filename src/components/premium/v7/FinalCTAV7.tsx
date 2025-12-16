import { ArrowRight } from 'lucide-react';

export function FinalCTAV7() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-orange-100/50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

       <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
         <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
           Transform your data into <br/>
           <span className="text-[#FF6A3D]">AI custom solutions</span>
         </h2>
         <p className="text-xl text-slate-500 mb-10">
           Start building in minutes. No credit card required.
         </p>
         
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="px-8 py-4 bg-[#FF6A3D] text-white font-bold rounded-xl hover:bg-[#E55A2F] transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
             Start Building Now <ArrowRight className="w-5 h-5" />
           </button>
           <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center">
             Talk to Sales
           </button>
         </div>
       </div>
    </section>
  );
}
