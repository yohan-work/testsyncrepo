---
name: react-patterns
description: React와 Next.js 개발 패턴 및 베스트 프랙티스를 제공합니다. 컴포넌트 설계, 상태 관리, 훅 사용 시 참고합니다. frontend-developer 에이전트와 함께 사용하세요.
---

# React 패턴 스킬

## 컴포넌트 구조

```typescript
// 권장 컴포넌트 구조
'use client'; // 필요시

import { useState, useCallback } from 'react';
import styles from './Component.module.css';

interface ComponentProps {
  /** prop 설명 */
  required: string;
  optional?: number;
}

export const Component = ({ required, optional = 0 }: ComponentProps) => {
  // 1. 상태 선언
  const [state, setState] = useState('');
  
  // 2. 파생 상태
  const derived = useMemo(() => compute(state), [state]);
  
  // 3. 이벤트 핸들러
  const handleClick = useCallback(() => {
    setState('new');
  }, []);
  
  // 4. 렌더링
  return <div className={styles.container}>{required}</div>;
};
```

## 훅 사용 패턴

### Custom Hook 추출

```typescript
// hooks/useForm.ts
export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  
  const handleChange = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const reset = useCallback(() => setValues(initialValues), [initialValues]);
  
  return { values, errors, handleChange, reset, setErrors };
}
```

### 의존성 배열 규칙

| 상황 | 의존성 |
|------|--------|
| 마운트 시 1회 | `[]` |
| 특정 값 변경 시 | `[value]` |
| 매 렌더링 시 | 생략 (비권장) |

## Next.js App Router 패턴

### Server vs Client Component

```
Server Component (기본):
✅ 데이터 페칭
✅ 백엔드 리소스 접근
✅ 민감 정보 처리

Client Component ('use client'):
✅ 이벤트 핸들러
✅ useState, useEffect
✅ 브라우저 API
```

### 데이터 페칭

```typescript
// Server Component에서 직접 fetch
async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store', // 동적
    // next: { revalidate: 60 } // ISR
  });
  return <Component data={data} />;
}
```

## 성능 최적화 패턴

```typescript
// 메모이제이션
const MemoizedChild = memo(Child);
const memoizedValue = useMemo(() => expensive(a, b), [a, b]);
const memoizedFn = useCallback(() => handle(id), [id]);

// 동적 임포트
const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
});
```

## 사용 예시

```
frontend-developer 에이전트로 이 컴포넌트를 React 패턴에 맞게 개선해줘
```
