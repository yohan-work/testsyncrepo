---
name: api-standards
description: REST API 설계 표준과 Next.js Route Handler 패턴을 제공합니다. API 엔드포인트 설계, 구현 시 사용합니다. api-designer 에이전트와 함께 사용하세요.
---

# API 설계 표준 스킬

## RESTful 엔드포인트 규칙

| 작업 | 메서드 | 엔드포인트 | 예시 |
|------|--------|-----------|------|
| 목록 조회 | GET | /resources | /api/users |
| 단건 조회 | GET | /resources/:id | /api/users/123 |
| 생성 | POST | /resources | /api/users |
| 전체 수정 | PUT | /resources/:id | /api/users/123 |
| 부분 수정 | PATCH | /resources/:id | /api/users/123 |
| 삭제 | DELETE | /resources/:id | /api/users/123 |

## Next.js Route Handler 템플릿

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    
    const data = await fetchUsers({ page });
    
    return NextResponse.json({
      success: true,
      data,
      meta: { page, total: data.length }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 유효성 검사
    if (!body.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    const user = await createUser(body);
    
    return NextResponse.json(
      { success: true, data: user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
```

## 응답 형식

```typescript
// 성공 응답
interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: { page: number; total: number; };
}

// 에러 응답
interface ErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: Record<string, string>;
}
```

## HTTP 상태 코드

| 코드 | 의미 | 사용 |
|------|------|------|
| 200 | OK | 성공 (조회, 수정) |
| 201 | Created | 생성 성공 |
| 204 | No Content | 삭제 성공 |
| 400 | Bad Request | 잘못된 요청 |
| 401 | Unauthorized | 인증 필요 |
| 403 | Forbidden | 권한 없음 |
| 404 | Not Found | 리소스 없음 |
| 500 | Server Error | 서버 오류 |

## 사용 예시

```
api-designer 에이전트로 사용자 관리 API를 설계해줘
```
