"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CircuitBoard, Download, Sparkles, Zap } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen px-4 pt-[5rem] transition-colors sm:px-6 sm:pt-[6rem] lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(168,85,247,0.25),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(217,70,239,0.18),transparent_25%),linear-gradient(135deg,#ffffff_0%,#f6efff_42%,#ede9fe_100%)] dark:bg-[radial-gradient(circle_at_20%_12%,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.22),transparent_24%),linear-gradient(135deg,#12051f_0%,#1e0b33_48%,#2e1065_100%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 py-4 lg:grid-cols-[1.1fr_0.8fr] lg:py-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-4 py-2 text-sm font-black text-violet-700 shadow-sm dark:border-violet-400/50 dark:bg-white/10 dark:text-violet-100">
            <Sparkles size={16} aria-hidden />
            Portfólio de Engenharia Electrotécnica
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-violet-950 dark:text-white sm:text-5xl lg:text-7xl">
            Michel Domingos Nhampossa
          </h1>
          <p className="mt-5 text-xl font-black text-violet-700 dark:text-violet-200 sm:text-2xl">
            Estudante de Engenharia Electrotécnica
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 dark:text-violet-100/80 sm:text-lg">
            Jovem moçambicano focado em energia, sistemas elétricos, automação e
            inovação. Une disciplina académica, curiosidade técnica e vontade de
            contribuir para soluções modernas na área elétrica e industrial.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3 text-sm font-black text-white shadow-[0_18px_60px_rgba(124,58,237,0.32)] transition hover:-translate-y-1 hover:bg-violet-800"
            >
              Ver Projetos
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-300/70 bg-white px-6 py-3 text-sm font-black text-violet-800 shadow-sm transition hover:-translate-y-1 hover:bg-violet-50 dark:border-violet-400/50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Contactar
              <Download size={18} aria-hidden />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/75 px-4 py-2 text-sm font-black text-violet-800 shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-violet-400/50 dark:bg-white/10 dark:text-violet-50 dark:hover:bg-white/20"
                >
                  <Icon size={17} aria-hidden />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs self-center sm:max-w-sm lg:max-w-sm"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.75rem] border border-violet-300/70 bg-white/55 p-3 shadow-2xl shadow-violet-950/15 backdrop-blur-xl transition-colors dark:border-violet-400/50 dark:bg-white/10 sm:p-4">
            <div className="relative h-[300px] overflow-hidden rounded-[2.25rem] bg-[#f8f5ff] transition-colors dark:bg-[#12051f] sm:h-[360px] lg:h-[420px]">
              <Image
                src="/perfil2.png"
                alt="Foto de Michel Domingos Nhampossa"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                { label: "Energia", icon: Zap },
                { label: "Tecnologia", icon: CircuitBoard },
                { label: "Inovação", icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-violet-300/70 bg-[#f8f5ff] p-2.5 transition-colors dark:border-violet-400/50 dark:bg-[#12051f]"
                  >
                    <Icon className="mx-auto mb-1 text-violet-700 dark:text-violet-200" size={18} aria-hidden />
                    <p className="text-xs font-black text-violet-800 dark:text-violet-50">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
