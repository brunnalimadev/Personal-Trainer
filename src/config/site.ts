// Dados editáveis do site. Altere aqui — nenhum outro arquivo precisa mudar.
import hero from "@/assets/treino-hero.jpg";
import avanco from "@/assets/treino-avanco.jpg";
import kettlebell from "@/assets/treino-kettlebell.jpg";
import cordas from "@/assets/treino-cordas.jpg";

export const site = {
  nome: "Bruna de Lima",
  titulo: "Personal Trainer",
  formacao: ["Bacharelado em Educação Física", "Licenciatura em Educação Física"],
  /** WhatsApp só com dígitos, com DDI e DDD (ex.: "5511999999999"). Vazio = sem contato configurado. */
  whatsapp: "",
  cidade: "",
};

/** Fotos ilustrativas de banco/IA. Não retratam a Bruna. Substitua por fotos reais em src/assets. */
export const fotos = {
  hero: { src: hero, alt: "Mulher realizando agachamento com barra em academia escura (imagem ilustrativa)", w: 1600, h: 1008 },
  galeria: [
    { src: avanco, alt: "Avanço com halteres (imagem ilustrativa)", legenda: "Força de membros inferiores", w: 800, h: 1008 },
    { src: kettlebell, alt: "Mãos com magnésio segurando kettlebell (imagem ilustrativa)", legenda: "Pegada e potência", w: 800, h: 1008 },
    { src: cordas, alt: "Treino com cordas navais (imagem ilustrativa)", legenda: "Condicionamento", w: 800, h: 1008 },
  ],
};

/** preco: null exibe "Sob consulta". Ex.: preco: "R$ 300/mês". */
export type Pacote = { nome: string; descricao: string; itens: string[]; preco: string | null };
export const pacotes: Pacote[] = [
  { nome: "Avulsa", descricao: "Uma aula para experimentar ou complementar sua rotina.", itens: ["Sessão individual", "Orientação técnica"], preco: null },
  { nome: "Mensal 2x", descricao: "Duas sessões por semana com evolução acompanhada.", itens: ["8 sessões/mês", "Planejamento de treino", "Reavaliação periódica"], preco: null },
  { nome: "Mensal 3x", descricao: "Três sessões semanais para quem quer acelerar resultados.", itens: ["12 sessões/mês", "Planejamento de treino", "Reavaliação periódica"], preco: null },
];

export const objetivos = ["Emagrecimento", "Hipertrofia", "Condicionamento", "Saúde e qualidade de vida", "Outro"];
