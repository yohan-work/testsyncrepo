import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Code 설명',
  description: 'Claude 코드의 핵심 기능과 장점을 명확하게 설명하는 반응형 랜딩 페이지입니다.',
};

const LandingPageServer = () => {
  return <div>Server-side only content</div>;
};

export default LandingPageServer;