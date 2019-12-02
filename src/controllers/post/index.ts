import Router from 'koa-router';
import getPosts from './getPosts';

const routes = new Router();
routes.get('/', getPosts);

export default routes;
