"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("member");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/member");
      }
    }, 1500);
  };

  return (
    <div className="bg-muted/20 flex min-h-screen items-center justify-center p-4">
      <div className="from-primary/5 to-primary/10 absolute inset-0 -z-10 bg-gradient-to-br via-transparent" />

      <Card className="border-primary/20 bg-background/60 hover:shadow-primary/10 w-full max-w-md shadow-lg backdrop-blur-xl transition-all duration-300">
        <CardHeader className="space-y-2 pb-6 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Create an Account
          </CardTitle>
          <CardDescription>
            Join YenTech to access exclusive features and content
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="member" onValueChange={setRole} className="w-full">
          <div className="px-6 pb-4">
            <TabsList className="bg-muted/50 grid w-full grid-cols-2">
              <TabsTrigger value="member">Member</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </div>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus-visible:ring-primary/50"
                />
              </div>
              <Button
                type="submit"
                className="mt-6 w-full shadow-md transition-all hover:shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </CardContent>
        </Tabs>

        <CardFooter className="border-muted/50 flex flex-col items-center border-t pt-6">
          <div className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-medium transition-colors hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
