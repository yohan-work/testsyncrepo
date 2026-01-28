---
name: git-workflow
description: Git 브랜치 전략과 커밋 컨벤션을 제공합니다. 브랜치 관리, 커밋 메시지 작성, PR 생성 시 사용합니다. git-manager 에이전트와 함께 사용하세요.
---

# Git 워크플로우 스킬

## 브랜치 전략 (GitHub Flow)

```
main (production)
  └── feature/기능명
  └── bugfix/이슈번호
  └── hotfix/긴급수정
```

## 브랜치 명명 규칙

| 타입 | 패턴 | 예시 |
|------|------|------|
| 기능 | feature/기능명 | feature/user-auth |
| 버그 | bugfix/이슈번호 | bugfix/issue-123 |
| 긴급 | hotfix/설명 | hotfix/login-crash |
| 릴리스 | release/버전 | release/v1.2.0 |

## 커밋 메시지 컨벤션

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

| Type | 설명 |
|------|------|
| feat | 새로운 기능 |
| fix | 버그 수정 |
| docs | 문서 변경 |
| style | 코드 스타일 (포맷팅) |
| refactor | 리팩토링 |
| test | 테스트 추가/수정 |
| chore | 빌드, 설정 변경 |

### 예시

```
feat(auth): 소셜 로그인 기능 추가

Google, GitHub OAuth 로그인 구현
- OAuth 콜백 핸들러 추가
- 사용자 프로필 연동

Closes #123
```

## 일반적인 Git 작업

```bash
# 새 기능 브랜치 생성
git checkout -b feature/new-feature

# 변경사항 스테이징
git add .

# 커밋
git commit -m "feat(scope): description"

# 원격에 푸시
git push -u origin feature/new-feature

# PR 생성
gh pr create --title "feat: 새 기능" --body "설명"
```

## 충돌 해결

```bash
# 최신 main 가져오기
git fetch origin main

# 리베이스
git rebase origin/main

# 충돌 해결 후
git add .
git rebase --continue

# 강제 푸시 (주의!)
git push --force-with-lease
```

## PR 체크리스트

```markdown
## 변경 사항
- [ ] 기능 설명

## 테스트
- [ ] 로컬 테스트 완료
- [ ] 기존 테스트 통과

## 리뷰 요청
- [ ] 코드 리뷰 필요 사항
```

## 사용 예시

```
git-manager 에이전트로 이 변경사항에 대한 커밋 메시지를 작성해줘
```
