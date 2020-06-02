import Router from "koa-router";
import posts from "./controllers/posts";
import post from "./controllers/post";
import tags from "./controllers/tags";

const router = new Router();

router.get("/posts/:page/:tag?", posts);
router.get("/post/:id", post);
router.get("/tags/", tags);

export default router.routes();
