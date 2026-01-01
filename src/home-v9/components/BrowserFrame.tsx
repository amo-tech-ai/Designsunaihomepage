'use client';

import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, FileText, Activity } from 'lucide-react';
import { GhostCursor } from './GhostCursor';

interface BrowserFrameProps {
  activeStep: number;
}

export function BrowserFrame({ activeStep }: BrowserFrameProps) {
  return (
    <div className="relative">
      {/* MacOS Window Chrome */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Title Bar */}
        <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 font-medium">
            {activeStep === 0 && 'Brief Wizard'}
            {activeStep === 1 && 'Blueprint Document'}
            {activeStep === 2 && 'Agency Dashboard'}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white h-96 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Scope Wizard */}
            {activeStep === 0 && (
              <motion.div
                key="scope"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0A1628]">Project Brief</h3>
                  <p className="text-sm text-gray-500">Tell us about your vision</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      What problem are you solving?
                    </label>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        We need an AI system to automate customer support...
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Target launch date
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                        8 weeks
                      </div>
                      <div className="p-3 bg-emerald-500 text-white rounded-lg flex items-center gap-2">
                        <CheckCircle2 size={18} />
                        <span className="text-sm font-semibold">Achievable</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-emerald-500 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Progress: 60% complete</p>
                  </div>
                </div>

                <GhostCursor position={{ x: 180, y: 120 }} />
              </motion.div>
            )}

            {/* Step 2: Blueprint */}
            {activeStep === 1 && (
              <motion.div
                key="blueprint"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A1628]">
                      Technical Blueprint
                    </h3>
                    <p className="text-sm text-gray-500">
                      Generated in 48 hours
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded">
                    APPROVED
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'System Architecture',
                    'Data Flow Diagram',
                    'API Specifications',
                    'UI/UX Wireframes',
                    'Security Protocol',
                    'Deployment Strategy',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                      <span className="ml-auto text-xs text-gray-400">
                        {index % 2 === 0 ? '3 pages' : '2 pages'}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <GhostCursor position={{ x: 200, y: 180 }} />
              </motion.div>
            )}

            {/* Step 3: Dashboard */}
            {activeStep === 2 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Activity size={24} className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A1628]">
                      Project Dashboard
                    </h3>
                    <p className="text-sm text-gray-500">Real-time tracking</p>
                  </div>
                </div>

                {/* Progress Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-600">85%</div>
                    <div className="text-xs text-gray-600 mt-1">Complete</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">6d</div>
                    <div className="text-xs text-gray-600 mt-1">Remaining</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-xs text-gray-600 mt-1">Deliverables</div>
                  </div>
                </div>

                {/* Task List */}
                <div className="space-y-2">
                  {[
                    { task: 'API Integration', status: 'Done' },
                    { task: 'UI Components', status: 'In Progress' },
                    { task: 'Testing Suite', status: 'Pending' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.task}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <span className="text-sm text-gray-700">{item.task}</span>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          item.status === 'Done'
                            ? 'bg-emerald-100 text-emerald-700'
                            : item.status === 'In Progress'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <GhostCursor position={{ x: 240, y: 200 }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
