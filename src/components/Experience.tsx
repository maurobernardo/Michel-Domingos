"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { RadioTower, Tv } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "./Section";

const experiences = [
  {
    title: "Visita de Estudo à TVA",
    subtitle: "Televisão e Rádio Académica de Moçambique",
    summary:
      "Os estudantes realizaram uma visita de estudo à TVA, onde conheceram equipamentos e processos usados na produção e transmissão de conteúdos audiovisuais. Foram apresentados equipamentos analógicos, que marcaram a história da radiodifusão, e tecnologias digitais utilizadas atualmente. A experiência fortaleceu a compreensão do funcionamento da televisão e da rádio, contribuindo para a formação académica e profissional.",
    icon: Tv,
    images: ["/TVA/tva6.jpeg", "/TVA/tva4.jpeg", "/TVA/tva5.jpeg"],
  },
  {
    title: "Experiência Prática em Telecomunicações",
    subtitle: "Ambiente real de produção e transmissão televisiva",
    summary:
      "Durante uma visita de estudo à Televisão de Moçambique, tive contacto direto com equipamentos profissionais utilizados em sistemas de produção e transmissão televisiva. A experiência permitiu compreender sistemas eletrónicos reais, desde a configuração dos equipamentos até ao processo de transmissão do sinal, reforçando o meu interesse por Engenharia Electrónica e Telecomunicações.",
    icon: RadioTower,
    images: ["/TVM/tvm1.jpeg", "/TVM/tvm2.jpeg", "/TVM/tvm3.jpeg"],
  },
];

type ExperienceCardProps = {
  experience: (typeof experiences)[number];
  index: number;
};

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const Icon = experience.icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((value) => (value + 1) % experience.images.length);
    }, 2600 + index * 400);

    return () => window.clearInterval(interval);
  }, [experience.images.length, index]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.62, delay: index * 0.08 }}
      className="grid gap-5 rounded-[2rem] border border-violet-300/70 bg-white p-5 shadow-2xl shadow-violet-950/10 transition hover:-translate-y-1 dark:border-violet-400/50 dark:bg-white/10 md:grid-cols-[0.82fr_1.18fr] md:p-6"
    >
      <div className="relative min-h-72 overflow-hidden rounded-[1.5rem] bg-violet-100 dark:bg-white/10">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={experience.images[activeImage]}
            initial={{ opacity: 0, rotateY: -28, x: 42, scale: 0.92 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 24, x: -42, scale: 0.92 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 rounded-[1.5rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={experience.images[activeImage]}
              alt={`${experience.title} - imagem ${activeImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur dark:bg-violet-950/70">
          {experience.images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(imageIndex)}
              className={`h-2.5 rounded-full transition-all ${
                activeImage === imageIndex ? "w-8 bg-violet-700" : "w-2.5 bg-violet-300"
              }`}
              aria-label={`Mostrar imagem ${imageIndex + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-white/10 dark:text-violet-100">
          <Icon size={28} aria-hidden />
        </div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-300">
          {experience.subtitle}
        </p>
        <h3 className="mt-3 text-2xl font-black text-violet-950 dark:text-white sm:text-3xl">
          {experience.title}
        </h3>
        <p className="mt-4 leading-8 text-slate-600 dark:text-violet-100/75">
          {experience.summary}
        </p>
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiência"
      title="Vivências reais em televisão, rádio e telecomunicações"
      description="Duas experiências académicas apresentadas com imagens rotativas, criando uma leitura mais dinâmica e visual."
      className="bg-white transition-colors dark:bg-[#170725]"
    >
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.title} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}
