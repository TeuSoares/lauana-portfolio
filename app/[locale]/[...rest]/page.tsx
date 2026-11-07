import { notFound } from "next/navigation";

// Qualquer endereço desconhecido dentro de /pt ou /en cai na página 404 traduzida.
export default function CatchAllPage() {
  notFound();
}
