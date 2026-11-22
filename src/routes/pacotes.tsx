import { createFileRoute, Link } from "@tanstack/react-router";
import { pacotes } from "@/config/site";
import { precoLabel } from "@/lib/trial-request";
import { PageTitle } from "@/components/site-shell";

export const Route = createFileRoute("/pacotes")({
  head: () => ({
    meta: [
      { title: "Pacotes — Personal Trainer" },
      { name: "description", content: "Pacotes de treino personalizado: avulsa e planos mensais." },
      { property: "og:title", content: "Pacotes de treino — Personal Trainer" },
      { property: "og:description", content: "Conheça os pacotes de treino personalizado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pacotes,
});

function Pacotes() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <PageTitle kicker="Pacotes" title="Escolha seu ritmo" />
      <div className="grid gap-6 md:grid-cols-3">
        {pacotes.map((p) => (
          <article key={p.nome} className="flex flex-col border border-border bg-card p-8">
            <h2 className="font-display text-3xl uppercase">{p.nome}</h2>
            <p className="mt-2 text-muted-foreground">{p.descricao}</p>
            <ul className="mt-6 flex-1 space-y-2">
              {p.itens.map((i) => <li key={i} className="before:mr-2 before:text-primary before:content-['—']">{i}</li>)}
            </ul>
            <p className="mt-8 font-display text-3xl text-primary">{precoLabel(p.preco)}</p>
          </article>
        ))}
      </div>
      <Link to="/aula-experimental" className="mt-10 inline-block bg-primary px-6 py-3 font-bold uppercase tracking-widest text-primary-foreground">Solicitar aula experimental</Link>
    </section>
  );
}
