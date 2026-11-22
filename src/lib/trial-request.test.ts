import { describe, expect, it } from "vitest";
import { buildTrialMessage, precoLabel, whatsappUrl } from "./trial-request";

describe("aula experimental", () => {
  it("mostra 'Sob consulta' quando o preço não foi fornecido", () => {
    expect(precoLabel(null)).toBe("Sob consulta");
    expect(precoLabel("  ")).toBe("Sob consulta");
    expect(precoLabel("R$ 300")).toBe("R$ 300");
  });
  it("sem número configurado não gera link de WhatsApp", () => {
    expect(whatsappUrl("", "oi")).toBeNull();
  });
  it("com número gera link wa.me com a mensagem", () => {
    const msg = buildTrialMessage({ nome: "Ana", objetivo: "Hipertrofia", dia: "Segunda", horario: "7h" }, "Bruna");
    expect(msg).toContain("Nome: Ana");
    expect(whatsappUrl("+55 (11) 99999-9999", msg)).toBe(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`);
  });
});
