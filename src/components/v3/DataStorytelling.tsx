import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function DataStorytelling() {
  const beforeAfterData = [
    { name: 'Traditional Dev', value: 24, color: '#E9EAEE' },
    { name: 'Sun AI Approach', value: 8, color: '#FF6A3D' },
  ];

  const accelerationData = [
    { week: 'Week 1', progress: 15 },
    { week: 'Week 2', progress: 35 },
    { week: 'Week 3', progress: 55 },
    { week: 'Week 4', progress: 70 },
    { week: 'Week 5', progress: 82 },
    { week: 'Week 6', progress: 90 },
    { week: 'Week 7', progress: 96 },
    { week: 'Week 8', progress: 100 },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse"></div>
            <span className="text-[13px] tracking-wider uppercase text-[#555]">Impact & Results</span>
          </div>
          <h2 
            className="text-[48px] md:text-[56px] leading-[1.15] text-[#202020] mb-6"
            style={{ fontWeight: 600 }}
          >
            AI That Drives Measurable Results
          </h2>
          <p className="text-[18px] text-[#555] max-w-2xl mx-auto">
            Data-driven outcomes from AI implementations across our client portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Before/After Chart */}
          <div className="bg-white rounded-[24px] p-8 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
            <h3 className="text-[24px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              Time to Production
            </h3>
            <p className="text-[14px] text-[#555] mb-8">Weeks from concept to launch</p>
            
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={beforeAfterData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EAEE" />
                <XAxis type="number" stroke="#555" style={{ fontSize: '12px' }} />
                <YAxis dataKey="name" type="category" width={140} stroke="#555" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E9EAEE', borderRadius: '8px' }}
                  labelStyle={{ color: '#202020', fontWeight: 600 }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {beforeAfterData.map((entry, index) => (
                    <rect key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 pt-6 border-t border-[#E9EAEE] text-center">
              <div className="text-[40px] text-[#FF6A3D]" style={{ fontWeight: 300 }}>3×</div>
              <p className="text-[14px] text-[#555]">Faster delivery time</p>
            </div>
          </div>

          {/* Acceleration Over Time */}
          <div className="bg-white rounded-[24px] p-8 border border-[#E9EAEE]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
            <h3 className="text-[24px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>
              Project Completion Curve
            </h3>
            <p className="text-[14px] text-[#555] mb-8">8-week delivery sprint trajectory</p>
            
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={accelerationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EAEE" />
                <XAxis dataKey="week" stroke="#555" style={{ fontSize: '12px' }} />
                <YAxis stroke="#555" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E9EAEE', borderRadius: '8px' }}
                  labelStyle={{ color: '#202020', fontWeight: 600 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#00334F" 
                  strokeWidth={3}
                  dot={{ fill: '#00334F', r: 4 }}
                  activeDot={{ r: 6, fill: '#FF6A3D' }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 pt-6 border-t border-[#E9EAEE] text-center">
              <div className="text-[40px] text-[#00334F]" style={{ fontWeight: 300 }}>100%</div>
              <p className="text-[14px] text-[#555]">On-time completion rate</p>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#F7F9FB] to-white rounded-[20px] p-10 border border-[#E9EAEE] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border border-[#E9EAEE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF6A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-[56px] text-[#00334F] mb-3" style={{ fontWeight: 300 }}>6×</div>
            <p className="text-[16px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Faster Deployment</p>
            <p className="text-[14px] text-[#555]">Compared to traditional development cycles</p>
          </div>

          <div className="bg-gradient-to-br from-[#F7F9FB] to-white rounded-[20px] p-10 border border-[#E9EAEE] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border border-[#E9EAEE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF6A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-[56px] text-[#00334F] mb-3" style={{ fontWeight: 300 }}>35%</div>
            <p className="text-[16px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Average Cost Savings</p>
            <p className="text-[14px] text-[#555]">Through automation and efficiency gains</p>
          </div>

          <div className="bg-gradient-to-br from-[#F7F9FB] to-white rounded-[20px] p-10 border border-[#E9EAEE] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border border-[#E9EAEE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF6A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-[56px] text-[#00334F] mb-3" style={{ fontWeight: 300 }}>340%</div>
            <p className="text-[16px] text-[#202020] mb-2" style={{ fontWeight: 600 }}>Productivity Lift</p>
            <p className="text-[14px] text-[#555]">Team output after AI implementation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
