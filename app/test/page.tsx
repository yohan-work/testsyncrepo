"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function TestPage() {
  const [bgColor, setBgColor] = useState<string>("bg-white");

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  useEffect(() => {
    changeBackgroundColor();
  }, []);

  return (
    <main
      className={`flex items-center justify-center min-h-screen ${bgColor}`}
    >
      <div>
        <h1 className="text-4xl font-bold mb-8">테스트 페이지</h1>
        <p className="text-lg">
          이는 테스트 페이지입니다. 다양한 기능을 테스트하고 Next.js 앱 라우터의 작동을 확인하기 위한 페이지입니다.
        </p>
        <Button onClick={changeBackgroundColor} className="mt-4">
          클릭하세요!
        </Button>
      </div>
    </main>
  );
}