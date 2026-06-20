"use client";

import { motion } from "framer-motion";
import { educationCards, profileCards } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre + Formação"
      title="Perfil técnico com base académica sólida"
      description="A formação académica fica integrada aqui para deixar o portfólio mais direto, limpo e fácil de ler no telemóvel."
      className="bg-white transition-colors dark:bg-[#170725]"
    >
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative self-start overflow-hidden rounded-[2rem] border border-violet-300/70 bg-gradient-to-br from-violet-950 to-violet-700 p-6 text-white shadow-2xl shadow-violet-950/20 dark:border-violet-400/50 sm:p-7"
        >
          <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-fuchsia-400/25 blur-3xl" />
          <h3 className="relative text-2xl font-black">Sobre Michel</h3>
          <p className="relative mt-4 text-base leading-8 text-violet-50">
            Jovem moçambicano natural da Província de Inhambane, estudante do
            3º ano de Engenharia Electrotécnica na Universidade Jean Piaget da
            Beira, apaixonado por energia, tecnologia, sistemas elétricos,
            automação e inovação.
          </p>
        </motion.article>

        <div className="grid gap-4 sm:grid-cols-2">
          {profileCards.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group rounded-[1.5rem] border border-violet-300/70 bg-white p-5 shadow-lg shadow-violet-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10 dark:border-violet-400/50 dark:bg-white/10"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white dark:bg-white/10 dark:text-violet-100">
                  <Icon size={22} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-violet-200/70">{fact.label}</p>
                <p className="mt-1 text-lg font-black text-violet-950 dark:text-white">{fact.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {educationCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-violet-300/70 bg-violet-50/70 p-6 shadow-lg shadow-violet-950/5 transition hover:-translate-y-1 hover:bg-white dark:border-violet-400/50 dark:bg-white/10 dark:hover:bg-white/15"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-violet-700 shadow-sm dark:bg-white/10 dark:text-violet-100">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="text-xl font-black text-violet-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-violet-100/75">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
