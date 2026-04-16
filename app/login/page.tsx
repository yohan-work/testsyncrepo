"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // 예시: UI 컴포넌트 사용
import { Input } from "@/components/ui/input";    // 예시: UI 컴포넌트 사용

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", { username, password });
  };

  return (
    <div className="bg-zinc-950 flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md px-8 py-12 space-y-6 bg-zinc-800 rounded-lg shadow-lg"
      >
        <h2 className="text-white text-xl font-bold">로그인</h2>
        <div className="relative">
          {/* <Label htmlFor="username" className="absolute left-3 top-4 text-zinc-400">
            사용자 이름 또는 이메일
          </Label> */}
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름@example.com"
            className="w-full px-3 py-2 border rounded-lg bg-zinc-700 text-white focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="relative">
          {/* <Label htmlFor="password" className="absolute left-3 top-4 text-zinc-400">
            비밀번호
          </Label> */}
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full px-3 py-2 border rounded-lg bg-zinc-700 text-white focus:outline-none focus:border-indigo-600"
          />
        </div>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
          로그인
        </Button>
      </form>
    </div>
  );
}