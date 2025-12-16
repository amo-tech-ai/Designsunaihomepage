import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Resizable } from 're-resizable';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Maximize2,
  Minimize2,
  MoreVertical,
  Plus,
  Search,
  Settings,
  X,
  Clock,
  User,
  AlertCircle,
  CheckCircle2,
  Circle,
  GripVertical,
  ArrowRight,
  LayoutGrid,
  List,
  Layers
} from 'lucide-react';

// Types
export interface GanttTask {
  id: string;
  name: string;
  startWeek: number;
  duration: number; // in weeks
  category: 'discovery' | 'design' | 'development' | 'testing' | 'launch';
  status: 'planned' | 'in-progress' | 'completed';
  assignee?: string;
  dependencies?: string[];
  notes?: string;
  progress?: number;
}

interface InteractiveGanttProps {
  initialTasks: GanttTask[];
}

// Sun AI Palette & Category Colors
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'discovery': 
      return { 
        bg: 'bg-[#00334F]', // Deep Blue
        text: 'text-white', 
        border: 'border-[#002235]', 
        light: 'bg-[#00334F]/10',
        dot: 'bg-[#00334F]'
      };
    case 'design': 
      return { 
        bg: 'bg-[#FF6B2C]', // Sun Orange
        text: 'text-white', 
        border: 'border-[#E55A1F]', 
        light: 'bg-[#FF6B2C]/10',
        dot: 'bg-[#FF6B2C]'
      };
    case 'development': 
      return { 
        bg: 'bg-[#8B5CF6]', // Purple
        text: 'text-white', 
        border: 'border-[#7C3AED]', 
        light: 'bg-[#8B5CF6]/10',
        dot: 'bg-[#8B5CF6]'
      };
    case 'testing': 
      return { 
        bg: 'bg-[#F59E0B]', // Amber
        text: 'text-white', 
        border: 'border-[#D97706]', 
        light: 'bg-[#F59E0B]/10',
        dot: 'bg-[#F59E0B]'
      };
    case 'launch': 
      return { 
        bg: 'bg-[#10B981]', // Emerald
        text: 'text-white', 
        border: 'border-[#059669]', 
        light: 'bg-[#10B981]/10',
        dot: 'bg-[#10B981]'
      };
    default: 
      return { 
        bg: 'bg-slate-500', 
        text: 'text-white', 
        border: 'border-slate-600', 
        light: 'bg-slate-100',
        dot: 'bg-slate-500'
      };
  }
};

