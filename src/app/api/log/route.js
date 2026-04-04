import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Visitor from "@/model/visitor";
import Stats from "@/model/stats";

export async function POST(request) {
  try {
    await dbConnect();

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const userAgent = request.headers.get("user-agent") || "";

    // 🚫 Basic bot filter
    if (/bot|crawl|spider|vercel-screenshot/i.test(userAgent)) {
      return NextResponse.json({ bot: true });
    }

    // check if visitor already exists

    const existingVisitor = await Visitor.findOne({ ip });

    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats({});
      await stats.save();
    }
    stats.totalVisits++;
    if (!existingVisitor) {
      await Visitor.create({ ip, userAgent });
      stats.uniqueVisitors++;
    }
    await stats.save();

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Database unavailable" },
      { status: 503 },
    );
  }
}
