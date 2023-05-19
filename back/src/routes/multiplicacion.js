import Router from "koa-router";

const router = new Router();

const producto = 'llegué al producto!';

// endpoint 
router.get("multiplicacion", "/:params1/:params2", async (ctx) => {
    ctx.body = {
        "status": 200,
        "result": Number(ctx.params.params1) * Number(ctx.params.params2)
    }
})

export default router;