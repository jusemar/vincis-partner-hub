import { createFileRoute } from "@tanstack/react-router";
import { VincisLanding } from "@/components/vincis/Landing";

export const Route = createFileRoute("/")({
  component: VincisLanding,
  head: () => ({
    meta: [
      { title: "Vincis · Construa renda recorrente vitalícia" },
      { name: "description", content: "A plataforma de parceiros que transforma indicações em renda recorrente. Ranking, níveis, simulador e painel premium." },
      { property: "og:title", content: "Vincis · Renda recorrente vitalícia" },
      { property: "og:description", content: "Indique, escale e seja reconhecido. Comissões recorrentes, gamificação e gestão profissional." },
    ],
  }),
});
