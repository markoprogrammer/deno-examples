import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/v1/user", ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = {
        success: true,
        data: 'get method',
      };
});

router.get("/api/v1/user/:id", ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = {
        success: true,
        data: 'get method',
      };

});

router.post("/api/v1/user", ({ request, response }: { request: any; response: any }) => {
    //...
});

router.put("/api/v1/user/:id", ({ request, response, params }: { request: any; response: any; params: { id: string }; }) => {
    //...
});

router.delete("/api/v1/user/:id", ({ request, response, params }: { request: any; response: any; params: { id: string }; }) => {
    //...
});

export default router;