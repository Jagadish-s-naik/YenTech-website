import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function parseErrorCode(rawError: string): string {
  if (rawError.includes("INVALID_DOMAIN")) return "invalid_domain";
  if (rawError.includes("NOT_WHITELISTED")) return "not_whitelisted";
  if (
    rawError.includes("Database error saving new user") ||
    rawError.includes("unexpected_failure")
  ) {
    return "access_denied";
  }
  return "auth_failed";
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const errorParam = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // Handle direct OAuth Provider error redirects
  if (errorParam || errorDescription) {
    const rawError = errorDescription || errorParam || "";
    const errorCode = parseErrorCode(rawError);
    return NextResponse.redirect(`${origin}/auth/login?error=${errorCode}`);
  }

  // Require auth code to proceed
  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=auth_failed`);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    const errorCode = parseErrorCode(error.message);
    return NextResponse.redirect(`${origin}/auth/login?error=${errorCode}`);
  }

  // Check if authenticated user is an admin or standard member
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: isAdmin } = await supabase.rpc("is_admin");
    return NextResponse.redirect(`${origin}${isAdmin ? "/admin" : "/member"}`);
  }

  return NextResponse.redirect(`${origin}/auth/login?error=auth_failed`);
}
