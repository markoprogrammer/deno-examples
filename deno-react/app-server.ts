// Import deno-react-base-server
import baseServer from "https://raw.githubusercontent.com/asos-craigmorten/deno-react-base-server/main/mod.tsx";
import App from "./app.tsx";

// Update `appModulePath` from the example React component to your own.
baseServer({
  appModulePath:
    'https://raw.githubusercontent.com/markoprogrammer/deno-examples/master/deno-react/app.tsx',
  port: 3001,
});