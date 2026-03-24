"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function IntroPage() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = new URLSearchParams(e.currentTarget).get("query") || "";
    if (searchQuery) {
      window.location.href = `/?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F0F0F0]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <form onSubmit={handleSearch} className="flex gap-4">
        <Input name="query" placeholder="검색어를 입력하세요" />
        <Button type="submit">검색</Button>
      </form>
    </main>
  );
}