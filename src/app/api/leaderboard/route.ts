import { NextRequest, NextResponse } from "next/server";

// In-memory leaderboard (would be from DB in production)
const leaderboard = [
  { rank: 1, name: "DopaKing", points: 5247, level: 7 },
  { rank: 2, name: "FashionGuru", points: 4218, level: 6 },
  { rank: 3, name: "JoyCollector", points: 3891, level: 6 },
  { rank: 4, name: "VirtualVIP", points: 3150, level: 5 },
  { rank: 5, name: "DopaQueen", points: 2890, level: 5 },
  { rank: 6, name: "WindowShopper", points: 2456, level: 4 },
  { rank: 7, name: "DreamBuyer", points: 2103, level: 4 },
  { rank: 8, name: "LuxuryDream", points: 1850, level: 4 },
  { rank: 9, name: "HappyBrowser", points: 1620, level: 3 },
  { rank: 10, name: "NewExplorer", points: 980, level: 2 },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10");

  return NextResponse.json({
    code: 0,
    data: {
      users: leaderboard.slice(0, limit),
      myRank: null,
    },
    message: "ok",
  });
}
