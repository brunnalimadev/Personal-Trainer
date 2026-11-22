export type TrialRequest = { nome: string; objetivo: string; dia: string; horario: string };

export function precoLabel(preco: string | null | undefined): string {
  return preco && preco.trim() ? preco : "Sob consulta";
}

export function buildTrialMessage(r: TrialRequest, profissional: string): string {
  return [
    `Olá, ${profissional}! Gostaria de solicitar uma aula experimental.`,
    `Nome: ${r.nome.trim()}`,
    `Objetivo: ${r.objetivo}`,
    `Dia preferido: ${r.dia.trim()}`,
    `Horário preferido: ${r.horario.trim()}`,
  ].join("\n");
}

/** Retorna null quando não há número válido configurado. */
export function whatsappUrl(numero: string, mensagem: string): string | null {
  const digits = numero.replace(/\D/g, "");
  if (digits.length < 10) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(mensagem)}`;
}
