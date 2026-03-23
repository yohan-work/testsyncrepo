import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 소개',
  description: '우리 서비스의 AI 기술 및 활용 사례를 알아보세요.',
};

const sections = [
  {
    id: 'introduction',
    title: 'AI 소개 및 기본 개념',
    content: `
      인공지능(AI)은 컴퓨터가 인간처럼 정보를 처리하고 학습하며 문제를 해결하는 능력을 나타냅니다. AI는 딥러닝, 머신 러닝, 자연어 처리 등 다양한 분야에서 활용되고 있습니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 'use-cases',
    title: '우리 서비스의 AI 활용 사례',
    content: `
      우리의 서비스에서는 AI를 사용하여 고객의 요구에 맞는 개인화된 추천을 제공하고, 효율적인 작업 자동화를 도와줍니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 'advantages',
    title: 'AI 기술의 장점 및 차별점',
    content: `
      AI는 데이터 분석, 예측 모델링, 고객 서비스 등 다양한 분야에서 높은 효율성을 제공하며, 보다 정확한 결과를 얻을 수 있습니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 'considerations',
    title: 'AI 도입 시 고려 사항 (윤리, 보안 등)',
    content: `
      AI의 도입시에는 윤리적 문제와 보안 문제에 주의가 필요합니다. 데이터 보호 및 개인 정보 관리는 중요합니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 'future',
    title: '우리 서비스의 AI 미래 비전',
    content: `
      우리의 목표는 고객에게 가장 최적의 서비스를 제공하기 위해 AI 기술을 지속적으로 발전시킵니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 'faq',
    title: '고객 지원 및 FAQ',
    content: `
      궁금한 사항이 있으신가요? 언제든지 연락주세요. 고객 지원 담당자에게 문의하실 수 있습니다.
    `,
    image: 'https://dummyimage.com/600x400/000/fff',
  },
];

const AIPage = () => (
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">AI 소개</h1>
    {sections.map((section) => (
      <div key={section.id} id={section.id} className="mb-12">
        <img src={section.image} alt={section.title} className="w-full h-auto mb-4" />
        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
        <p>{section.content}</p>
      </div>
    ))}
  </div>
);

export default AIPage;