"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="competencias"
      eyebrow="Competências"
      title="Capacidades técnicas e profissionais"
      description="Um conjunto em crescimento de competências úteis para projetos académicos, estágios e ambientes técnicos."
      className="bg-slate-900"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group min-h-56 rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-lg transition hover:-translate-y-2 hover:border-cyan-300/60 hover:bg-slate-950"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-200 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="text-lg font-black text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{skill.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
