"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, School } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    title: "Licenciatura em Engenharia Eletrónica",
    meta: "Universidade Jean Piaget da Beira",
    detail: "Formação superior com base em sistemas elétricos, eletrónica, energia e práticas laboratoriais.",
    icon: GraduationCap,
  },
  {
    title: "3º ano académico",
    meta: "Percurso em desenvolvimento",
    detail: "Fase de consolidação técnica, projetos académicos e preparação para oportunidades de estágio.",
    icon: CalendarDays,
  },
  {
    title: "Aprendizagem aplicada",
    meta: "Laboratórios e estudos práticos",
    detail: "Experiência académica orientada para medições, circuitos, instalações e resolução de problemas.",
    icon: School,
  },
];

export function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="Formação Académica"
      title="Base académica sólida em engenharia"
      className="bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-cyan-300/30 sm:block" />
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl sm:ml-16"
              >
                <div className="absolute -left-16 top-6 hidden h-12 w-12 place-items-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.35)] sm:grid">
                  <Icon size={24} aria-hidden />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  {item.meta}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
