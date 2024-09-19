import { ParentProps } from "solid-js";
import { cn } from "~/lib/utils";

interface IPageLayout extends ParentProps {
  class?: string;
}

export function PageLayout(props: IPageLayout) {
  return (
    <div class={cn("flex-1 max-w-screen-2xl mx-auto w-full p-4", props.class)}>
      {props.children}
    </div>
  );
}