export function InteractiveGantt({ initialTasks }: InteractiveGanttProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [zoomLevel, setZoomLevel] = useState<'day' | 'week' | 'month'>('week');
  const [viewMode, setViewMode] = useState<'compact' | 'full'>('full');
  const [showLegend, setShowLegend] = useState(true);
  const [selectedTask, setSelectedTask] = useState<GanttTask | null>(null);
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const gridRef = useRef<HTMLDivElement>(null);

  // Dynamic Column Width based on Zoom
  const columnWidth = useMemo(() => {
    switch(zoomLevel) {
      case 'day': return 40;
      case 'week': return 100;
      case 'month': return 200;
      default: return 100;
    }
  }, [zoomLevel]);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalUnits = zoomLevel === 'day' ? 60 : zoomLevel === 'week' ? 16 : 6;
  
  const handleTaskUpdate = (id: string, updates: Partial<GanttTask>) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const handleDragEnd = (id: string, info: any) => {
    const x = info.offset.x;
    const unitsMoved = Math.round(x / columnWidth);
    
    if (unitsMoved !== 0) {
      setTasks(current => current.map(t => {
        if (t.id === id) {
          const newStart = Math.max(0, t.startWeek + unitsMoved);
          return { ...t, startWeek: newStart };
        }
        return t;
      }));
    }
  };

  const handleResizeStop = (id: string, d: any) => {
    const addedWidth = d.width;
    const addedUnits = Math.round(addedWidth / columnWidth);
    
    if (addedUnits !== 0) {
      setTasks(current => current.map(t => {
        if (t.id === id) {
          const newDuration = Math.max(0.5, t.duration + addedUnits);
          return { ...t, duration: newDuration };
        }
        return t;
      }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-sm flex flex-col overflow-hidden h-[650px] relative">
      {/* 1. Header Controls */}
      <div className="px-6 py-4 border-b border-[#E9EAEE] flex flex-wrap items-center justify-between gap-4 bg-white z-20">
        <div className="flex items-center gap-4">
          {/* Zoom Levels */}
          <div className="flex items-center bg-[#F7F9FB] rounded-lg p-1 border border-[#E9EAEE]">
            {(['day', 'week', 'month'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setZoomLevel(level)}
                className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-all ${
                  zoomLevel === level 
                    ? 'bg-white text-[#00334F] shadow-sm font-semibold' 
                    : 'text-[#999] hover:text-[#555]'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-[#E9EAEE] hidden sm:block" />
          
          {/* View Options */}
          <div className="flex items-center gap-2">
             <button 
               onClick={() => setViewMode(viewMode === 'compact' ? 'full' : 'compact')}
               className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E9EAEE] text-[13px] font-medium text-[#555] hover:bg-[#F7F9FB] hover:text-[#00334F] transition-all"
             >
               {viewMode === 'compact' ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
               <span className="hidden lg:inline">{viewMode === 'compact' ? 'Full View' : 'Compact View'}</span>
             </button>
             
             <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E9EAEE] text-[13px] font-medium text-[#555] hover:bg-[#F7F9FB] hover:text-[#00334F] transition-all">
               <Filter className="w-4 h-4" />
               <span className="hidden lg:inline">Filter</span>
             </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowLegend(!showLegend)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
              showLegend ? 'bg-[#F7F9FB] text-[#00334F]' : 'text-[#999] hover:text-[#555]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Legend</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {isMobile ? (
          /* Mobile Stacked View */
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F7F9FB]">
             {tasks.sort((a,b) => a.startWeek - b.startWeek).map(task => {
               const colors = getCategoryColor(task.category);
               return (
                 <div 
                   key={task.id}
                   onClick={() => setSelectedTask(task)}
                   className="bg-white rounded-xl border border-[#E9EAEE] p-4 shadow-sm active:scale-95 transition-transform"
                 >
                   <div className="flex items-start justify-between mb-3">
                     <div className="flex items-center gap-3">
                       <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                       <h3 className="text-[15px] font-bold text-[#202020]">{task.name}</h3>
                     </div>
                     <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide ${
                       task.status === 'completed' ? 'bg-green-100 text-green-700' :
                       task.status === 'in-progress' ? 'bg-orange-100 text-orange-700' :
                       'bg-slate-100 text-slate-700'
                     }`}>
                       {task.status}
                     </span>
                   </div>
                   
                   <div className="flex items-center gap-5 text-[13px] text-[#555]">
                     <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-[#999]" />
                       <span>Start: W{task.startWeek + 1}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-[#999]" />
                       <span>{task.duration}w Duration</span>
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        ) : (
          /* Desktop Interactive Gantt Grid */
          <div className="flex-1 overflow-auto relative custom-scrollbar bg-white" ref={gridRef}>
            <div className="min-w-max relative pb-12">
              
              {/* Grid Header */}
              <div className="flex sticky top-0 z-10 bg-white border-b border-[#E9EAEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="w-64 flex-shrink-0 bg-white sticky left-0 z-20 border-r border-[#E9EAEE] px-6 py-4 font-bold text-[13px] text-[#00334F] uppercase tracking-wider flex items-center">
                  Task Name
                </div>
                <div className="flex">
                  {Array.from({ length: totalUnits }).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-shrink-0 text-center border-r border-[#F7F9FB] py-4 bg-white flex flex-col items-center justify-center gap-1"
                      style={{ width: columnWidth }}
                    >
                      <span className="text-[12px] font-bold text-[#555]">
                        {zoomLevel === 'week' ? `Week ${i + 1}` : zoomLevel === 'month' ? `Month ${i + 1}` : `Day ${i + 1}`}
                      </span>
                      {zoomLevel === 'week' && (
                        <span className="text-[10px] text-[#999] font-medium">Dec {15 + i * 7}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Body */}
              <div className="relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 flex pl-64 pointer-events-none">
                  {Array.from({ length: totalUnits }).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-shrink-0 border-r border-[#F7F9FB] h-full"
                      style={{ width: columnWidth }}
                    />
                  ))}
                </div>

                {/* SVG Dependency Lines Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 pl-64">
                   <defs>
                     <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                       <polygon points="0 0, 6 2, 0 4" fill="#CBD5E1" />
                     </marker>
                   </defs>
                   {tasks.flatMap(task => 
                     (task.dependencies || []).map(depId => {
                       const depTask = tasks.find(t => t.id === depId);
                       if (!depTask) return null;
                       
                       const startX = (depTask.startWeek + depTask.duration) * columnWidth;
                       const depIndex = tasks.indexOf(depTask);
                       const taskIndex = tasks.indexOf(task);
                       const startY = (depIndex * 64) + 32; // 64px row height, 32px center
                       const endX = (task.startWeek) * columnWidth;
                       const endY = (taskIndex * 64) + 32;

                       const c1x = startX + 25;
                       const c2x = endX - 25;
                       
                       return (
                         <path
                           key={`${depId}-${task.id}`}
                           d={`M ${startX} ${startY} C ${c1x} ${startY}, ${c2x} ${endY}, ${endX} ${endY}`}
                           fill="none"
                           stroke="#CBD5E1"
                           strokeWidth="1.5"
                           strokeDasharray="4 4"
                           markerEnd="url(#arrowhead)"
                           className="transition-all duration-300 opacity-60"
                         />
                       );
                     })
                   )}
                </svg>

                {/* Rows */}
                <div className="relative z-10">
                  {tasks.map((task, rowIndex) => (
                    <div 
                      key={task.id} 
                      className="flex items-center border-b border-[#F7F9FB] hover:bg-[#F7F9FB]/50 transition-colors group relative h-16"
                    >
                      {/* Sticky Task Name Column */}
                      <div className="w-64 flex-shrink-0 px-6 sticky left-0 z-20 bg-white/95 backdrop-blur-sm border-r border-[#E9EAEE] h-full flex items-center justify-between group-hover:bg-[#F7F9FB]/80 transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getCategoryColor(task.category).bg}`} />
                          <span className="text-[14px] font-medium text-[#202020] truncate">
                            {task.name}
                          </span>
                        </div>
                        <button 
                          onClick={() => setSelectedTask(task)}
                          className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-slate-100 rounded-lg transition-all text-[#999]"
                        >
                           <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Gantt Bar Area */}
                      <div className="relative flex-1 h-full">
                         <GanttBar 
                           task={task} 
                           columnWidth={columnWidth}
                           onDragEnd={handleDragEnd}
                           onResizeStop={handleResizeStop}
                           onHover={setHoveredTask}
                           onClick={() => setSelectedTask(task)}
                           isHovered={hoveredTask === task.id}
                         />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. Task Detail Drawer */}
        <AnimatePresence>
          {selectedTask && (
            <>
               {isMobile && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   onClick={() => setSelectedTask(null)}
                   className="absolute inset-0 bg-black/20 z-20"
                 />
               )}
               <motion.div
                 initial={{ x: '100%' }}
                 animate={{ x: 0 }}
                 exit={{ x: '100%' }}
                 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                 className={`absolute top-0 right-0 bottom-0 bg-white border-l border-[#E9EAEE] shadow-2xl z-30 flex flex-col ${isMobile ? 'w-full' : 'w-[400px]'}`}
               >
                 {/* Drawer Header */}
                 <div className="px-6 py-5 border-b border-[#E9EAEE] flex items-center justify-between bg-white">
                   <div>
                     <h3 className="text-[18px] font-bold text-[#202020] mb-1">Edit Task</h3>
                     <p className="text-[12px] text-[#999]">Manage details and timeline</p>
                   </div>
                   <button 
                     onClick={() => setSelectedTask(null)}
                     className="p-2 hover:bg-[#F7F9FB] rounded-full text-[#999] hover:text-[#202020] transition-colors"
                   >
                     <X className="w-5 h-5" />
                   </button>
                 </div>

                 {/* Drawer Content */}
                 <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                   {/* Task Name */}
                   <div className="space-y-2">
                     <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Task Name</label>
                     <input 
                       type="text" 
                       value={selectedTask.name}
                       onChange={(e) => handleTaskUpdate(selectedTask.id, { name: e.target.value })}
                       className="w-full px-4 py-3 border border-[#E9EAEE] rounded-xl text-[15px] font-medium text-[#202020] focus:ring-2 focus:ring-[#FF6A3D]/20 focus:border-[#FF6A3D] outline-none transition-all"
                     />
                   </div>

                   {/* Date & Duration Grid */}
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Start Week</label>
                       <div className="relative group">
                         <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#999] group-focus-within:text-[#FF6A3D] transition-colors" />
                         <input 
                           type="number" 
                           value={selectedTask.startWeek}
                           onChange={(e) => handleTaskUpdate(selectedTask.id, { startWeek: parseInt(e.target.value) || 0 })}
                           className="w-full pl-10 pr-4 py-3 border border-[#E9EAEE] rounded-xl text-[14px] text-[#202020] focus:ring-2 focus:ring-[#FF6A3D]/20 focus:border-[#FF6A3D] outline-none transition-all"
                         />
                       </div>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Duration (Weeks)</label>
                       <div className="relative group">
                         <Clock className="absolute left-3 top-3 w-4 h-4 text-[#999] group-focus-within:text-[#FF6A3D] transition-colors" />
                         <input 
                           type="number" 
                           value={selectedTask.duration}
                           onChange={(e) => handleTaskUpdate(selectedTask.id, { duration: parseFloat(e.target.value) || 1 })}
                           className="w-full pl-10 pr-4 py-3 border border-[#E9EAEE] rounded-xl text-[14px] text-[#202020] focus:ring-2 focus:ring-[#FF6A3D]/20 focus:border-[#FF6A3D] outline-none transition-all"
                         />
                       </div>
                     </div>
                   </div>

                   {/* Category Selection */}
                   <div className="space-y-2">
                     <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Category</label>
                     <div className="grid grid-cols-2 gap-2">
                       {['discovery', 'design', 'development', 'testing', 'launch'].map((cat) => {
                          const isSelected = selectedTask.category === cat;
                          const colors = getCategoryColor(cat);
                          return (
                            <button
                              key={cat}
                              onClick={() => handleTaskUpdate(selectedTask.id, { category: cat as any })}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-[13px] font-medium transition-all ${
                                isSelected 
                                  ? `border-[${colors.border}] bg-[#F7F9FB] ring-1 ring-[${colors.border}]` 
                                  : 'border-[#E9EAEE] hover:bg-[#F7F9FB]'
                              }`}
                            >
                              <div className={`w-2.5 h-2.5 rounded-full ${colors.bg}`} />
                              <span className="capitalize text-[#202020]">{cat}</span>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00334F] ml-auto" />}
                            </button>
                          );
                       })}
                     </div>
                   </div>

                   {/* Status */}
                   <div className="space-y-2">
                      <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Status</label>
                      <div className="flex bg-[#F7F9FB] p-1 rounded-xl border border-[#E9EAEE]">
                        {(['planned', 'in-progress', 'completed'] as const).map(status => (
                          <button
                            key={status}
                            onClick={() => handleTaskUpdate(selectedTask.id, { status })}
                            className={`flex-1 py-2 rounded-lg text-[12px] font-semibold capitalize transition-all ${
                              selectedTask.status === status
                                ? 'bg-white text-[#00334F] shadow-sm'
                                : 'text-[#999] hover:text-[#555]'
                            }`}
                          >
                            {status.replace('-', ' ')}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Assignee */}
                   <div className="space-y-2">
                     <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Assigned Team</label>
                     <div className="relative group">
                       <User className="absolute left-3 top-3 w-4 h-4 text-[#999] group-focus-within:text-[#FF6A3D] transition-colors" />
                       <input 
                         type="text" 
                         value={selectedTask.assignee || ''}
                         onChange={(e) => handleTaskUpdate(selectedTask.id, { assignee: e.target.value })}
                         placeholder="e.g. Design Team"
                         className="w-full pl-10 pr-4 py-3 border border-[#E9EAEE] rounded-xl text-[14px] text-[#202020] focus:ring-2 focus:ring-[#FF6A3D]/20 focus:border-[#FF6A3D] outline-none transition-all"
                       />
                     </div>
                   </div>

                   {/* Notes */}
                   <div className="space-y-2">
                     <label className="text-[12px] font-bold text-[#999] uppercase tracking-wide">Notes</label>
                     <textarea 
                       value={selectedTask.notes || ''}
                       onChange={(e) => handleTaskUpdate(selectedTask.id, { notes: e.target.value })}
                       className="w-full px-4 py-3 border border-[#E9EAEE] rounded-xl text-[14px] text-[#202020] focus:ring-2 focus:ring-[#FF6A3D]/20 focus:border-[#FF6A3D] outline-none transition-all min-h-[100px] resize-none"
                       placeholder="Add any additional details or requirements..."
                     />
                   </div>
                 </div>

                 {/* Drawer Footer */}
                 <div className="p-6 border-t border-[#E9EAEE] bg-[#F7F9FB] flex gap-3">
                   <button 
                     onClick={() => setSelectedTask(null)}
                     className="px-6 py-3 bg-white border border-[#E9EAEE] text-[#555] text-[14px] font-semibold rounded-xl hover:bg-[#F2F4F7] transition-all"
                   >
                     Cancel
                   </button>
                   <button 
                     onClick={() => setSelectedTask(null)}
                     className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00334F] to-[#00486D] text-white text-[14px] font-semibold rounded-xl hover:shadow-lg transition-all"
                   >
                     Save Changes
                   </button>
                 </div>
               </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* 7. Bottom Legend */}
      {showLegend && !isMobile && (
        <div className="px-6 py-3 border-t border-[#E9EAEE] bg-[#F7F9FB] flex flex-wrap items-center gap-8 z-20">
          <span className="text-[11px] font-bold text-[#999] uppercase tracking-wider">Legend:</span>
          {['Discovery', 'Design', 'Development', 'Testing', 'Launch'].map((cat) => {
            const colors = getCategoryColor(cat.toLowerCase());
            return (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${colors.bg} ring-2 ring-white shadow-sm`} />
                <span className="text-[12px] text-[#555] font-medium">{cat}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Sub-component for the Bar
function GanttBar({ 
  task, 
  columnWidth, 
  onDragEnd,
  onResizeStop,
  onHover,
  onClick,
  isHovered 
}: { 
  task: GanttTask; 
  columnWidth: number;
  onDragEnd: (id: string, info: any) => void;
  onResizeStop: (id: string, d: any) => void;
  onHover: (id: string | null) => void;
  onClick: () => void;
  isHovered: boolean;
}) {
  const colors = getCategoryColor(task.category);
  const left = task.startWeek * columnWidth;
  const width = task.duration * columnWidth;

  return (
    <div 
      className="absolute inset-y-0 h-full flex items-center py-3" 
      style={{ left }}
    >
      {/* 4. Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -50, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            style={{ bottom: '100%' }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-[#E9EAEE] p-4 w-64 text-left relative overflow-hidden">
               {/* Color Bar */}
               <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.bg}`} />
               
               <div className="mt-2 mb-3">
                 <h4 className="text-[15px] font-bold text-[#202020] leading-tight">{task.name}</h4>
               </div>
               
               <div className="space-y-2 text-[12px] text-[#555]">
                 <div className="flex justify-between items-center pb-2 border-b border-[#F7F9FB]">
                   <span className="text-[#999]">Duration</span>
                   <span className="font-semibold text-[#202020] bg-[#F7F9FB] px-2 py-0.5 rounded-md">{task.duration} weeks</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-[#999]">Timeline</span>
                   <span className="font-medium">W{task.startWeek + 1} — W{task.startWeek + task.duration + 1}</span>
                 </div>
                 <div className="flex justify-between items-center pt-1">
                   <span className="text-[#999]">Status</span>
                   <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide ${
                     task.status === 'completed' ? 'bg-green-100 text-green-700' :
                     task.status === 'in-progress' ? 'bg-orange-100 text-orange-700' :
                     'bg-slate-100 text-slate-700'
                   }`}>
                     {task.status}
                   </span>
                 </div>
               </div>
               
               {/* Arrow */}
               <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E9EAEE] transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Interactive Gantt Bar (Resizable) */}
      <Resizable
        size={{ width: width, height: '100%' }}
        minWidth={columnWidth * 0.5}
        maxWidth={columnWidth * 20}
        enable={{ right: true, left: false, top: false, bottom: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
        onResizeStop={(e, direction, ref, d) => onResizeStop(task.id, d)}
        handleComponent={{
          right: (
            <div className="absolute right-0 top-0 bottom-0 w-4 flex items-center justify-center cursor-ew-resize opacity-0 group-hover/bar:opacity-100 z-10 transition-opacity">
               <div className="h-6 w-1 bg-white/40 rounded-full shadow-sm backdrop-blur-md" />
            </div>
          )
        }}
        className="relative group/bar z-10"
      >
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0.05}
          onDragEnd={(_, info) => onDragEnd(task.id, info)}
          whileHover={{ scale: 1.01, y: -1 }}
          whileTap={{ scale: 0.99, cursor: 'grabbing' }}
          onMouseEnter={() => onHover(task.id)}
          onMouseLeave={() => onHover(null)}
          onClick={(e) => {
             e.stopPropagation();
             onClick(); 
          }}
          className={`relative w-full h-full rounded-xl shadow-md ${colors.bg} flex items-center cursor-grab active:cursor-grabbing overflow-hidden group/item ring-1 ring-white/20`}
        >
          {/* Glass effect gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="px-3 flex items-center justify-between w-full relative z-10">
            <span className="text-[12px] font-bold text-white truncate drop-shadow-sm select-none tracking-wide">
              {task.name}
            </span>
            {width > 60 && (
              <span className="text-[11px] text-white/90 font-medium whitespace-nowrap ml-2 select-none bg-black/10 px-1.5 py-0.5 rounded-md">
                {task.duration}w
              </span>
            )}
          </div>
        </motion.div>
      </Resizable>
    </div>
  );
}
