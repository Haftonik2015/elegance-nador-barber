import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, ReviewsBlock } from "@/components/site-sections";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/avis")({
  head: () =>
    createPageSeo({
      title: "Avis Google — Elegance Barber Shop à Nador",
      description:
        "Consultez les 83 avis Google et la note de 4,8/5 d’Elegance Barber Shop à Nador.",
      path: "/avis",
    }),
  component: ReviewsPage,
});
function ReviewsPage() {
  return (
    <>
      <ReviewsBlock page />
      <FinalCta />
    </>
  );
}
