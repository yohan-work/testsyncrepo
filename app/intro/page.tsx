"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IntroPage = () => {
  const [appleTypes, setAppleTypes] = useState<{ name: string; description: string; imageSrc: string }[]>([]);

  useEffect(() => {
    const fetchAppleTypes = async () => {
      try {
        const response = await fetch("https://api.example.com/apple-types");
        if (!response.ok) throw new Error("Failed to fetch apple types");

        const data = await response.json();
        setAppleTypes(data);
      } catch (error) {
        console.error("Error fetching apple types:", error);
      }
    };

    fetchAppleTypes();
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans p-4 m-4 rounded-xl shadow-md flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">사과, 자연의 맛을 담은 선물</h1>
      <p className="mb-4">사과는 뛰어난 항산화 효과를 가진 비타민 C가 풍부하며, 소화를 돕는 식이섬유도 풍부합니다. 홍옥, 부사, 아차르 등 다양한 품종이 각기 다른 맛과 영양을 제공합니다.</p>
      <div className="flex gap-4 mb-4">
        {appleTypes.map((type) => (
          <Image key={type.name} src={type.imageSrc} alt={type.name} width={100} height={100} />
        ))}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">더 자세히 알아보기</button>
    </div>
  );
};

export default IntroPage;