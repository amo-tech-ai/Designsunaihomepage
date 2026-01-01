"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { CheckSquare, Circle, CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";

export default function TasksPage() {
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "done">("all");

  const topStrip = (
    <TopStrip
      projectName="Real Estate CRM with WhatsApp Automation"
      industry="Real Estate"
      status="In Progress"
      complexity="Medium"
      deliveryModel="Phased MVP"
      primaryGoal="Automate Operations"
    />
  );

  const tasks = [
    {
      id: 1,
      title: "Design lead capture form",
      project: "Phase 1: Core CRM",
      priority: "High",
      status: "in-progress",
      assignee: "Sarah Johnson",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Implement WhatsApp webhook",
      project: "Phase 2: WhatsApp Integration",
      priority: "High",
      status: "todo",
      assignee: "Michael Chen",
      dueDate: "Tomorrow",
    },
    {
      id: 3,
      title: "Set up Stripe payment flow",
      project: "Phase 1: Core CRM",
      priority: "Medium",
      status: "in-progress",
      assignee: "Lisa Wang",
      dueDate: "Dec 31",
    },
    {
      id: 4,
      title: "Write API documentation",
      project: "Phase 1: Core CRM",
      priority: "Low",
      status: "todo",
      assignee: "John Smith",
      dueDate: "Jan 5",
    },
    {
      id: 5,
      title: "Configure database schema",
      project: "Phase 1: Core CRM",
      priority: "High",
      status: "done",
      assignee: "Sarah Johnson",
      dueDate: "Dec 27",
    },
  ];

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <CheckCircle2 size={18} className="text-emerald-500" />;
      case "in-progress":
        return <Circle size={18} className="text-indigo-500" />;
      default:
        return <Circle size={18} className="text-zinc-300" />;
    }
  };

  return (
    <DashboardLayout topStrip={topStrip} rightPanelDefaultOpen={false}>
      <div className="p-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Tasks</h1>
            <p className="text-sm font-light text-zinc-600">
              Manage and track all project tasks
            </p>
          </div>
          <button className="h-12 px-6 bg-black text-white rounded-full hover:bg-zinc-900 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <Plus size={14} />
            <span>New Task</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {[
            { id: "all", label: "All Tasks" },
            { id: "todo", label: "To Do" },
            { id: "in-progress", label: "In Progress" },
            { id: "done", label: "Done" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${
                filter === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-zinc-600 hover:bg-gray-50"
              }`}
              style={filter !== tab.id ? { border: '1px solid #EEEEEE' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tasks Table */}
        <div className="bg-white rounded-[40px] overflow-hidden" style={{ border: '1px solid #EEEEEE' }}>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 w-16">
                  Status
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Task
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Project
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Priority
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Assignee
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, idx) => (
                <tr
                  key={task.id}
                  className={`hover:bg-gray-50/50 transition-colors cursor-pointer ${
                    task.status === "done" ? "opacity-60" : ""
                  }`}
                  style={{ borderTop: '1px solid #F9F9F9' }}
                >
                  <td className="px-10 py-6">{getStatusIcon(task.status)}</td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <CheckSquare size={18} className="text-zinc-400" />
                      <span
                        className={`text-sm font-light ${
                          task.status === "done"
                            ? "line-through text-zinc-500"
                            : "text-black"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-light text-zinc-600">
                      {task.project}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <span
                      className={`px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-full ${
                        task.priority === "High"
                          ? "bg-rose-50 text-rose-600"
                          : task.priority === "Medium"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-gray-50 text-zinc-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-xs font-light text-zinc-600">
                        {task.assignee[0]}
                      </div>
                      <span className="text-sm font-light text-zinc-600">
                        {task.assignee}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span
                      className={`text-sm font-light ${
                        task.dueDate === "Today" || task.dueDate === "Tomorrow"
                          ? "text-amber-600"
                          : "text-zinc-400"
                      }`}
                    >
                      {task.dueDate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Task Stats */}
        <div className="grid grid-cols-4 gap-8">
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <CheckSquare size={14} />
              <span>Total Tasks</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>{tasks.length}</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Circle size={14} />
              <span>To Do</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>
              {tasks.filter((t) => t.status === "todo").length}
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Circle size={14} />
              <span>In Progress</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>
              {tasks.filter((t) => t.status === "in-progress").length}
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <CheckCircle2 size={14} />
              <span>Done</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>
              {tasks.filter((t) => t.status === "done").length}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
