import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageTitle } from "@/components/site-shell";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Bruna de Lima, Personal Trainer" },
      { name: "description", content: "Conheça Bruna de Lima, bacharel e licenciada em Educação Física." },
      { property: "og:title", content: "Sobre Bruna de Lima" },
      { property: "og:description", content: "Formação em Educação Física: bacharelado e licenciatura." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <PageTitle kicker="Apresentação" title={site.nome} />
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-foreground/90">
          Personal trainer dedicada a treinos individualizados, com foco em técnica, segurança e evolução consistente — respeitando o seu ponto de partida e o seu objetivo.
        </p>
        <div>
          <h2 className="font-display text-2xl uppercase">Formação</h2>
          <ul className="mt-4 space-y-3">
            {site.formacao.map((f) => (
              <li key={f} className="border-l-4 border-primary pl-4 text-lg">{f}</li>
            ))}
          </ul>
          <Link to="/aula-experimental" className="mt-8 inline-block bg-primary px-6 py-3 font-bold uppercase tracking-widest text-primary-foreground">Solicitar aula experimental</Link>
        </div>
      </div>
    </section>
  );
}
