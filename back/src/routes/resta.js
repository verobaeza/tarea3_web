import Router from "koa-router";

const router = new Router();

// endpoint 
router.post("resta", "/", async (ctx) => {
    ctx.body = {
        "status": 'Success',
        "result": Number(ctx.request.body.param1) - Number(ctx.request.body.param2)
    }
})

export default router;