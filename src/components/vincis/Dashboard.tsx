import { motion } from "framer-motion";
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
  RadialBarChart, RadialBar, PolarAngleAxis,
} from "recharts";
import {
  TrendingUp, ArrowUpRight, Copy, Share2, QrCode, Sparkles, Crown, Gem, Award,
  Users, Wallet, Target, Repeat, Flame, Trophy, Zap, Clock, Play, Download,
  Instagram, MessageCircle, Image as ImageIcon, Video, FileText, ChevronRight,
  Building2, ShieldCheck, ArrowRight, CheckCircle2, BadgeDollarSign,
} from "lucide-react";
import { Sidebar } from "@/components/vincis/Sidebar";
import { Topbar } from "@/components/vincis/Topbar";
import { AnimatedNumber } from "@/components/vincis/AnimatedNumber";

/* ------- mock data ------- */
const earningsData = Array.from({ length: 12 }).map((_, i) => ({
  m: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][i],
  ganhos: 800 + i * 230 + Math.sin(i) * 180,
  recorrente: 400 + i * 180 + Math.cos(i) * 120,
}));

const funnelStages = [
  { label: "Visitas no link", value: 4820, pct: 100, color: "var(--mint)" },
  { label: "Leads qualificados", value: 612, pct: 78, color: "oklch(0.78 0.18 195)" },
  { label: "Clientes ativos", value: 184, pct: 52, color: "var(--violet)" },
  { label: "Recorrentes", value: 97, pct: 34, color: "var(--gold)" },
];

const ranking = [
  { name: "Marina Costa", city: "São Paulo", val: 28430, growth: 24, you: false },
  { name: "Rafael Andrade", city: "Curitiba", val: 24100, growth: 18, you: false },
  { name: "Você", city: "Belo Horizonte", val: 18920, growth: 31, you: true },
  { name: "Camila Reis", city: "Recife", val: 16480, growth: 12, you: false },
  { name: "Diego Martins", city: "Porto Alegre", val: 14250, growth: 9, you: false },
];

const partnersOnline = [
  { n: "AL", c: "from-emerald-400 to-teal-500" },
  { n: "MR", c: "from-violet-400 to-fuchsia-500" },
  { n: "JS", c: "from-amber-400 to-orange-500" },
  { n: "TC", c: "from-sky-400 to-blue-500" },
  { n: "PD", c: "from-rose-400 to-pink-500" },
];

