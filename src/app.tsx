import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { AppLayout } from "./components/layout";
import { NavigationBar, NavigationFooter } from "~/components/navigation";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <AppLayout>
          <NavigationBar />
          <Suspense>{props.children}</Suspense>
          <NavigationFooter />
        </AppLayout>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
