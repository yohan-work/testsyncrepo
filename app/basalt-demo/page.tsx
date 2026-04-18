"use client";

import type { CSSProperties } from "react";

const cards = [
  {
    title: "요청을 작업 단위로 정리",
    body: "짧은 UI 요청도 계획, 실행, 검증, 정리 흐름으로 나누어 관리합니다.",
  },
  {
    title: "AI 역할 분담",
    body: "분석, 구현, QA 담당 agent가 단계별로 협업하는 구조를 보여줍니다.",
  },
  {
    title: "결과와 근거를 보존",
    body: "변경 파일, 실행 로그, 검증 결과를 남겨 리뷰와 공유에 활용합니다.",
  },
];

const steps = ["Request", "Plan", "Dev", "Test", "Review"];

export default function BasaltDemoLandingPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Basalt</p>
        <h1 style={styles.title}>프론트엔드 요청을 계획부터 검증까지 연결합니다</h1>
        <p style={styles.lead}>
          Basalt는 단순 코드 생성기가 아니라, 요청을 계획하고 실행하며 검증 결과까지 남기는
          프론트엔드 작업 관리 서비스입니다.
        </p>
        <div style={styles.actions}>
          <a href="#workflow" style={styles.primaryAction}>작업 흐름 살펴보기</a>
          <a href="#proof" style={styles.secondaryAction}>검증 결과 보기</a>
        </div>
      </section>

      <section id="workflow" style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.eyebrow}>Workflow</p>
          <h2 style={styles.heading}>하나의 요청이 완료되기까지</h2>
        </div>
        <div style={styles.steps}>
          {steps.map((step, index) => (
            <div key={step} style={styles.step}>
              <span style={styles.stepIndex}>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardBody}>{card.body}</p>
          </article>
        ))}
      </section>

      <section id="proof" style={styles.proof}>
        <div>
          <p style={styles.eyebrow}>Delivery Proof</p>
          <h2 style={styles.heading}>작업 결과에서 확인할 수 있는 것</h2>
        </div>
        <ul style={styles.proofList}>
          <li>태스크 생성과 칸반 상태 이동</li>
          <li>AI workflow와 단계별 실행 로그</li>
          <li>실제 파일 변경 내역과 diff</li>
          <li>QA 검수 완료 메타데이터</li>
        </ul>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f8fb",
    color: "#151922",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    minHeight: "72vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "72px min(8vw, 96px)",
    background: "linear-gradient(135deg, #ffffff 0%, #eef4ff 52%, #e8f7f1 100%)",
    borderBottom: "1px solid #dfe5ef",
  },
  eyebrow: {
    margin: 0,
    color: "#2563eb",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 840,
    margin: "18px 0 0",
    fontSize: 56,
    lineHeight: 1.05,
    letterSpacing: 0,
  },
  lead: {
    maxWidth: 720,
    margin: "24px 0 0",
    color: "#4b5563",
    fontSize: 20,
    lineHeight: 1.7,
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 34,
  },
  primaryAction: {
    background: "#2563eb",
    color: "#ffffff",
    padding: "13px 18px",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: 700,
  },
  secondaryAction: {
    background: "#ffffff",
    color: "#111827",
    padding: "13px 18px",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #d1d5db",
  },
  section: {
    padding: "56px min(8vw, 96px) 24px",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  heading: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 12,
    marginTop: 28,
  },
  step: {
    background: "#ffffff",
    border: "1px solid #dfe5ef",
    borderRadius: 8,
    padding: 18,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  stepIndex: {
    width: 30,
    height: 30,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    background: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 800,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
    padding: "24px min(8vw, 96px) 56px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #dfe5ef",
    borderRadius: 8,
    padding: 24,
  },
  cardTitle: {
    margin: 0,
    fontSize: 20,
    letterSpacing: 0,
  },
  cardBody: {
    margin: "12px 0 0",
    color: "#5b6472",
    lineHeight: 1.7,
  },
  proof: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 28,
    padding: "56px min(8vw, 96px)",
    background: "#111827",
    color: "#ffffff",
  },
  proofList: {
    margin: 0,
    paddingLeft: 20,
    color: "#d1d5db",
    lineHeight: 2,
    fontSize: 17,
  },
};