/* ------- small primitives ------- */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl glass-strong overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function KpiCard({
  icon: Icon, label, value, suffix = "", prefix = "", delta, accent = "mint",
  decimals = 0, sub,
}: any) {
  const accents: any = {
    mint: { grad: "var(--gradient-mint)", text: "text-[var(--mint)]" },
    violet: { grad: "var(--gradient-violet)", text: "text-[var(--violet)]" },
    gold: { grad: "var(--gradient-gold)", text: "text-[var(--gold)]" },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="group"
    >
      <Card className="p-5 hover:border-white/15 transition-colors">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"
             style={{ background: accents[accent].grad }} />
        <div className="relative flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: accents[accent].grad }}>
            <Icon className="w-5 h-5 text-background" />
          </div>
          {delta != null && (
            <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10">
              <ArrowUpRight className={`w-3 h-3 ${accents[accent].text}`} />
              <span className={accents[accent].text}>+{delta}%</span>
            </div>
          )}
        </div>
        <div className="relative mt-5">
          <div className="text-[12px] uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 text-3xl font-display font-semibold tracking-tight">
            <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
          </div>
          {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
        </div>
      </Card>
    </motion.div>
  );
}

/* ------- sections ------- */
function Hero() {
  return (
    <Card className="p-7 lg:p-10 mb-6">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      {/* floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
          style={{ left: `${10 + i * 14}%`, top: `${20 + (i % 3) * 22}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "var(--gradient-violet)", opacity: 0.35 }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--mint)]" />
            <span>Parceiro Ouro · 12º mês consecutivo</span>
          </div>
          <h1 className="mt-5 font-display font-semibold tracking-tight text-4xl lg:text-5xl leading-[1.05]">
            Bom dia, <span className="text-gradient-mint">Junior</span>.
            <br /> Sua carteira está crescendo.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl text-[15px] leading-relaxed">
            Você está construindo uma renda recorrente vitalícia dentro da Vincis.
            <span className="text-foreground"> Mais 3 clientes ativos</span> e você desbloqueia o nível Diamante — comissão de 15% para sempre.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--mint)] to-[oklch(0.78_0.18_195)] text-background font-medium glow-mint hover:scale-[1.02] transition-transform">
              <Share2 className="w-4 h-4" /> Compartilhar meu link
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition-colors text-sm">
              <Flame className="w-4 h-4 text-[var(--gold)]" /> Ver campanhas ativas
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition-colors text-sm">
              <Copy className="w-4 h-4" /> Copiar cupom JUNIOR10
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { l: "Renda recorrente", v: "R$ 4.812", s: "/mês", c: "text-gradient-mint" },
              { l: "Clientes ativos", v: "37", s: "", c: "text-gradient-violet" },
              { l: "Próximo nível", v: "3", s: " clientes", c: "text-gradient-gold" },
            ].map((x) => (
              <div key={x.l}>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{x.l}</div>
                <div className={`mt-1 font-display text-2xl font-semibold ${x.c}`}>{x.v}<span className="text-sm text-muted-foreground font-sans font-normal">{x.s}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: glass progress orb */}
        <div className="relative h-[320px] hidden lg:block">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full" style={{
              background: "conic-gradient(from 0deg, oklch(0.82 0.17 165 / 0.4), transparent 35%, oklch(0.72 0.19 295 / 0.5), transparent 70%, oklch(0.82 0.17 165 / 0.4))",
              maskImage: "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)",
            }} />
          <div className="absolute inset-12 rounded-full glass-strong flex flex-col items-center justify-center text-center p-6">
            <Gem className="w-8 h-8 text-[var(--mint)] mb-2" />
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Progresso Diamante</div>
            <div className="mt-2 font-display text-5xl font-semibold">
              <AnimatedNumber value={87} suffix="%" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Faltam <span className="text-foreground font-medium">3 clientes</span></div>
          </div>
          <motion.div className="absolute top-4 right-6 glass rounded-xl px-3 py-2 text-xs flex items-center gap-2 animate-float">
            <TrendingUp className="w-3.5 h-3.5 text-[var(--mint)]" /> +R$ 1.284 esta semana
          </motion.div>
          <motion.div className="absolute bottom-6 left-2 glass rounded-xl px-3 py-2 text-xs flex items-center gap-2"
            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
            <Repeat className="w-3.5 h-3.5 text-[var(--violet)]" /> 24 recorrências ativas
          </motion.div>
        </div>
      </div>
    </Card>
  );
}

function EarningsChart() {
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Evolução de comissões</div>
          <div className="mt-1 font-display text-2xl font-semibold">R$ <AnimatedNumber value={48230} /></div>
          <div className="text-xs text-[var(--mint)] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +32% vs trimestre anterior
          </div>
        </div>
        <div className="flex gap-1 text-xs">
          {["7D","30D","90D","12M"].map((t, i) => (
            <button key={t} className={`px-3 py-1.5 rounded-lg ${i===3?"bg-white/10 text-foreground":"text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="h-64 -mx-2">
        <ResponsiveContainer>
          <AreaChart data={earningsData}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.17 165)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="oklch(0.82 0.17 165)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.19 295)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="oklch(0.72 0.19 295)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
            <XAxis dataKey="m" stroke="oklch(0.6 0 0)" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="oklch(0.6 0 0)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `R$${(v/1000).toFixed(1)}k`} />
            <Tooltip contentStyle={{ background: "oklch(0.2 0.014 250)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
            <Area type="monotone" dataKey="ganhos" stroke="oklch(0.82 0.17 165)" strokeWidth={2.5} fill="url(#g1)" />
            <Area type="monotone" dataKey="recorrente" stroke="oklch(0.72 0.19 295)" strokeWidth={2.5} fill="url(#g2)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-5 text-xs text-muted-foreground mt-2 px-2">
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--mint)]" /> Ganhos totais</span>
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--violet)]" /> Renda recorrente</span>
      </div>
    </Card>
  );
}

function LevelsCard() {
  const data = [{ name: "p", value: 67, fill: "url(#radg)" }];
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Sistema de níveis</div>
          <div className="mt-1 font-display text-xl font-semibold flex items-center gap-2">
            <Crown className="w-5 h-5 text-[var(--gold)]" /> Você é <span className="text-gradient-gold">Ouro</span>
          </div>
        </div>
      </div>

      <div className="relative h-36 mt-2">
        <ResponsiveContainer>
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={data} startAngle={210} endAngle={-30}>
            <defs>
              <linearGradient id="radg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.16 88)" />
                <stop offset="100%" stopColor="oklch(0.82 0.17 165)" />
              </linearGradient>
            </defs>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar background={{ fill: "oklch(1 0 0 / 0.05)" } as any} dataKey="value" cornerRadius={20} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="font-display text-3xl font-semibold">67%</div>
          <div className="text-[11px] text-muted-foreground">para Diamante</div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {[
          { i: Award, name: "Bronze", pct: "5%", state: "done" },
          { i: Crown, name: "Ouro",   pct: "10%", state: "current" },
          { i: Gem,   name: "Diamante", pct: "15%", state: "next" },
        ].map((l) => (
          <div key={l.name} className={`flex items-center gap-3 p-2.5 rounded-xl border ${
            l.state==="current" ? "border-[var(--gold)]/40 bg-[var(--gold)]/5"
            : l.state==="next" ? "border-[var(--mint)]/30 bg-[var(--mint)]/5"
            : "border-border bg-white/[0.02]"
          }`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              l.state==="current" ? "bg-gradient-to-br from-[var(--gold)] to-amber-600 text-background"
              : l.state==="next" ? "bg-gradient-to-br from-[var(--mint)] to-teal-500 text-background"
              : "bg-white/5 text-muted-foreground"}`}>
              <l.i className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{l.name}</div>
              <div className="text-[11px] text-muted-foreground">Comissão {l.pct} · vitalícia</div>
            </div>
            {l.state === "current" && <span className="text-[10px] uppercase tracking-wider text-[var(--gold)]">atual</span>}
            {l.state === "done" && <CheckCircle2 className="w-4 h-4 text-[var(--mint)]" />}
            {l.state === "next" && <span className="text-[10px] uppercase tracking-wider text-[var(--mint)]">3 clientes</span>}
          </div>
        ))}
      </div>
    </Card>
  );
}

