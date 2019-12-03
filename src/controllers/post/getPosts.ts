import { Context } from 'koa';
import 'reflect-metadata';

import dbConn from 'utils/database';
import { Post } from 'entity/Post';

export default async (context: Context) => {
  const connection = await dbConn();
  const posts = await connection.manager.find(Post);
  context.body = posts;
};
