"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import { Section } from "./Section";

export function Certificates() {
  return (
    <Section
      id="certificados"
      eyebrow="Certificados"
      title="Espaço preparado para novas conquistas"
      description="A secção fica pronta para receber certificados reais, mantendo visual profissional mesmo enquanto o conteúdo está em construção."
      className="bg-[#f8f5ff] transition-colors dark:bg-[#12051f]"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {certificates.map((certificate, index) => {
          const Icon = certificate.icon;
          return (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-violet-300/70 bg-white p-6 shadow-lg shadow-violet-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10 dark:border-violet-400/50 dark:bg-white/10"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                <Icon size={28} aria-hidden />
              </div>
              <p className="mb-3 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">
                {certificate.status}
              </p>
              <h3 className="text-xl font-black text-violet-950 dark:text-white">{certificate.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-violet-100/75">{certificate.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
