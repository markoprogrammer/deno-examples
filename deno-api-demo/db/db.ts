import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

const mongoClient = new MongoClient();

mongoClient.connectWithUri(
  "mongodb+srv://markokg102:2j3JwbOOq1CQoBPA@cluster0.5zffr.mongodb.net/test?retryWrites=true&w=majority",
);

const db = mongoClient.database("quantoxConf");

export default db;
