import { Context } from 'koa';
import 'reflect-metadata';

import dbConn from 'utils/database';
import { Post } from 'entity/Post';
import { response } from 'utils/httpUtils';

export default async (context: Context) => {
  const connection = await dbConn();
  const posts = await connection.manager.find(Post);
  response(context, posts);
};
