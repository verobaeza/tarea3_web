import "dotenv/config.js";
import Koa from "koa";
import cors from "@koa/cors"
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";
import router from "./routes.js";

// Instancia de Koa
const app = new Koa();

// Middlewares
app.use(cors());
app.use(KoaLogger());
app.use(koaBody());

// koa router
app.use(router.routes());

app.listen(process.env.PORT, () => {
    console.log("Iniciando app. Escuchando puerto 3000")
});

