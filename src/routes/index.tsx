import { A } from "@solidjs/router";
import { PageLayout } from "~/components/layout";

export default function Home() {
  return (
    <PageLayout class="flex items-end">
      <h1 class="text-neutral-200 text-[calc(20vw_+_1em)] xl:text-[calc(10vw_+_1em)] leading-none">
        Coming Soon.
      </h1>
    </PageLayout>
  );
}
