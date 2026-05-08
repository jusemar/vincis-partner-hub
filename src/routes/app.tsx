import { createFileRoute } from "@tanstack/react-router";
import { VincisDashboard } from "@/components/vincis/Dashboard";

export const Route = createFileRoute("/app")({
  component: () => <VincisDashboard />,
  head: () => ({
    meta: [
      { title: "Vincis · Painel do Parceiro" },
      { name: "description", content: "Acompanhe ganhos, indicações e ranking no painel Vincis." },
    ],
  }),
});
