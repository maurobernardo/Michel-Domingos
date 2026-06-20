"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Pronto para conversar sobre oportunidades"
      description="Aberto a estágios, projetos académicos, colaboração técnica e oportunidades na área elétrica e industrial."
      className="bg-white transition-colors dark:bg-[#170725]"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-violet-300/70 bg-gradient-to-br from-violet-950 to-violet-700 p-7 text-white shadow-2xl shadow-violet-950/20 dark:border-violet-400/50"
        >
          <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-fuchsia-400/25 blur-3xl" />
          <h3 className="relative text-2xl font-black">Informações de contacto</h3>
          <p className="relative mt-3 leading-7 text-violet-100">
            Use estes canais para solicitar portfólio, marcar uma conversa ou
            partilhar uma oportunidade de estágio.
          </p>
          <div className="relative mt-8 grid gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-[1.75rem] border border-violet-300/60 bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-white hover:text-violet-950 dark:border-violet-400/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-violet-700">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm opacity-80">{item.label}</span>
                    <span className="break-words font-black">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] border border-violet-300/70 bg-[#f8f5ff] p-6 shadow-xl shadow-violet-950/8 dark:border-violet-400/50 dark:bg-white/10 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Nome completo
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Email
              <input
                type="email"
                name="email"
                placeholder="email@exemplo.com"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Telefone / WhatsApp
              <input
                type="tel"
                name="phone"
                placeholder="+258 852 390 824"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Tipo de contacto
              <select
                name="contactType"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Estágio</option>
                <option>Projeto académico</option>
                <option>Colaboração técnica</option>
                <option>Outra oportunidade</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Empresa / Instituição
              <input
                type="text"
                name="organization"
                placeholder="Nome da organização"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-violet-950 dark:text-white">
              Assunto
              <input
                type="text"
                name="subject"
                placeholder="Ex: Oportunidade de estágio"
                className="rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-black text-violet-950 dark:text-white">
            Mensagem
            <textarea
              name="message"
              rows={7}
              placeholder="Escreva a sua mensagem..."
              className="resize-none rounded-2xl border border-violet-300/70 bg-white px-4 py-3 text-violet-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </label>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(124,58,237,0.28)] transition hover:-translate-y-1 hover:bg-violet-800 sm:w-auto"
          >
            Enviar mensagem
            <Send size={18} aria-hidden />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
