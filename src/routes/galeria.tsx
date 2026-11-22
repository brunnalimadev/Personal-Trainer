import { createFileRoute } from "@tanstack/react-router";
import { fotos } from "@/config/site";
import { PageTitle } from "@/components/site-shell";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de treino — Personal Trainer" },
      { name: "description", content: "Imagens ilustrativas de modalidades de treino." },
      { property: "og:title", content: "Galeria de treino — Personal Trainer" },
      { property: "og:description", content: "Imagens ilustrativas de modalidades de treino." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <PageTitle kicker="Galeria" title="Treino em foco" />
      <p className="mb-8 max-w-2xl text-muted-foreground">Imagens ilustrativas de treino. Serão substituídas por fotos próprias.</p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fotos.galeria.map((f) => (
          <li key={f.legenda}>
            <figure>
              <img src={f.src} alt={f.alt} width={f.w} height={f.h} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="mt-3 flex justify-between text-sm">
                <span className="font-bold uppercase tracking-wider">{f.legenda}</span>
                <span className="text-muted-foreground">Ilustrativa</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
