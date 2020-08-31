import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

const client = new MongoClient();
client.connectWithUri(
  "mongodb+srv://markokg102:2cfznMyBko3VXR90@cluster0.5zffr.mongodb.net/test?retryWrites=true&w=majority",
);
// Defining schema interface
interface UserSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

const db = client.database("test");
const users = db.collection<UserSchema>("users");

// insert
const insertId = await users.insertOne({
  username: "user1",
  password: "pass1",
});
