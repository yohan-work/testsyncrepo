---
kind: plan
taskId: "a48c34a9-7d37-4c19-b134-a9c949a83538"
projectKey: "0cb248013770"
title: "Plan: ## AI 코딩 에이전트 실행 프롬프트\n\n### 목표 (Objective)\nNext.js 환경에서 Tailwind CSS를 사용하여 더미 데이터"
summary: "표준 HTML 테이블과 로컬 Mock 데이터를 활용하여 Next.js App Router 환경에서 정적 이미지 갤러리 페이지를 구현합니다. TanStack Table이나 Prisma 사용을 엄격히 금지하고, Tailwind CSS를 적용하여 시각적 명확성과 빌드 안정성을 최우선으로 확보합니다. 클라이언트 컴포넌트의 필요성을 검토하여 Server Component 우선 전략을 따릅니다."
keywords:
  - "plan"
  - "workflow"
  - "software-engineer"
  - "qa"
  - "style-architect"
  - "database-administrator"
  - "code-mapper"
source: "Orchestrator.plan"
createdAt: "2026-04-07T09:18:01.272Z"
updatedAt: "2026-04-07T09:18:01.272Z"
---

## Workflow
1. [software-engineer] read_codebase
2. [style-architect] write_code
3. [software-engineer] write_code
4. [qa] verify_final_output

## Plan Review
- [product-manager] 요구사항 관점에서 이 작업은 "플랜 검토: ## AI 코딩 에이전트 실행 프롬프트

### 목표 (Objective)
Next.js 환경에서 Tailwind CSS를 사용하여 더미 데이터로 구성된 이미지 갤러리 페이지를 표준 HTML 테이블 구조를 활용하여 시각적으로 명확하게 구현한다.

### 맥락 및 요구사항 (Context & Requirements)
- [software-engineer] 구현 관점에서는 가장 단순한 경로를 우선해야 합니다. 새 추상화나 과한 분리는 나중에 검증된 뒤에만 도입하는 편이 안전합니다.
- [qa] 검증 관점에서는 실패 케이스와 경계값이 빠지기 쉽습니다. 핵심 흐름뿐 아니라 롤백, 빈 데이터, 잘못된 입력을 포함한 테스트가 필요합니다.
- [style-architect] UI 작업이라면 시각적 일관성과 컴포넌트 재사용성을 먼저 점검해야 합니다. 레이아웃 패턴이 기존 저장소의 규칙과 충돌하지 않는지도 확인이 필요합니다.