function HybridCommission() {
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Sistema híbrido</div>
          <div className="font-display text-xl font-semibold mt-1">Como você ganha na Vincis</div>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
          Detalhes <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative rounded-2xl p-5 border border-[var(--mint)]/30 bg-gradient-to-br from-[var(--mint)]/10 via-transparent to-transparent overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-mint)" }} />
          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--mint)]">
              <Zap className="w-3.5 h-3.5" /> Recompensa rápida
            </div>
            <div className="mt-2 font-display text-lg font-semibold">Serviços avulsos</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-gradient-mint font-display text-4xl font-bold">10%</span>
              <span className="text-xs text-muted-foreground">fixo por venda</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Comissão imediata em consultorias, projetos pontuais e serviços únicos. Pagamento em até 7 dias.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <BadgeDollarSign className="w-4 h-4 text-[var(--mint)]" />
              Média parceiros Ouro: <span className="text-foreground font-medium">R$ 1.840/mês</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl p-5 border border-[var(--violet)]/30 bg-gradient-to-br from-[var(--violet)]/10 via-transparent to-transparent overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-violet)" }} />
          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--violet)]">
              <Repeat className="w-3.5 h-3.5" /> Renda vitalícia
            </div>
            <div className="mt-2 font-display text-lg font-semibold">Planos recorrentes</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-gradient-violet font-display text-4xl font-bold">5–15%</span>
              <span className="text-xs text-muted-foreground">todo mês, para sempre</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Cada cliente recorrente paga sua comissão mês após mês. Construa uma carteira que trabalha por você.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <TrendingUp className="w-4 h-4 text-[var(--violet)]" />
              Sua projeção em 12m: <span className="text-foreground font-medium">R$ 8.450/mês</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CouponCard() {
  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-50" style={{ background: "var(--gradient-mint)" }} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Cupom exclusivo</div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--mint)]/15 text-[var(--mint)] border border-[var(--mint)]/30">ATIVO</span>
        </div>

        <div className="mt-4 relative rounded-2xl border-2 border-dashed border-[var(--mint)]/40 p-5 bg-background/40">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">cupom do parceiro</div>
          <div className="mt-1 font-display text-3xl lg:text-4xl font-bold tracking-wider text-gradient-mint">JUNIOR10</div>
          <div className="text-xs text-muted-foreground mt-1">10% de desconto · você ganha 10% extra</div>
          <button className="absolute right-4 top-4 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
            <Copy className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { l: "Usos", v: 142 },
            { l: "Gerado", v: "R$ 18k", raw: 18000 },
            { l: "Conv.", v: "32%" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              <div className="font-display text-lg font-semibold mt-0.5">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function ReferralLink() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Link de indicação</div>
        <Share2 className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-background/60 border border-white/10">
        <div className="flex-1 text-sm font-mono truncate">vincis.app/<span className="text-[var(--mint)]">junior</span></div>
        <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs flex items-center gap-1"><Copy className="w-3 h-3" /> Copiar</button>
      </div>
      <div className="mt-4 grid grid-cols-[auto_1fr] gap-4 items-center">
        <div className="w-24 h-24 rounded-xl bg-white p-2 flex items-center justify-center">
          {/* mock QR */}
          <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[2px]">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={(i*7+i%3)%3===0 || i<8 || i>55 || i%8===0 || i%8===7 ? "bg-black rounded-[1px]" : ""} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Visitas (30d)</div>
          <div className="font-display text-2xl font-semibold"><AnimatedNumber value={1284} /></div>
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1.5 rounded-lg text-xs bg-gradient-to-r from-[var(--mint)] to-[oklch(0.78_0.18_195)] text-background font-medium">Compartilhar</button>
            <button className="px-3 py-1.5 rounded-lg text-xs glass"><QrCode className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Forecast() {
  return (
    <Card className="p-6 lg:col-span-2 relative overflow-hidden">
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-violet)" }} />
      <div className="relative">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-[var(--violet)]" /> Previsão de renda
        </div>
        <h3 className="mt-2 font-display text-2xl lg:text-3xl font-semibold leading-tight">
          Com <span className="text-gradient-violet">40 clientes ativos</span>,<br />
          sua recorrência será de <span className="text-gradient-mint">R$ 8.450/mês</span>.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          Projeção baseada no seu ticket médio e taxa de retenção atual de 94%.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { l: "Hoje", v: 4812, c: 37 },
            { l: "+ 6 meses", v: 6720, c: 32, future: true },
            { l: "+ 12 meses", v: 8450, c: 40, highlight: true },
          ].map((p) => (
            <div key={p.l} className={`rounded-xl p-4 border ${p.highlight ? "border-[var(--mint)]/40 bg-[var(--mint)]/5" : "border-white/10 bg-white/[0.02]"}`}>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.l}</div>
              <div className={`font-display text-xl font-semibold mt-1 ${p.highlight ? "text-gradient-mint" : ""}`}>R$ {p.v.toLocaleString("pt-BR")}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{p.c} clientes ativos</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function FunnelSection() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Funil de conversão</div>
          <div className="font-display text-lg font-semibold mt-1">Últimos 30 dias</div>
        </div>
        <Target className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {funnelStages.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-medium">{s.value.toLocaleString("pt-BR")}</span>
            </div>
            <div className="h-9 rounded-lg bg-white/[0.04] overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-lg flex items-center justify-end pr-3 text-[11px] font-medium"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)`, boxShadow: `inset 0 0 20px ${s.color}` }}
              >
                {s.pct}%
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function CampaignsSection() {
  const items = [
    { title: "Sprint Diamante", desc: "Indique 5 clientes este mês e desbloqueie +2% por 60 dias.", progress: 60, days: 8, hot: true },
    { title: "Indique e ganhe duplo", desc: "Pague R$ 0 nos primeiros 3 meses do seu plano.", progress: 35, days: 21 },
    { title: "Onboarding express", desc: "Bônus de R$ 250 ao ativar 2 clientes em 7 dias.", progress: 80, days: 3 },
  ];
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Campanhas ativas</div>
          <div className="font-display text-lg font-semibold mt-1">Acelere seu crescimento</div>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
          Ver todas <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {items.map((c) => (
          <div key={c.title} className="relative rounded-2xl p-4 border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors group">
            {c.hot && <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 flex items-center gap-1"><Flame className="w-2.5 h-2.5" /> Hot</div>}
            <div className="font-display font-semibold">{c.title}</div>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</p>
            <div className="mt-4 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: "var(--gradient-mint)" }} />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{c.progress}% concluído</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.days}d restantes</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function RankingSection() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Ranking semanal</div>
          <div className="font-display text-lg font-semibold mt-1 flex items-center gap-2"><Trophy className="w-4 h-4 text-[var(--gold)]" /> Top parceiros</div>
        </div>
      </div>
      <div className="space-y-2">
        {ranking.map((r, i) => (
          <div key={r.name} className={`flex items-center gap-3 p-2.5 rounded-xl ${r.you ? "bg-gradient-to-r from-[var(--mint)]/10 to-transparent border border-[var(--mint)]/30" : "hover:bg-white/[0.03]"} transition-colors`}>
            <div className={`w-7 text-center font-display font-bold text-sm ${i===0?"text-[var(--gold)]":i===1?"text-zinc-300":i===2?"text-amber-700":"text-muted-foreground"}`}>
              {i+1}
            </div>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
              i===0 ? "bg-gradient-to-br from-[var(--gold)] to-amber-600 text-background"
              : r.you ? "bg-gradient-to-br from-[var(--mint)] to-teal-500 text-background"
              : "bg-white/5 text-muted-foreground"}`}>
              {r.name.split(" ").map(n=>n[0]).slice(0,2).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate flex items-center gap-2">{r.name} {r.you && <span className="text-[10px] uppercase tracking-wider text-[var(--mint)]">você</span>}</div>
              <div className="text-[11px] text-muted-foreground">{r.city}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">R$ {r.val.toLocaleString("pt-BR")}</div>
              <div className="text-[11px] text-[var(--mint)] flex items-center gap-0.5 justify-end"><ArrowUpRight className="w-3 h-3" /> +{r.growth}%</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MaterialsSection() {
  const m = [
    { i: Instagram, name: "Carrossel Instagram", type: "10 artes", color: "from-fuchsia-400 to-rose-500" },
    { i: MessageCircle, name: "Scripts WhatsApp", type: "8 modelos", color: "from-emerald-400 to-teal-500" },
    { i: ImageIcon, name: "Banners web", type: "5 formatos", color: "from-amber-400 to-orange-500" },
    { i: Video, name: "Reels prontos", type: "6 vídeos", color: "from-violet-400 to-fuchsia-500" },
    { i: FileText, name: "E-book do parceiro", type: "PDF · 32p", color: "from-sky-400 to-blue-500" },
  ];
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Materiais de divulgação</div>
          <div className="font-display text-lg font-semibold mt-1">Pronto para postar</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {m.map((x) => (
          <div key={x.name} className="group relative rounded-2xl p-4 border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all hover:-translate-y-0.5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${x.color} flex items-center justify-center text-background`}>
              <x.i className="w-5 h-5" />
            </div>
            <div className="mt-3 text-sm font-medium">{x.name}</div>
            <div className="text-[11px] text-muted-foreground">{x.type}</div>
            <div className="mt-3 flex items-center gap-1.5">
              <button className="text-[11px] px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 flex items-center gap-1"><Play className="w-2.5 h-2.5" /> Preview</button>
              <button className="text-[11px] px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 flex items-center gap-1"><Download className="w-2.5 h-2.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function CommunityCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Comunidade Vincis</div>
          <div className="font-display text-lg font-semibold mt-1">Networking ao vivo</div>
        </div>
        <span className="text-[11px] flex items-center gap-1.5 text-[var(--mint)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-pulse" /> 248 online</span>
      </div>
      <div className="flex -space-x-2 mb-4">
        {partnersOnline.map((p) => (
          <div key={p.n} className={`w-9 h-9 rounded-full ring-2 ring-card bg-gradient-to-br ${p.c} flex items-center justify-center text-xs font-semibold text-background`}>{p.n}</div>
        ))}
        <div className="w-9 h-9 rounded-full ring-2 ring-card bg-white/5 text-xs flex items-center justify-center text-muted-foreground">+243</div>
      </div>
      <div className="space-y-2.5">
        {[
          { n: "Marina Costa", t: "fechou um plano Premium 🎉", time: "agora" },
          { n: "Rafael Andrade", t: "compartilhou: como dobrei minha carteira", time: "5 min" },
          { n: "Camila Reis", t: "subiu para Diamante 💎", time: "12 min" },
        ].map((msg, i) => (
          <div key={i} className="flex items-start gap-2 text-xs p-2 rounded-lg hover:bg-white/[0.03]">
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${partnersOnline[i].c} flex items-center justify-center text-[10px] font-semibold text-background shrink-0`}>{msg.n.split(" ").map(x=>x[0]).join("")}</div>
            <div className="flex-1">
              <span className="font-medium">{msg.n}</span>{" "}
              <span className="text-muted-foreground">{msg.t}</span>
              <div className="text-[10px] text-muted-foreground/70 mt-0.5">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function AcademyCard() {
  const courses = [
    { t: "Como captar 10 clientes em 30 dias", d: "8 aulas · 2h", p: 75, c: "from-emerald-400 to-teal-500" },
    { t: "Domine o WhatsApp Business", d: "5 aulas · 1h", p: 30, c: "from-violet-400 to-fuchsia-500" },
    { t: "Conteúdo que converte no Instagram", d: "12 aulas · 3h", p: 0, c: "from-amber-400 to-orange-500" },
  ];
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Academia Vincis</div>
          <div className="font-display text-lg font-semibold mt-1 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-[var(--mint)]" /> Continue aprendendo</div>
        </div>
      </div>
      <div className="space-y-3">
        {courses.map((c) => (
          <div key={c.t} className="group rounded-xl p-3 border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.c} flex items-center justify-center shrink-0`}>
                <Play className="w-5 h-5 text-background fill-background" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium leading-tight">{c.t}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{c.d}</div>
                <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full" style={{ width: `${c.p}%`, background: "var(--gradient-mint)" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function HybridProfessional() {
  return (
    <Card className="p-6 lg:col-span-3">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Para profissionais</div>
          <div className="font-display text-2xl font-semibold mt-1">Escolha como a Vincis trabalha com você</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative rounded-2xl p-6 border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[var(--mint)]/15 text-[var(--mint)] border border-[var(--mint)]/30">Mais utilizado</div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center"><Building2 className="w-6 h-6 text-[var(--mint)]" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Modelo 1</div>
              <div className="font-display text-xl font-semibold">Autônomo</div>
            </div>
          </div>
          <div className="mt-5 flex items-baseline gap-2">
            <div className="font-display text-5xl font-bold text-gradient-mint">5%</div>
            <div className="text-sm text-muted-foreground">de taxa Vincis</div>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--mint)] mt-0.5 shrink-0" /> Recebe diretamente do cliente</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--mint)] mt-0.5 shrink-0" /> Gerencia próprias cobranças</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--mint)] mt-0.5 shrink-0" /> Liberdade total de operação</li>
          </ul>
        </div>

        <div className="relative rounded-2xl p-6 border border-[var(--violet)]/30 overflow-hidden bg-gradient-to-br from-[var(--violet)]/10 via-transparent to-transparent">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-violet)" }} />
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[var(--violet)]/20 text-[var(--violet)] border border-[var(--violet)]/30 flex items-center gap-1"><Crown className="w-3 h-3" /> Premium</div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-violet)" }}><ShieldCheck className="w-6 h-6 text-background" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Modelo 2</div>
                <div className="font-display text-xl font-semibold">Gestão Vincis</div>
              </div>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <div className="font-display text-5xl font-bold text-gradient-violet">25–30%</div>
              <div className="text-sm text-muted-foreground">com gestão completa</div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--violet)] mt-0.5 shrink-0" /> Cobrança e repasses automáticos</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--violet)] mt-0.5 shrink-0" /> Inadimplência reduzida em até 80%</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--violet)] mt-0.5 shrink-0" /> Dashboard, suporte e marketing inclusos</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ------- main page ------- */
