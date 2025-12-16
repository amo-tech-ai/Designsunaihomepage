import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Clock, Zap } from 'lucide-react';

const lineData = [
  { name: 'W1', value: 20 },
  { name: 'W2', value: 45 },
  { name: 'W3', value: 35 },
  { name: 'W4', value: 80 },
  { name: 'W5', value: 65 },
  { name: 'W6', value: 95 },
  { name: 'W7', value: 120 },
];

const barData = [
  { name: 'Traditional', value: 100 },
  { name: 'Sun AI', value: 600 },
];

export function MetricsSection() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Metrics & Charts */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[#00334F]">Velocity Comparison</h3>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+600% Speed</span>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6B2C" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#FF6B2C" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#00334F', borderRadius: '8px', border: 'none', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#FF6B2C" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Faster Delivery', value: '6x', icon: Zap },
                { label: 'Cost Efficiency', value: '35%', icon: TrendingUp },
                { label: 'Avg. ROI', value: '340%', icon: Clock }, // Icon choice approximate
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center"
                >
                  <div className="w-8 h-8 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-2">
                    <stat.icon className="w-4 h-4 text-[#00334F]" />
                  </div>
                  <div className="text-2xl font-bold text-[#00334F]">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334F] mb-6">
              Intelligence That Drives <br />
              <span className="text-[#FF6B2C]">Measurable Results</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just write code; we optimize the entire delivery lifecycle. By leveraging autonomous AI agents for testing, deployment, and refactoring, we eliminate the bottlenecks of traditional software development.
            </p>
            <ul className="space-y-4">
              {[
                'Automated regression testing catch bugs instantly',
                'AI-driven code reviews ensure best practices',
                'Seamless CI/CD pipelines deploy in minutes'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#FF6B2C]/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
