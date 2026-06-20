"use client";

import { Menu, Moon, Send, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    window.requestAnimationFrame(() => setIsDark(shouldUseDark));
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violet-200/70 bg-white/80 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#180826]/85">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-700 to-fuchsia-500 text-sm font-black text-white shadow-[0_18px_45px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5"
          aria-label="Ir para o início"
        >
          MD
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-violet-200 bg-violet-50/80 p-1 dark:border-white/10 dark:bg-white/5 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-violet-700 transition hover:bg-white hover:text-violet-950 hover:shadow-sm dark:text-violet-100 dark:hover:bg-white dark:hover:text-violet-950"
              >
                <Icon size={15} aria-hidden />
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-800 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-violet-50 dark:hover:bg-white/20"
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
          </button>

          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-violet-700 px-5 py-3 text-sm font-black text-white shadow-[0_14px_35px_rgba(124,58,237,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-800 md:flex"
          >
            <Send size={16} aria-hidden />
            Contactar
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-800 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-violet-100 bg-white px-4 py-4 shadow-xl shadow-violet-950/10 dark:border-white/10 dark:bg-[#180826] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-violet-800 transition hover:bg-violet-50 dark:text-violet-50 dark:hover:bg-white/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-700 dark:bg-white/10 dark:text-violet-100">
                    <Icon size={18} aria-hidden />
                  </span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
