import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { site, objetivos } from "@/config/site";
import { buildTrialMessage, whatsappUrl } from "@/lib/trial-request";
import { PageTitle } from "@/components/site-shell";

export const Route = createFileRoute("/aula-experimental")({
  head: () => ({
    meta: [
      { title: "Aula experimental — Personal Trainer" },
      { name: "description", content: "Solicite uma aula experimental de personal training." },
      { property: "og:title", content: "Aula experimental — Personal Trainer" },
      { property: "og:description", content: "Envie seu pedido de aula experimental." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AulaExperimental,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(80),
  objetivo: z.string().min(1, "Escolha um objetivo."),
  dia: z.string().trim().min(2, "Informe o dia preferido.").max(60),
  horario: z.string().trim().min(2, "Informe o horário preferido.").max(60),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "mt-2 w-full border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function AulaExperimental() {
  const [errors, setErrors] = useState<Errors>({});
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const temWhats = whatsappUrl(site.whatsapp, "x") !== null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      setStatus("Corrija os campos destacados.");
      return;
    }
    setErrors({});
    const msg = buildTrialMessage(r.data, site.nome);
    setMensagem(msg);
    const url = whatsappUrl(site.whatsapp, msg);
    if (url) {
      window.open(url, "_blank", "noopener");
      setStatus("Abrimos o WhatsApp com sua mensagem. O pedido só é enviado quando você tocar em enviar lá.");
    } else {
      setStatus("Pedido montado abaixo. Ainda não há contato configurado, então nada foi enviado.");
    }
  }

  async function copiar() {
    if (!mensagem) return;
    try {
      await navigator.clipboard.writeText(mensagem);
      setStatus("Pedido copiado. Cole e envie para a personal trainer pelo canal de sua preferência.");
    } catch {
      setStatus("Não foi possível copiar automaticamente. Selecione o texto abaixo e copie.");
    }
  }

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-erro`} className="mt-1 text-sm text-destructive">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-erro` : undefined });

  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <PageTitle kicker="Primeiro passo" title="Aula experimental" />
      <p className="mb-8 text-muted-foreground">
        Preencha seu pedido. {temWhats ? "Ele será aberto no WhatsApp para você enviar." : "Como o contato ainda não foi configurado, você poderá copiar o pedido."} Este formulário não confirma reserva: a personal trainer responderá sobre disponibilidade.
      </p>
      <form noValidate onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="font-bold uppercase tracking-wider">Nome</label>
          <input id="nome" name="nome" autoComplete="name" required className={field} {...aria("nome")} />
          {err("nome")}
        </div>
        <div>
          <label htmlFor="objetivo" className="font-bold uppercase tracking-wider">Objetivo</label>
          <select id="objetivo" name="objetivo" required defaultValue="" className={field} {...aria("objetivo")}>
            <option value="" disabled>Selecione</option>
            {objetivos.map((o) => <option key={o}>{o}</option>)}
          </select>
          {err("objetivo")}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="dia" className="font-bold uppercase tracking-wider">Dia preferido</label>
            <input id="dia" name="dia" placeholder="Ex.: terça ou quinta" required className={field} {...aria("dia")} />
            {err("dia")}
          </div>
          <div>
            <label htmlFor="horario" className="font-bold uppercase tracking-wider">Horário preferido</label>
            <input id="horario" name="horario" placeholder="Ex.: 7h às 9h" required className={field} {...aria("horario")} />
            {err("horario")}
          </div>
        </div>
        <button type="submit" className="w-full bg-primary px-6 py-4 font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90">
          {temWhats ? "Abrir no WhatsApp" : "Montar pedido"}
        </button>
      </form>
      <p role="status" aria-live="polite" className="mt-6 font-semibold">{status}</p>
      {mensagem && (
        <div className="mt-4 border border-border bg-card p-6">
          <pre className="whitespace-pre-wrap font-sans text-sm">{mensagem}</pre>
          <button type="button" onClick={copiar} className="mt-4 border border-primary px-4 py-2 font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground">Copiar pedido</button>
        </div>
      )}
    </section>
  );
}
