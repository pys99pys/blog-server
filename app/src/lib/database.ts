import { createConnection, getConnectionManager } from "typeorm";
import dotenv from "dotenv";
import Post from "../entity/post";
import Tag from "../entity/tag";
import TagRelation from "../entity/tagRelation";

dotenv.config();

export default async () => {
  try {
    return await createConnection({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      username: "root",
      password: process.env.DATABASE_PASSWORD,
      port: 3306,
      database: "blog",
      entities: [Post, Tag, TagRelation],
      synchronize: true,
      logging: false,
    });
  } catch (error) {
    if (error.name === "AlreadyHasActiveConnectionError") {
      return getConnectionManager().get("default");
    }
    throw Error(error);
  }
};
