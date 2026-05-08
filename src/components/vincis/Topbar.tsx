import { Bell, Search, Command, Plus } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 h-16 flex items-center gap-4 px-5 lg:px-8 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          placeholder="Buscar clientes, comissões, campanhas…"
          className="w-full pl-10 pr-20 py-2.5 rounded-xl bg-surface/60 border border-border focus:border-[var(--mint)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--mint)]/20 text-sm placeholder:text-muted-foreground/70 transition-all"
        />
        <kbd className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
          <Command className="w-3 h-3" /> K
        </kbd>
      </div>

      <button className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm bg-gradient-to-r from-[var(--mint)] to-[oklch(0.78_0.18_195)] text-background font-medium hover:opacity-90 transition-opacity glow-mint">
        <Plus className="w-4 h-4" /> Indicar cliente
      </button>

      <button className="relative w-10 h-10 rounded-xl border border-border bg-surface/60 hover:bg-surface flex items-center justify-center transition-colors">
        <Bell className="w-4 h-4" />
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--violet)]" />
      </button>

      <div className="flex items-center gap-3 pl-3 border-l border-border">
        <div className="text-right hidden sm:block">
          <div className="text-sm font-medium leading-tight">Junior Almeida</div>
          <div className="text-[11px] text-muted-foreground">Parceiro Ouro</div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-md opacity-60" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative w-10 h-10 rounded-full p-[2px]" style={{ background: "var(--gradient-gold)" }}>
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center font-display font-semibold">JA</div>
          </div>
        </div>
      </div>
    </header>
  );
}
