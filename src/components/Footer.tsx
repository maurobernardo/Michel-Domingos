import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-violet-200 bg-violet-950 px-4 py-10 text-white transition-colors dark:border-white/10 dark:bg-[#0c0314] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black">Michel Domingos Nhampossa</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-violet-200">
            Estudante de Engenharia Electrotécnica, focado em energia, tecnologia
            e soluções técnicas com impacto profissional.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-bold text-violet-100 transition hover:bg-white hover:text-violet-950"
              >
                <Icon size={15} aria-hidden />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-violet-300">
        © 2026 Michel Domingos Nhampossa. Todos os direitos reservados.
      </div>
    </footer>
  );
}
