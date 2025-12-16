export function TestimonialsV7() {
  const reviews = [
    {
      text: "Sun AI completely transformed how we handle customer support. We reduced response times by 90%.",
      author: "Sarah J.",
      role: "CTO at TechFlow",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "The workflow builder is incredibly intuitive. We built our entire backend automation in two days.",
      author: "Michael C.",
      role: "Product Lead at StartUp",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "Security was our main concern, but Sun AI's enterprise features gave us full peace of mind.",
      author: "Elena R.",
      role: "VP Eng at BigCorp",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">People love automation</h2>
          <p className="text-slate-500">Join thousands of happy teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="flex items-center gap-1 text-[#FF6A3D] mb-6">
                 {[1,2,3,4,5].map(star => (
                   <span key={star}>★</span>
                 ))}
               </div>
               <p className="text-slate-700 leading-relaxed mb-6 font-medium">"{r.text}"</p>
               <div className="flex items-center gap-4">
                 <img src={r.img} alt={r.author} className="w-10 h-10 rounded-full object-cover" />
                 <div>
                   <div className="font-bold text-slate-900 text-sm">{r.author}</div>
                   <div className="text-xs text-slate-500">{r.role}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
