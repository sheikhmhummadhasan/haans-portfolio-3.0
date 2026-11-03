"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiFolder,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMessageSquare,
  FiSettings,
  FiMenu,
  FiX,
  FiLogOut,
  FiExternalLink,
} from "react-icons/fi";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/admin", icon: FiGrid },
    { name: "Projects", href: "/admin/projects", icon: FiFolder },
    { name: "Profile", href: "/admin/profile", icon: FiUser },
    { name: "Skills", href: "/admin/skills", icon: FiCode },
    { name: "Experience", href: "/admin/experience", icon: FiBriefcase },
    { name: "Messages", href: "/admin/messages", icon: FiMessageSquare },
    { name: "Settings", href: "/admin/settings", icon: FiSettings },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-[#111114] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link href="/admin" className="text-2xl font-bold tracking-tight">
            <span className="text-cyan-400">Admin</span>Panel.
          </Link>

          <button onClick={() => setOpen(false)} className="lg:hidden">
            <FiX size={23} />
          </button>
        </div>

        <div className="px-5 py-7">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Management
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto space-y-2 border-t border-white/10 p-5">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <FiExternalLink size={18} />
            View Portfolio
          </Link>
        </div>
      </aside>

      <div className="min-h-screen lg:ml-72">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#09090b]/90 px-5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg border border-white/10 p-2 text-gray-300 hover:bg-white/5 lg:hidden"
            >
              <FiMenu size={22} />
            </button>

            <div>
              <h2 className="font-semibold">Admin Dashboard</h2>
              <p className="text-xs text-gray-500">Manage your portfolio</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 font-bold text-cyan-400">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Administrator</p>
              <p className="text-xs text-gray-500">Portfolio Owner</p>
            </div>
          </div>
        </header>

        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;