import { NextResponse } from "next/server";
import Stats from "@/model/stats";
import dbConnect from "../../../lib/dbConnect";
export async function GET(params) {
  dbConnect();
  try {
    const visitorNumber = await Stats.find().lean();
    let { totalVisits, uniqueVisitors } = visitorNumber[0];
  
    return NextResponse.json({ success: true, totalVisits, uniqueVisitors });
  } catch (error) {
    console.log("Error:", Error);
  }
}
