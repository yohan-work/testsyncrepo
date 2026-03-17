export interface DummyData {
  heroSection: {
    title: string;
    description: string;
    imageUrl: string;
  };
  featureSection: {
    title: string;
    features: {
      name: string;
      description: string;
      imageUrl: string;
    }[];
  };
  faqSection: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

export const dummyData: DummyData = {
  heroSection: {
    title: "새로운 서비스 소개",
    description: "당신의 일상을 훨씬 쉽고 빠르게 만드는 새로운 서비스를 만나보세요.",
    imageUrl: "https://via.placeholder.com/1200x400"
  },
  featureSection: {
    title: "핵심 기능",
    features: [
      {
        name: "빠른 처리",
        description: "당신의 일감을 빠르고 효과적으로 관리할 수 있습니다.",
        imageUrl: "https://via.placeholder.com/300x200"
      },
      {
        name: "유연성",
        description: "다양한 사용자 경험을 제공하여 모든 사용자가 최적의 결과를 얻을 수 있습니다.",
        imageUrl: "https://via.placeholder.com/300x200"
      },
      {
        name: "보안",
        description: "당신의 데이터는 항상 안전하게 보호됩니다.",
        imageUrl: "https://via.placeholder.com/300x200"
      }
    ]
  },
  faqSection: {
    title: "FAQ",
    questions: [
      {
        question: "무엇이 새로운 서비스인가요?",
        answer: "새로운 서비스는 당신의 일상을 훨씬 쉽고 빠르게 만드는 데 도움을 줍니다."
      },
      {
        question: "이 서비스는 어떻게 사용하나요?",
        answer: "서비스를 시작하려면 간단한 단계를 따르세요. 자세한 지침은 가이드라인에 나 있습니다."
      }
    ]
  }
};