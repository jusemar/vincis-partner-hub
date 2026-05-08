import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Share2, Users, Wallet, Trophy, Megaphone,
  Crown, GraduationCap, MessagesSquare, Settings, Sparkles, ChevronRight,
} from "lucide-react";

const groups = [
  { label: "Visão geral", items: [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
  ]},
  { label: "Crescimento", items: [
    { icon: Share2, label: "Indicações", badge: "novo", children: ["Meu Link", "Cupons", "Leads", "Materiais"] },
    { icon: Users, label: "Clientes Indicados", children: ["Ativos", "Consultorias", "Recorrentes"] },
    { icon: Wallet, label: "Comissões", children: ["Ganhos", "Recorrências", "Histórico", "Previsão"] },
  ]},
  { label: "Performance", items: [
    { icon: Crown, label: "Níveis e Benefícios" },
    { icon: Megaphone, label: "Campanhas", badge: "3" },
    { icon: Trophy, label: "Ranking" },
  ]},
  { label: "Ecossistema", items: [
    { icon: GraduationCap, label: "Academia" },
    { icon: MessagesSquare, label: "Comunidade", badge: "12" },
    { icon: Settings, label: "Configurações" },
  ]},
];

export function Sidebar() {
  const [open, setOpen] = useState<string | null>("Indicações");

  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-border/60 bg-sidebar/80 backdrop-blur-xl">
      <div className="px-6 pt-7 pb-5 flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl blur-lg opacity-60" style={{ background: "var(--gradient-mint)" }} />
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-mint)" }}>
            <Sparkles className="w-5 h-5 text-background" />
          </div>
        </div>
        <div>
          <div className="font-display font-semibold text-lg tracking-tight">Vincis</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Partner Suite</div>
        </div>
      </div>

      <div className="px-4 mb-3">
        <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse" />
          Conta verificada · Diamante a 3 clientes
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 pb-6">
        {groups.map((g) => (
          <div key={g.label} className="mb-5">
            <div className="px-3 mb-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">{g.label}</div>
            <ul className="space-y-0.5">
              {g.items.map((it) => {
                const Icon = it.icon;
                const isOpen = open === it.label;
                const hasChildren = !!(it as any).children;
                return (
                  <li key={it.label}>
                    <button
                      onClick={() => hasChildren && setOpen(isOpen ? null : it.label)}
                      className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                        ${(it as any).active ? "bg-gradient-to-r from-[oklch(0.82_0.17_165/0.18)] to-transparent text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"}`}
                    >
                      <Icon className={`w-4 h-4 ${(it as any).active ? "text-[var(--mint)]" : ""}`} />
                      <span className="flex-1 text-left">{it.label}</span>
                      {(it as any).badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[var(--violet)]/20 text-[var(--violet)] border border-[var(--violet)]/30">
                          {(it as any).badge}
                        </span>
                      )}
                      {hasChildren && <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />}
                    </button>
                    {hasChildren && isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-9 mt-1 space-y-0.5 border-l border-border/60 pl-3"
                      >
                        {(it as any).children.map((c: string) => (
                          <li key={c}>
                            <a className="block px-2 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors">{c}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="m-3 p-4 rounded-2xl relative overflow-hidden glass-strong">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl" style={{ background: "var(--gradient-violet)", opacity: 0.4 }} />
        <div className="relative">
          <div className="text-xs text-muted-foreground">Ganho desta semana</div>
          <div className="text-2xl font-display font-semibold mt-1">R$ 1.284</div>
          <div className="text-[11px] text-[var(--mint)] mt-0.5">+18% vs anterior</div>
          <button className="mt-3 w-full text-xs py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            Sacar comissões
          </button>
        </div>
      </div>
    </aside>
  );
}
