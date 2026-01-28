---
name: performance-audit
description: 웹 성능 측정 및 최적화 가이드를 제공합니다. 렌더링 성능, 번들 크기, Core Web Vitals 개선 시 사용합니다. performance-optimizer 에이전트와 함께 사용하세요.
---

# 성능 감사 스킬

## 성능 점검 체크리스트

```
성능 감사 항목:
- [ ] Core Web Vitals 측정
- [ ] 번들 크기 분석
- [ ] 이미지 최적화 확인
- [ ] 코드 스플리팅 적용
- [ ] 캐싱 전략 검토
- [ ] 서버 컴포넌트 활용
```

## Core Web Vitals 기준

| 지표 | Good | Needs Improvement | Poor |
|------|------|-------------------|------|
| LCP | < 2.5s | 2.5s - 4s | > 4s |
| FID | < 100ms | 100ms - 300ms | > 300ms |
| CLS | < 0.1 | 0.1 - 0.25 | > 0.25 |

## 번들 분석

```bash
# 번들 크기 분석
npx @next/bundle-analyzer

# 또는 package.json에 추가
ANALYZE=true npm run build
```

```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
```

## React 최적화

```typescript
// 1. 메모이제이션
const MemoizedComponent = memo(ExpensiveComponent);
const memoizedValue = useMemo(() => compute(data), [data]);
const memoizedHandler = useCallback(() => action(id), [id]);

// 2. 동적 임포트
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // 클라이언트만
});

// 3. 가상화 (긴 목록)
import { FixedSizeList } from 'react-window';
<FixedSizeList height={400} itemCount={1000} itemSize={50}>
  {Row}
</FixedSizeList>
```

## Next.js 최적화

```typescript
// 이미지 최적화
import Image from 'next/image';
<Image
  src="/hero.jpg"
  width={800}
  height={400}
  priority // LCP 이미지
  placeholder="blur"
/>

// 폰트 최적화
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

## 캐싱 전략

```typescript
// 정적 데이터
fetch(url, { cache: 'force-cache' });

// 동적 데이터
fetch(url, { cache: 'no-store' });

// ISR (Incremental Static Regeneration)
fetch(url, { next: { revalidate: 60 } });
```

## 성능 보고 형식

```markdown
## 성능 분석 결과

### 측정값
- LCP: X.Xs (목표: < 2.5s)
- FID: Xms (목표: < 100ms)
- 번들 크기: XKB

### 개선 필요 항목
1. [항목] - 예상 개선: X%
2. [항목] - 예상 개선: X%

### 권장 조치
- 구체적 개선 방법
```

## 사용 예시

```
performance-optimizer 에이전트로 이 페이지의 성능을 분석해줘
```
