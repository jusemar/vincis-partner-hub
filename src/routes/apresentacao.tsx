import { createFileRoute } from "@tanstack/react-router";
import { VincisLanding } from "@/components/vincis/Landing";

export const Route = createFileRoute("/apresentacao")({
  component: () => <VincisLanding />,
  head: () => ({
    meta: [
      { title: "Vincis · Seja um Parceiro e construa renda recorrente" },
      { name: "description", content: "Indique clientes para a Vincis e construa renda recorrente vitalícia. Programa de parceiros premium, com painel completo, ranking, comissões e suporte dedicado." },
      { property: "og:title", content: "Vincis · Programa de Parceiros" },
      { property: "og:description", content: "Construa renda recorrente vitalícia indicando clientes na Vincis." },
      { property: "og:type", content: "website" },
    ],
  }),
});
