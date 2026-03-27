"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TestPage() {
    const handleClick = () => {
        console.log("버튼 클릭 이벤트 발생");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">테스트 페이지</h1>
            <p className="mt-4 text-lg text-gray-700">이 페이지는 테스트를 위한 페이지입니다. 인터랙션을 통해 작동을 확인하십시오.</p>
            <button
                onClick={handleClick}
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
                클릭하세요
            </button>
            <Image src="/test-image.png" alt="Test Image" width={100} height={100} className="mt-8" />
        </div>
    );
}