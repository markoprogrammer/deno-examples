// Import deno-react-base-server
import baseServer from "https://raw.githubusercontent.com/asos-craigmorten/deno-react-base-server/main/mod.tsx";
import App from "./app.tsx";

// Update `appModulePath` from the example React component to your own.
baseServer({
  appModulePath:
    App,
  port: 3001,
});