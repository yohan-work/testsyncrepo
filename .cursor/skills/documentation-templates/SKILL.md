---
name: documentation-templates
description: 프로젝트 문서 작성 템플릿을 제공합니다. README, API 문서, 컴포넌트 문서 작성 시 사용합니다. documentation-writer 에이전트와 함께 사용하세요.
---

# 문서 템플릿 스킬

## README.md 템플릿

```markdown
# 프로젝트명

프로젝트 한 줄 설명

## 주요 기능

- 기능 1
- 기능 2
- 기능 3

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS

## 시작하기

### 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

\`\`\`bash
git clone https://github.com/user/repo.git
cd repo
npm install
\`\`\`

### 환경 설정

\`\`\`bash
cp .env.example .env.local
# .env.local 파일 수정
\`\`\`

### 실행

\`\`\`bash
npm run dev
\`\`\`

http://localhost:3000 에서 확인

## 프로젝트 구조

\`\`\`
app/
├── components/   # 재사용 컴포넌트
├── api/          # API 라우트
├── (routes)/     # 페이지 라우트
└── lib/          # 유틸리티
\`\`\`

## 라이선스

MIT License
```

## 컴포넌트 문서 템플릿

```markdown
# ComponentName

컴포넌트 설명

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | string | - | 필수 prop 설명 |
| optional | number | 0 | 선택 prop 설명 |

## 사용 예시

\`\`\`tsx
import { ComponentName } from '@/components/ComponentName';

<ComponentName required="value" optional={10} />
\`\`\`

## 변형

### Primary

\`\`\`tsx
<ComponentName variant="primary" />
\`\`\`

### Secondary

\`\`\`tsx
<ComponentName variant="secondary" />
\`\`\`
```

## API 문서 템플릿

```markdown
# API 엔드포인트

## POST /api/auth/login

사용자 로그인

### Request

\`\`\`json
{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

### Response

**Success (200)**
\`\`\`json
{
  "success": true,
  "data": {
    "token": "jwt-token",
    "user": { "id": 1, "email": "user@example.com" }
  }
}
\`\`\`

**Error (401)**
\`\`\`json
{
  "success": false,
  "error": "Invalid credentials"
}
\`\`\`
```

## CHANGELOG 템플릿

```markdown
# Changelog

## [1.0.0] - 2025-01-28

### Added
- 새로운 기능

### Changed
- 변경된 기능

### Fixed
- 수정된 버그

### Removed
- 제거된 기능
```

## 사용 예시

```
documentation-writer 에이전트로 이 프로젝트의 README를 작성해줘
```