export function VincisDashboard() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />
        <main className="flex-1 px-5 lg:px-8 py-6 max-w-[1500px] w-full mx-auto">
          <Hero />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            <KpiCard icon={Wallet}    label="Ganhos do mês"      value={4812}   prefix="R$ " delta={32} accent="mint"  sub="meta R$ 5.500" />
            <KpiCard icon={Repeat}    label="Renda recorrente"   value={3240}   prefix="R$ " delta={18} accent="violet" sub="prevista p/ próximo mês" />
            <KpiCard icon={Users}     label="Clientes ativos"    value={37}                  delta={9}  accent="gold"  sub="+3 esta semana" />
            <KpiCard icon={TrendingUp} label="Crescimento"        value={31}    suffix="%"  delta={12} accent="mint"  sub="vs mês anterior" />
            <KpiCard icon={Target}    label="Conversão de leads" value={32}    suffix="%"  delta={6}  accent="violet" sub="média parceiros: 19%" />
            <KpiCard icon={BadgeDollarSign} label="Acumulado total" value={48230} prefix="R$ " delta={42} accent="gold"  sub="desde o início" />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <EarningsChart />
            <LevelsCard />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <HybridCommission />
            <CouponCard />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <Forecast />
            <ReferralLink />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <CampaignsSection />
            <FunnelSection />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <RankingSection />
            <CommunityCard />
            <AcademyCard />
          </div>

          <div className="grid mb-6">
            <MaterialsSection />
          </div>

          <div className="grid mb-10">
            <HybridProfessional />
          </div>

          <footer className="text-center text-xs text-muted-foreground pb-6">
            © 2026 Vincis · feito para quem constrói algo grande.
          </footer>
        </main>
      </div>
    </div>
  );
}
