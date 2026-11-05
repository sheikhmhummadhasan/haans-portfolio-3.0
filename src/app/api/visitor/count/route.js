import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async () => {
  const client = await clientPromise;
  const db = client.db();

  const totalVisitors = await db
    .collection("visitors")
    .countDocuments();

  return NextResponse.json({ totalVisitors });
};