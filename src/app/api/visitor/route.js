import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const POST = async () => {
  const client = await clientPromise;
  const db = client.db();

  await db.collection("visitors").insertOne({
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
};