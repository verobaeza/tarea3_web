import Router from "koa-router";

const router = new Router();

const suma = 'llegué a la suma!';

// endpoint 
router.get("suma", "/:param1/:param2", async (ctx) => {
    ctx.body = {
        "status": 'Success',
        "result": Number(ctx.params.param1) + Number(ctx.params.param2)
    }
})

export default router;