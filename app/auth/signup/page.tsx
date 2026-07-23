"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  AlertCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  CheckCircle2,
} from "lucide-react";

function SignupForm() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail.endsWith("@yenepoya.edu.in")) {
      setErrorMessage("Only @yenepoya.edu.in email addresses are permitted.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      // First check if campus ID is whitelisted via RPC
      const { data: status, error: statusErr } = await supabase.rpc(
        "check_member_status",
        { p_email: cleanEmail },
      );

      if (statusErr) {
        setErrorMessage(statusErr.message);
        setIsLoading(false);
        return;
      }

      if (status && typeof status === "object") {
        const s = status as { valid_domain: boolean; whitelisted: boolean };
        if (!s.whitelisted) {
          setErrorMessage(
            "Your campus ID is not pre-authorized. Please contact the administrator to get whitelisted.",
          );
          setIsLoading(false);
          return;
        }
      }

      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: fullName.trim() || undefined,
            },
          },
        });

      if (signUpError) {
        setErrorMessage(signUpError.message);
        setIsLoading(false);
        return;
      }

      if (signUpData?.user) {
        if (signUpData.session) {
          // Auto signed in
          router.push("/member");
        } else {
          // Email confirmation required or sign up successful
          setSuccessMessage(
            "Account created successfully! Please check your email to confirm your account or log in.",
          );
        }
      }
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-border/60 bg-background/80 w-full max-w-md border backdrop-blur-xl">
      <CardHeader className="space-y-4 py-4 text-center">
        <div className="flex items-center justify-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img src="/yentech.svg" alt="YenTech Logo" className="h-8 w-8" />
            <span className="font-heading text-foreground text-xl font-bold tracking-widest uppercase transition-colors hover:text-[#0CBAA6]">
              YENTECH
            </span>
          </Link>
        </div>

        <div className="space-y-1">
          <CardTitle className="font-heading text-2xl font-bold tracking-tight">
            Create Account
          </CardTitle>
          <CardDescription className="text-xs">
            Sign up with your pre-authorized @yenepoya.edu.in email
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-4">
        <div className="space-y-5">
          {/* Google SSO Button */}
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignup}
            disabled={isLoading}
            className="border-muted-foreground/20 hover:bg-muted/50 hover:text-foreground flex h-11 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border text-sm font-semibold transition-all duration-200"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Sign up with Google
          </Button>

          <div className="relative flex items-center justify-center py-2">
            <div className="border-border w-full border-t"></div>
            <span className="bg-background text-muted-foreground absolute px-3 text-xs font-semibold tracking-wider uppercase">
              Or credentials
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-xs font-medium">
                Full Name
              </Label>
              <div className="relative">
                <User className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50 h-11 pl-10 text-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="email"
                  type="email"
                  placeholder="campusID@yenepoya.edu.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50 h-11 pl-10 text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50 h-11 pr-10 pl-10 text-sm"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 p-1 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-xs font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50 h-11 pr-10 pl-10 text-sm"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="mt-6 h-11 w-full cursor-pointer text-sm font-semibold transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="text-muted-foreground pt-2 text-center text-xs">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-medium transition-colors hover:underline"
            >
              Sign In
            </Link>
          </div>

          {errorMessage && (
            <div className="border-destructive/30 bg-destructive/10 text-destructive mt-4 flex items-center gap-2.5 rounded-xl border p-3.5 text-xs font-medium">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-xs font-medium text-green-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SignupPage() {
  return (
    <div className="bg-muted/20 flex min-h-screen items-center justify-center p-4">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <Loader2 className="text-primary h-8 w-8 animate-spin" />
          </div>
        }
      >
        <SignupForm />
      </Suspense>
    </div>
  );
}
