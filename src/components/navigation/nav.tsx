import { A } from "@solidjs/router";

export function NavigationBar() {
  return (
    <nav class="bg-black border-b border-gray-100 p-4">
      <div class="max-w-screen-2xl mx-auto w-full flex items-center justify-between">
        <A href="/">
          <img src="logo.svg" alt="" class="size-8" />
        </A>

        <A
          class="font-medium text-neutral-100 hover:text-white transition-colors ease-linear duration-200"
          href="#"
        >
          Roadmap
        </A>
      </div>
    </nav>
  );
}
