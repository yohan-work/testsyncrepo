"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Handle successful login
      const data = await response.json();
      window.location.href = "/";
    } catch (error) {
      // Display error message to user
      console.error("Login failed:", error);
      alert("로그인 실패: 잘못된 이메일 주소 또는 비밀번호");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-2xl font-bold">로그인</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 w-full max-w-sm">
        <div className="space-y-1.5">
          <Label htmlFor="email">이메일 주소</Label>
          <Input id="email" type="email" name="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-1.5 relative">
          <Label htmlFor="password">비밀번호</Label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
      <Link href="/forgot-password" className="text-sm text-muted-foreground underline">
        비밀번호를 잊으셨나요?
      </Link>
    </main>
  );
};

export default LoginPage;