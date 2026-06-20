"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com apresentação mais profissional"
      description="Cards mais claros, escaneáveis e bonitos para mostrar ideias de engenharia com aparência pronta para empresas e professores."
      className="bg-[#f8f5ff] transition-colors dark:bg-[#12051f]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-violet-300/70 bg-white p-6 shadow-xl shadow-violet-950/8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-950/12 dark:border-violet-400/50 dark:bg-white/10 sm:p-7"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-200/60 blur-2xl transition group-hover:bg-fuchsia-200/70" />
              <div className="relative mb-6 flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-700 to-fuchsia-500 text-white shadow-lg shadow-violet-700/20">
                  <Icon size={28} aria-hidden />
                </div>
                <span className="rounded-full border border-violet-300/70 bg-violet-50 px-3 py-1 text-xs font-black text-violet-700 dark:border-violet-400/50">
                  Projeto
                </span>
              </div>
              <h3 className="relative text-2xl font-black text-violet-950 dark:text-white">{project.title}</h3>
              <p className="relative mt-4 leading-7 text-slate-600 dark:text-violet-100/75">{project.description}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.concepts.map((concept) => (
                  <span
                    key={concept}
                    className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800"
                  >
                    {concept}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-violet-950 px-4 py-2 text-sm font-black text-white transition group-hover:gap-3 group-hover:bg-violet-700"
              >
                Ver detalhes
                <ArrowUpRight size={18} aria-hidden />
              </a>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
