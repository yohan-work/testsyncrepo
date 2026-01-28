---
name: debugging-guide
description: 체계적인 디버깅 방법론과 도구 사용법을 제공합니다. 에러 분석, 버그 추적, 문제 해결 시 사용합니다. debugger 에이전트와 함께 사용하세요.
---

# 디버깅 가이드 스킬

## 디버깅 워크플로우

```
디버깅 진행 상황:
- [ ] 1단계: 문제 재현
- [ ] 2단계: 에러 정보 수집
- [ ] 3단계: 가설 수립
- [ ] 4단계: 원인 격리
- [ ] 5단계: 수정 및 검증
```

## 1단계: 문제 재현

```bash
# 에러 로그 확인
npm run dev 2>&1 | tee debug.log

# 최근 변경사항 확인
git log --oneline -10
git diff HEAD~3
```

## 2단계: 에러 정보 수집

**수집할 정보:**
- 에러 메시지 전문
- 스택 트레이스
- 재현 조건 (입력값, 환경)
- 발생 시점 (언제부터?)

## 3단계: 가설 수립

| 증상 | 가능한 원인 |
|------|------------|
| TypeError | null/undefined 접근, 타입 불일치 |
| ReferenceError | 미선언 변수, import 누락 |
| 무한 루프 | 종료 조건 오류, 의존성 순환 |
| 메모리 누수 | 이벤트 리스너 미해제, 클로저 |

## 4단계: 원인 격리

```typescript
// 디버그 로깅 추가
console.log('[DEBUG] 함수 진입:', { params });
console.log('[DEBUG] 상태:', JSON.stringify(state, null, 2));
console.log('[DEBUG] 결과:', result);
```

## 5단계: 수정 및 검증

```bash
# 수정 후 테스트
npm test -- --watch

# 관련 테스트만 실행
npm test -- --grep "관련키워드"
```

## React/Next.js 특화 디버깅

| 문제 | 확인 사항 |
|------|----------|
| Hydration 오류 | 서버/클라이언트 렌더링 차이 |
| 무한 리렌더링 | useEffect 의존성 배열 |
| 상태 미반영 | 불변성 위반, 비동기 처리 |

## 사용 예시

```
debugger 에이전트로 이 TypeError를 분석해줘
```
