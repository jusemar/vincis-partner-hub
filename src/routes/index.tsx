import { createFileRoute } from "@tanstack/react-router";
import { VincisDashboard } from "@/components/vincis/Dashboard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vincis · Partner Suite" },
      { name: "description", content: "Construa renda recorrente vitalícia indicando clientes na Vincis." },
    ],
  }),
});

function Index() {
  return <VincisDashboard />;
}
