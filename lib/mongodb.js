import { MongoClient } from "mongodb";

const DB_NAME = "portfolio";

// Cache the connection on the global object so dev-mode hot reloads
// (which re-evaluate this module) reuse one client instead of opening
// a fresh pool of Mongo connections on every request.
const globalForMongo = globalThis;

function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(uri);
    globalForMongo._mongoClientPromise = client.connect();
  }

  return globalForMongo._mongoClientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(DB_NAME);
}

export async function getAssetsCollection() {
  const db = await getDb();
  return db.collection("assets");
}
