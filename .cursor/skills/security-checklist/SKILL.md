---
name: security-checklist
description: 웹 애플리케이션 보안 체크리스트와 취약점 점검 가이드를 제공합니다. 보안 감사, 취약점 분석 시 사용합니다. security-auditor 에이전트와 함께 사용하세요.
---

# 보안 체크리스트 스킬

## OWASP Top 10 점검

```
보안 점검 체크리스트:
- [ ] A01: 접근 제어 취약점
- [ ] A02: 암호화 실패
- [ ] A03: 인젝션 (SQL, XSS)
- [ ] A04: 안전하지 않은 설계
- [ ] A05: 보안 설정 오류
- [ ] A06: 취약한 컴포넌트
- [ ] A07: 인증 실패
- [ ] A08: 데이터 무결성 실패
- [ ] A09: 로깅/모니터링 실패
- [ ] A10: SSRF
```

## XSS 방지

```typescript
// ❌ 위험
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ 안전 - React가 자동 이스케이프
<div>{userInput}</div>

// ✅ 필요시 DOMPurify 사용
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
```

## SQL Injection 방지

```typescript
// ❌ 위험 - 문자열 연결
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ 안전 - 파라미터화된 쿼리
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

## 인증/인가

```typescript
// 미들웨어에서 인증 검사
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  
  if (!token && request.nextUrl.pathname.startsWith('/api/protected')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}
```

## 환경 변수 관리

```bash
# .env.local (git 제외)
DATABASE_URL=postgresql://...
JWT_SECRET=super-secret-key

# 클라이언트 노출 변수만 NEXT_PUBLIC_ 접두사
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 보안 헤더

```typescript
// next.config.js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];
```

## 취약점 보고 형식

```markdown
### [심각도] 취약점 제목

**위치**: 파일명:라인
**유형**: XSS / SQLi / CSRF 등
**영향**: 공격 시나리오
**수정**: 권장 수정 방법
```

## 사용 예시

```
security-auditor 에이전트로 이 코드의 보안 취약점을 점검해줘
```
