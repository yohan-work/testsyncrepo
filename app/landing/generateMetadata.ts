import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Cursor IDE - 코드 작성의 새로운 기준',
    description: '실시간 코드 완성, 통합 디버깅, 협업 기능을 갖춘 코드 편집기입니다.',
    openGraph: {
      images: ['/logo.png'],
    },
  };
};