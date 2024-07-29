import * as userService from "@/db/services/user.service";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await userService.getAll();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
