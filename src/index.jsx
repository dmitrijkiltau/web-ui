/* @refresh reload */
import { render } from "solid-js/web";

import "./style.scss";
import { translations } from "./helper/translations";
import { I18nProvider } from "@amoutonbrady/solid-i18n";
import { Router, Routes, Route } from "@solidjs/router";
import Home from "./pages/Home/Home";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <I18nProvider dict={translations()}>
      <Router>
        <Routes>
          <Route path="/*language" component={Home} />
        </Routes>
      </Router>
    </I18nProvider>
  ),
  root
);
