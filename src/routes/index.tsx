import { createFileRoute, Link } from "@tanstack/react-router";
import { site, fotos } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruna de Lima — Personal Trainer" },
      { name: "description", content: "Treino personalizado, técnico e consistente com Bruna de Lima, formada em Educação Física." },
      { property: "og:title", content: "Bruna de Lima — Personal Trainer" },
      { property: "og:description", content: "Treino personalizado com Bruna de Lima. Solicite uma aula experimental." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden">
        <img src={fotos.hero.src} alt={fotos.hero.alt} width={fotos.hero.w} height={fotos.hero.h} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">{site.titulo}</p>
          <h1 className="mt-3 font-display text-6xl uppercase leading-none md:text-9xl">Força<br />com método.</h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/90">Treino personalizado com {site.nome}, formada em Educação Física (bacharelado e licenciatura).</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/aula-experimental" className="bg-primary px-6 py-3 font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90">Solicitar aula experimental</Link>
            <Link to="/pacotes" className="border border-foreground px-6 py-3 font-bold uppercase tracking-widest hover:bg-foreground hover:text-background">Ver pacotes</Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Imagem ilustrativa.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-px bg-border px-0 md:grid-cols-3">
        {[["01", "Avaliação", "Entendemos seu objetivo, rotina e histórico."], ["02", "Plano", "Treino pensado para você, com progressão."], ["03", "Acompanhamento", "Técnica corrigida e evolução monitorada."]].map(([n, t, d]) => (
          <div key={n} className="bg-background p-8">
            <p className="font-display text-4xl text-primary">{n}</p>
            <h2 className="mt-2 font-display text-2xl uppercase">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
