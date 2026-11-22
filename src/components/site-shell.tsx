import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/galeria", label: "Galeria" },
  { to: "/pacotes", label: "Pacotes" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-primary focus:text-primary-foreground">Pular para o conteúdo</a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl uppercase tracking-wide">{site.nome}<span className="text-primary">.</span></Link>
        <button className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="menu" aria-label="Principal" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 border-b border-border bg-background p-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">{l.label}</Link>
          ))}
          <Link to="/aula-experimental" onClick={() => setOpen(false)} className="bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90">Aula experimental</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {site.nome}</p>
        <p>Fotos ilustrativas; não retratam a profissional.</p>
      </div>
    </footer>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h1 className="mt-2 font-display text-5xl uppercase leading-none md:text-7xl">{title}</h1>
    </div>
  );
}
