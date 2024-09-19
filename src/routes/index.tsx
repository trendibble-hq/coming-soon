import { A } from "@solidjs/router";
import { PageLayout } from "~/components/layout";

export default function Home() {
  return (
    <PageLayout class="flex items-end">
      <h1 class="text-neutral-200 text-[calc(1vw_+_10em)] leading-none">
        Coming Soon.
      </h1>
    </PageLayout>
  );
}
