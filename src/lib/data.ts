import {
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  BrainCircuit,
  Cable,
  Camera,
  CircuitBoard,
  Cpu,
  FolderKanban,
  GraduationCap,
  Handshake,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlugZap,
  ScrollText,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Skill = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  concepts: string[];
  icon: LucideIcon;
};

export type Certificate = {
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
};

export const phoneNumber = "852390824";
export const emailAddress = "micheldomingosnhampossa@gmail.com";

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Sobre", href: "#sobre", icon: UserRound },
  { label: "Projetos", href: "#projetos", icon: FolderKanban },
  { label: "Experiência", href: "#experiencia", icon: Handshake },
  { label: "Certificados", href: "#certificados", icon: Award },
  { label: "Contacto", href: "#contacto", icon: Mail },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    value: "Perfil LinkedIn",
    href: "https://www.linkedin.com/in/micheldomingosnhampossa",
    icon: BriefcaseBusiness,
  },
  {
    label: "Instagram",
    value: "Perfil Instagram",
    href: "https://www.instagram.com/micheldomingosnhampossa",
    icon: Camera,
  },
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: phoneNumber,
    href: `https://wa.me/258${phoneNumber}`,
    icon: MessageCircle,
  },
];

export const skills: Skill[] = [
  {
    title: "Sistemas elétricos",
    description: "Compreensão de redes, cargas, proteção e distribuição de energia.",
    icon: Zap,
  },
  {
    title: "Circuitos elétricos",
    description: "Análise de circuitos, medições, esquemas e comportamento elétrico.",
    icon: CircuitBoard,
  },
  {
    title: "Instalações elétricas",
    description: "Noções de projeto, dimensionamento e organização de instalações.",
    icon: Cable,
  },
  {
    title: "Eletrónica básica",
    description: "Fundamentos de componentes, sensores, placas e prototipagem.",
    icon: Cpu,
  },
  {
    title: "Automação",
    description: "Interesse por controlo, sensores, lógica e processos automatizados.",
    icon: Settings,
  },
  {
    title: "Manutenção elétrica",
    description: "Diagnóstico, prevenção de falhas e cuidado com equipamentos.",
    icon: Wrench,
  },
  {
    title: "Resolução técnica",
    description: "Pensamento analítico para identificar causas e propor soluções.",
    icon: BrainCircuit,
  },
  {
    title: "Trabalho em equipa",
    description: "Colaboração em aulas práticas, estudos e projetos académicos.",
    icon: Users,
  },
  {
    title: "Comunicação",
    description: "Clareza para apresentar ideias, resultados e decisões técnicas.",
    icon: Mail,
  },
  {
    title: "Aprendizagem contínua",
    description: "Postura curiosa para evoluir com tecnologia, normas e ferramentas.",
    icon: BookOpenCheck,
  },
];

export const profileCards = [
  { label: "Nacionalidade", value: "Moçambique", icon: MapPin },
  { label: "Naturalidade", value: "Província de Inhambane", icon: UserRound },
  { label: "Idade", value: "20 anos", icon: Sparkles },
  { label: "Área", value: "Engenharia Electrotécnica", icon: Zap },
];

export const educationCards = [
  {
    title: "Licenciatura em Engenharia Electrotécnica",
    description: "Percurso académico focado em energia, sistemas elétricos, circuitos, eletrónica e automação.",
    icon: GraduationCap,
  },
  {
    title: "Universidade Jean Piaget da Beira",
    description: "Formação superior em ambiente académico orientado para conhecimento técnico e prática laboratorial.",
    icon: ScrollText,
  },
  {
    title: "3º ano académico",
    description: "Fase de consolidação técnica e preparação para estágios, projetos e oportunidades profissionais.",
    icon: BookOpenCheck,
  },
];

export const projects: Project[] = [
  {
    title: "Sistema de Iluminação Residencial Eficiente",
    description:
      "Proposta de iluminação económica, segura e elegante para residências, com foco em conforto visual e redução de consumo.",
    concepts: ["Eficiência energética", "LED", "Dimensionamento", "Segurança"],
    icon: Lightbulb,
  },
  {
    title: "Projeto de Instalação Elétrica para Edifício",
    description:
      "Modelo académico de distribuição elétrica para edifício, considerando circuitos, cargas, proteção e organização técnica.",
    concepts: ["Quadros elétricos", "Disjuntores", "Cargas", "Esquemas"],
    icon: PlugZap,
  },
  {
    title: "Protótipo de Automação com Sensores",
    description:
      "Protótipo conceptual para controlo automático com sensores, lógica simples e resposta inteligente a condições do ambiente.",
    concepts: ["Sensores", "Automação", "Controlo", "Prototipagem"],
    icon: Cpu,
  },
  {
    title: "Estudo de Eficiência Energética",
    description:
      "Análise de consumo e identificação de melhorias para tornar sistemas elétricos mais sustentáveis e eficientes.",
    concepts: ["Auditoria", "Energia", "Medição", "Otimização"],
    icon: Sparkles,
  },
];

export const certificates: Certificate[] = [
  {
    title: "Certificado em Sistemas Elétricos",
    description: "Espaço preparado para adicionar formações técnicas complementares.",
    status: "Certificado em breve",
    icon: Award,
  },
  {
    title: "Certificado em Segurança Elétrica",
    description: "Preparado para cursos sobre normas, boas práticas e segurança.",
    status: "Em preparação",
    icon: ShieldCheck,
  },
  {
    title: "Certificado em Automação",
    description: "Área de interesse para aprendizagem prática e futura atuação industrial.",
    status: "Próximo objetivo",
    icon: GraduationCap,
  },
];

export const contactLinks = [
  { label: "Telefone", value: phoneNumber, href: `tel:+258${phoneNumber}`, icon: Phone },
  { label: "WhatsApp", value: phoneNumber, href: `https://wa.me/258${phoneNumber}`, icon: MessageCircle },
  { label: "Email", value: emailAddress, href: `mailto:${emailAddress}`, icon: Mail },
  { label: "LinkedIn", value: "Perfil profissional", href: "https://www.linkedin.com/in/micheldomingosnhampossa", icon: BriefcaseBusiness },
  { label: "Instagram", value: "Perfil social", href: "https://www.instagram.com/micheldomingosnhampossa", icon: Camera },
  { label: "Localização", value: "Moçambique", href: "#contacto", icon: MapPin },
];
