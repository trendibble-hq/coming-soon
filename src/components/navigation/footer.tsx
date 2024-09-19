import { A } from "@solidjs/router";

export function NavigationFooter() {
  return (
    <footer class="border-t border-neutral-100 p-4">
      <div class="max-w-screen-2xl mx-auto w-full text-neutral-400 [&>a]:text-neutral-900">
        Built with <A href="https://tailwindcss.com/">tailwindcss</A> and{" "}
        <A href="https://start.solidjs.com/">solid start</A>. The source code is
        available on{" "}
        <A href="https://github.com/trendibble-hq/coming-soon">GitHub</A>.
      </div>
    </footer>
  );
}
