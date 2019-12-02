import { createConnection } from 'typeorm';
import 'reflect-metadata';

import { Post } from 'entity/Post';

export default async () => {
  try {
    return await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      port: 3306,
      database: 'blog',
      entities: [Post],
      synchronize: true,
      logging: false,
    });
  } catch (e) {
    throw Error(e);
  }
};
