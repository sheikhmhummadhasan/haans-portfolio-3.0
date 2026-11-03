"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const links = [
  { name: "About", path: "/about" },
  { name: "Skill", path: "/skill" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Review", path: "/review" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const drawer = useRef(null);

  const closeMenu = () => drawer.current?.close();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-neutral-950">
        <nav
          aria-label="Main navigation"
          className="flex w-full items-center justify-between px-6 py-5 backdrop-blur-xl md:px-12 lg:px-16"
        >
          <Link
            href="/"
            className="enter-left font-display text-lg font-bold"
          >
            HS.
          </Link>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={pathname === link.path ? "page" : undefined}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                className={`enter-top capitalize transition hover:opacity-100 ${
                  pathname === link.path
                    ? "font-semibold opacity-100"
                    : "opacity-70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="enter-right flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition hover:scale-105"
            >
              Hire me
            </Link>

            <button
              type="button"
              onClick={() => drawer.current?.showModal()}
              aria-label="Open navigation menu"
              className="grid h-10 w-10 place-items-center rounded-md transition hover:bg-black/5 md:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <dialog
        ref={drawer}
        aria-label="Mobile navigation"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="mobile-drawer fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-72 max-w-[85vw] border-0 bg-[#F5F2EB] p-0 text-neutral-950 shadow-xl"
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-display text-lg font-bold"
            >
              HS.
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="grid h-10 w-10 place-items-center rounded-md hover:bg-black/5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 space-y-2">
            {links.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                className={`drawer-link block rounded-md px-3 py-3 text-lg ${
                  pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-black/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-auto rounded-full bg-primary px-5 py-3 text-center text-sm text-primary-foreground"
          >
            Hire me
          </Link>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;