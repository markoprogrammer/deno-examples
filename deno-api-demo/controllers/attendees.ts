import { Collection } from "https://deno.land/x/mongo@v0.11.1/ts/collection.ts";
import db from "../db/db.ts";

interface AttendeeSchema {
  _id: { $oid: string };
  name: string;
  email: string;
  age: number;
}

const attendeesCollections = db.collection<AttendeeSchema>("users");

export const addAttendee = async (context: any) => {
  try {
    let body: any = await context.request.body();
    const { name, email, age } = await body.value;
    const id = await attendeesCollections.insertOne({
      name: name,
      email: email,
      age: age,
    });

    context.response.body = { _id: id.$oid };
    context.response.status = 201;

  } catch (error) {
    context.response.body = null;
    context.response.status = 500;
    console.log(error);
  }
};

export const getAttendees = async (context: any) => {
  try {
    const attendees = await attendeesCollections.find();
    context.response.body = attendees
      .map(item => ({ ...item, _id: item._id.$oid }));
    context.response.status = 201;

  } catch (error) {
    context.response.body = null;
    context.response.status = 500;
    console.log(error);
  }
};
