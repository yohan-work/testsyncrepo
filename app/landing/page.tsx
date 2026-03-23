import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="mt-10">
        <img src="/logo.png" alt="Cursor IDE Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold mt-2">Cursor IDE</h1>
        <p className="text-xl text-gray-600 mt-2">코드 작성의 새로운 기준</p>
      </header>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-4">주요 기능 소개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src="/features/auto-complete.png" alt="실시간 코드 완성" width={100} height={100} />
            <h3>실시간 코드 완성</h3>
            <p>효율적인 코드 작성을 위한 실시간 자동완성 기능입니다.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/features/integrated-debugging.png" alt="통합 디버깅" width={100} height={100} />
            <h3>통합 디버깅</h3>
            <p>단순한 디버깅이 아니라, 복잡한 코드를 한눈에 파악할 수 있는 통합 디버깅 기능입니다.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/features/collaboration.png" alt="협업 기능" width={100} height={100} />
            <h3>협업 기능</h3>
            <p>팀원들과 실시간으로 코드를 공유하고 수정할 수 있는 협업 기능입니다.</p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-4">데모 영상</h2>
        <video controls autoPlay loop muted>
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <footer className="mt-20">
        <div>
          <Link href="https://www.cursoride.com" target="_blank">https://www.cursoride.com</Link>
        </div>
        <div className="text-gray-600 mt-2">
          © 2024 Cursor IDE. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;