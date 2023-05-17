import Router from "koa-router";
import suma from "./routes/suma.js";
import resta from "./routes/resta.js"
import producto from "./routes/multiplicacion.js"
import division from "./routes/division.js"

const router = new Router();

router.use('/suma', suma.routes());
router.use('/resta', resta.routes());
router.use('/multiplicacion', producto.routes());
router.use('/division', division.routes());

export default router;