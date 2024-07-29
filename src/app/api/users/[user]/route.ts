import * as userService from "@/db/services/user.service";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { user: number } }) {
  try {
    const user = await userService.getById(params.user);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
