import Router from 'koa-router';
import postRoutes from './controllers/post';

const routes = new Router();

routes.use('/post', postRoutes.routes());
export default routes;
