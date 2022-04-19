import { Db, MongoClient } from "mongodb";

let cachedDb: Db;

export async function dbConnect() {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(process.env.MONGODB!);
  const db = client.db(process.env.MONGODB_NAME);
  cachedDb = db;
  return db;
}
