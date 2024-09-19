import { ParentProps } from "solid-js";
import { cn } from "~/lib/utils";

interface IAppLayout extends ParentProps {
  class?: string;
}

export function AppLayout(props: IAppLayout) {
  return (
    <main class={cn("flex flex-col min-h-dvh", props.class)}>
      {props.children}
    </main>
  );
}
