import Koa from "koa";
import cors from "koa-cors";
import routes from "./routes";

const PORT = 3000;
const app = new Koa();

app.use(
  cors({
    credentials: true,
    origin: "*"
  })
);
app.use(routes);

app.listen(PORT, () => {
  console.log("Hello! this server is listening to port 3000");
});
