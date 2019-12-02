require('dotenv').config();

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
