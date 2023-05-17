import Router from "koa-router";

const router = new Router();

// endpoint 
router.post("division", "/", async (ctx) => {
    let param1 = ctx.request.body.param1;
    let param2 = ctx.request.body.param2;
    if (param2 === '0') {
        ctx.body = {
            "status": "Error",
            "result": "Syntax Error"
        }
    } else {
        ctx.body = {
            "status": 200,
            "result": Number(param1) / Number(param2)
    }}
})

export default router;