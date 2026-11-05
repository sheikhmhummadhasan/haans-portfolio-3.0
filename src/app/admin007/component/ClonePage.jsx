"use client";

import {
  FiFolder,
  FiEye,
  FiMessageSquare,
  FiCode,
  FiArrowUpRight,
  FiPlus,
  FiExternalLink,
  FiClock,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

import Link from "next/link";

import { useEffect, useState } from "react";

const projects = [
  {
    name: "HairLoop",
    category: "Full Stack Development",
    status: "Completed",
    date: "Oct 28, 2026",
    color: "bg-purple-500/15 text-purple-400",
  },
  {
    name: "StudyNook",
    category: "Web Application",
    status: "Completed",
    date: "Oct 25, 2026",
    color: "bg-cyan-500/15 text-cyan-400",
  },
  {
    name: "Wanderlust",
    category: "Travel Platform",
    status: "In Progress",
    date: "Oct 20, 2026",
    color: "bg-amber-500/15 text-amber-400",
  },
];

const messages = [
  {
    name: "John Smith",
    email: "john@example.com",
    message: "I am interested in working with you...",
    time: "10 minutes ago",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    message: "Can you build a website for my business?",
    time: "2 hours ago",
  },
  {
    name: "Michael",
    email: "michael@example.com",
    message: "Your portfolio looks amazing!",
    time: "Yesterday",
  },
];

const ClonePage = ({res}) => {

  const [count, setCount] = useState(0);

  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+3 this month",
      icon: FiFolder,
    },
    {
      title: "Portfolio Views",
      value: count,
      change: "+18.5% this month",
      icon: FiEye,
    },
    {
      title: "Total Messages",
      value: res.length,
      change: "5 unread messages",
      icon: FiMessageSquare,
    },
    {
      title: "Skills",
      value: "15",
      change: "Across 4 categories",
      icon: FiCode,
    },
  ];

  useEffect(() => {
    fetch("/api/visitor/count")
      .then((res) => res.json())
      .then((data) => setCount(data.totalVisitors));
  }, []);

  return (
    <div className="space-y-8">
      {/* <VisitorCount /> */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-sm text-cyan-400">Welcome Back 👋</p>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Welcome to your portfolio dashboard.
          </p>
        </div>

        <Link
          href="/admin/projects"
          className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
        >
          <FiPlus size={18} />
          Add New Project
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#111114] p-5 transition hover:border-cyan-500/30"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon size={21} />
                </div>

                <FiArrowUpRight className="text-gray-500" size={20} />
              </div>

              <p className="mt-5 text-sm text-gray-400">{item.title}</p>

              <h2 className="mt-1 text-3xl font-bold">{item.value}</h2>

              <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <FiTrendingUp className="text-emerald-400" />
                {item.change}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111114] xl:col-span-2">
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div>
              <h2 className="font-semibold">Recent Projects</h2>
              <p className="mt-1 text-xs text-gray-500">
                Your latest portfolio projects
              </p>
            </div>

            <Link
              href="/admin/projects"
              className="flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300"
            >
              View All <FiArrowUpRight />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs text-gray-500">
                  <th className="px-5 py-4 font-medium">Project</th>
                  <th className="px-5 py-4 font-medium">Category</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.name}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-5 py-5 text-sm font-medium">
                      {project.name}
                    </td>

                    <td className="px-5 py-5 text-xs text-gray-400">
                      {project.category}
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`whitespace-nowrap rounded-full px-3 py-1 text-xs ${project.color}`}
                      >
                        {project.status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-xs text-gray-500">
                      {project.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111114]">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-semibold">Quick Actions</h2>
            <p className="mt-1 text-xs text-gray-500">
              Manage your portfolio quickly
            </p>
          </div>

          <div className="space-y-3 p-5">
            <Link
              href="/admin/projects"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/5"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                <FiPlus size={19} />
              </div>
              <div>
                <p className="text-sm font-medium">Add Project</p>
                <p className="mt-1 text-xs text-gray-500">
                  Create a new project
                </p>
              </div>
            </Link>

            <Link
              href="/admin/profile"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/5"
            >
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                <FiExternalLink size={19} />
              </div>
              <div>
                <p className="text-sm font-medium">Edit Profile</p>
                <p className="mt-1 text-xs text-gray-500">
                  Update your information
                </p>
              </div>
            </Link>

            <Link
              href="/admin007/messages"
              className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/5"
            >
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                <FiMessageSquare size={19} />
              </div>
              <div>
                <p className="text-sm font-medium">View Messages</p>
                <p className="mt-1 text-xs text-gray-500">
                  Check contact messages
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111114]">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <h2 className="font-semibold">Recent Messages</h2>
            <p className="mt-1 text-xs text-gray-500">
              Latest messages from visitors
            </p>
          </div>

          <Link
            href="/admin007/messages"
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300"
          >
            View All →
          </Link>
        </div>

        <div className="divide-y divide-white/5">
          {res.map((message) => (
            <div
              key={message._id}
              className="flex flex-col justify-between gap-3 p-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 font-semibold text-cyan-400">
                  {message.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium">{message.name}</h3>
                  <p className="text-xs text-gray-500">{message.email}</p>
                  <p className="mt-2 truncate text-xs text-gray-400">
                    {message.message}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-xs text-gray-500 sm:justify-end">
                <FiClock size={14} />
                {message.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold">Your portfolio is looking good!</h3>
          <p className="mt-1 text-sm text-gray-400">
            Keep your projects and profile information updated.
          </p>
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          Preview Portfolio <FiExternalLink />
        </Link>
      </div>
    </div>
  );
};

export default ClonePage;
