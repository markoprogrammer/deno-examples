import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { opine } from "https://deno.land/x/opine@0.20.2/mod.ts";
import { parse } from "https://deno.land/std@0.63.0/flags/mod.ts";
import App from './app.tsx';

const browserBundlePath = "/browser.js";

const baseServer = async ({
  appModule,
  port = 3000,
}: {
  appModule: any;
  port: number;
}) => {
  const app = opine();

  const App = appModule;

  const js =
    `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.getElementById("react-root"));`;

  const html =
    `<html><head><script type="module" src="${browserBundlePath}"></script><style> .centered-rows {display: flex; justify-content: center; align-items: center; flex-direction: column;}</style><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"></head><body><div id="react-root">${
      (ReactDOMServer as any).renderToString(<App />)
    }</div></body></html>`;

  app.use(browserBundlePath, (req: any, res: any, next: any) => {
    res.type("application/javascript").send(js);
  });

  app.use("/", (req: any, res: any, next: any) => {
    res.type("text/html").send(html);
  });

  app.listen({ port });

  return app;
};

// Update `appModule` from the example React component to your own.
baseServer({
  appModule: App,
  port: 3001,
});