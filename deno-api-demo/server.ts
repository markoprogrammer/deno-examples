import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import router from "./router.ts";

const port = 3000;
const app = new Application();

app.use(async (context, next) => {
    await next();
    console.log(`${context.request.method} ${context.request.url}`);
});

app.use(
    oakCors({
      origin: "http://localhost:3001"
    }),
);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server runing on port ${port}`);

await app.listen({ port });
