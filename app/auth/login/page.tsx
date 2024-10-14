"use client";

import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockIcon, LogInIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <LockIcon className="w-12 h-12 text-primary mb-4" />
          <Button
            className="w-full max-w-xs"
            onClick={(e) => {
              e.preventDefault();
              signIn("google", { callbackUrl: "/blog" });
            }}
          >
            <LogInIcon className="mr-2 h-4 w-4" /> Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
