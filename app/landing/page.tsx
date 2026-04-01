import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const data = [
  {
    id: 1,
    featureName: "코드 자동 완성",
    featureDescription: "Claude 코드를 기반으로 코드 자동 완성 기능을 제공하여 생산성을 향상시킵니다.",
    icon: "🎨",
    detailsLink: "/details/feature-1"
  },
  {
    id: 2,
    featureName: "실시간 코드 분석",
    featureDescription: "Claude 코드를 실시간으로 분석하여 잠재적인 오류를 찾아냅니다.",
    icon: "🔍",
    detailsLink: "/details/feature-2"
  },
  {
    id: 3,
    featureName: "코드 공유 및 협업",
    featureDescription: "Claude 코드를 쉽게 공유하고 협업하여 개발 효율성을 높입니다.",
    icon: "🤝",
    detailsLink: "/details/feature-3"
  }
];

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-950 text-white">
      <header className="text-2xl font-bold mb-8">Claude Code 설명</header>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">메인 소개</h2>
        <p>코드 자동 완성, 실시간 코드 분석, 코드 공유 및 협업 등 다양한 기능을 제공합니다.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">주요 기능</h2>
        <table className="w-full border-collapse border border-zinc-800">
          <thead className="bg-zinc-950">
            <tr>
              <th className="border p-3 text-left">기능 이름</th>
              <th className="border p-3 text-left">설명</th>
              <th className="border p-3 text-center">자세히 보기</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-zinc-800">
                <td className="border p-3">{item.featureName}</td>
                <td className="border p-3">{item.featureDescription}</td>
                <td className="border p-3 text-center">
                  <Link href={item.detailsLink}>
                    <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">자세히 보기</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default LandingPage;