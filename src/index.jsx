/* @refresh reload */
import { render } from "solid-js/web";
import { I18nProvider } from "@amoutonbrady/solid-i18n";
import { useDict } from "./hooks/useTranslation";
import { Router, Routes, Route } from "@solidjs/router";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./style.scss";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => {
  return (
    <I18nProvider dict={useDict()}>
      <Router>
        <Routes>
          <Route path="/:language?" component={Home} />
          <Route path="*" component={NotFound} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}, root);
