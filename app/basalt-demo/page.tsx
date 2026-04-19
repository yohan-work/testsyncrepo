"use client";

import type { CSSProperties } from "react";

const cards = [
  {
    title: "요청을 작업 단위로 정리",
    body: "짧은 UI 요청도 계획, 실행, 검증, 정리 흐름으로 나누어 관리합니다.",
    accent: "linear-gradient(180deg,#2563eb,#22c55e)",
  },
  {
    title: "AI 역할 분담",
    body: "분석, 구현, QA 담당 agent가 단계별로 협업하는 구조를 보여줍니다.",
    accent: "linear-gradient(180deg,#6366f1,#ec4899)",
  },
  {
    title: "결과와 근거를 보존",
    body: "변경 파일, 실행 로그, 검증 결과를 남겨 리뷰와 공유에 활용합니다.",
    accent: "linear-gradient(180deg,#f59e0b,#ef4444)",
  },
  {
    title: "실시간 AI 토론 뷰",
    body: "에이전트들이 제안과 반박을 주고받는 장면을 실시간으로 관전할 수 있습니다.",
    accent: "linear-gradient(180deg,#22c55e,#0ea5e9)",
  },
  {
    title: "선택한 요소만 수정",
    body: "Preview에서 원하는 요소를 고른 뒤 자연어로 수정 요청을 넘기면 곧바로 반영됩니다.",
    accent: "linear-gradient(180deg,#0ea5e9,#6366f1)",
  },
  {
    title: "QA 캡처 자동 저장",
    body: "주요 화면과 반응형 캡처, 검수 요약이 태스크 메타데이터에 자동으로 기록됩니다.",
    accent: "linear-gradient(180deg,#ec4899,#f59e0b)",
  },
];

const steps = ["Request", "Plan", "Dev", "Test", "Review"];

const stats = [
  { value: "92%", label: "자동화된 작업 단계" },
  { value: "4x", label: "요청→리뷰 전환 속도" },
  { value: "100%", label: "변경 이력 추적률" },
  { value: "5", label: "협업 에이전트" },
];

const agents = [
  { role: "PM", name: "Product Manager", color: "#10b981", blurb: "요청 범위와 흐름 설계를 정리합니다." },
  { role: "Lead", name: "Main Agent", color: "#3b82f6", blurb: "에이전트 협업과 실행 플랜을 지휘합니다." },
  { role: "Dev", name: "Software Engineer", color: "#6366f1", blurb: "코드 변경을 실제 파일에 반영합니다." },
  { role: "Design", name: "Style Architect", color: "#ec4899", blurb: "정보 구조와 시각 우선순위를 정리합니다." },
  { role: "QA", name: "Quality Agent", color: "#f59e0b", blurb: "캡처와 검수 기록으로 결과를 보증합니다." },
];

const faqs = [
  { q: "에이전트는 실제 코드를 작성하나요?", a: "네. 각 에이전트가 역할을 나눠 실제 파일을 작성하거나 수정하고, 변경 이력을 태스크에 기록합니다." },
  { q: "어떤 검증 기록이 남나요?", a: "실행 로그, 단계별 결과, 주요 화면 캡처, 반응형 캡처, 최종 QA 요약이 함께 저장됩니다." },
  { q: "어떤 프로젝트에 적용할 수 있나요?", a: "Next.js App Router 구조의 프론트엔드 프로젝트라면 별도 설정 없이 바로 시도할 수 있습니다." },
  { q: "수정 요청은 어떻게 이어지나요?", a: "Preview에서 요소를 선택한 뒤 자연어 요청을 전달하면 곧바로 파일 변경과 이력에 반영됩니다." },
];

const css = `
  @keyframes basaltShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes basaltFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .basalt-card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
  .basalt-card:hover { transform: translateY(-4px); box-shadow: 0 22px 44px -18px rgba(15,23,42,0.32); border-color: #c7d2fe; }
  .basalt-stat { transition: transform .25s ease; }
  .basalt-stat:hover { transform: translateY(-3px); }
  .basalt-shimmer {
    background: linear-gradient(120deg,#2563eb,#22c55e,#ec4899,#f59e0b,#2563eb);
    background-size: 300% 300%;
    animation: basaltShimmer 14s ease infinite;
  }
  .basalt-agent-dot { animation: basaltFloat 3.6s ease-in-out infinite; }
  .basalt-faq summary { cursor: pointer; list-style: none; outline: none; }
  .basalt-faq summary::-webkit-details-marker { display: none; }
  .basalt-faq .basalt-faq-chevron { transition: transform .25s ease; }
  .basalt-faq[open] .basalt-faq-chevron { transform: rotate(180deg); }
  .basalt-faq[open] { border-color: #111827; }
  .basalt-cta-link { transition: transform .2s ease, box-shadow .2s ease; }
  .basalt-cta-link:hover { transform: translateY(-2px); box-shadow: 0 16px 30px -14px rgba(15,23,42,0.45); }
  @media (max-width: 720px) {
    .basalt-hero-title { font-size: 40px !important; }
    .basalt-section-heading { font-size: 26px !important; }
  }
`;

export default function BasaltDemoLandingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main style={styles.page}>
        <section style={styles.hero}>
          <p style={styles.eyebrow}>Basalt</p>
          <h1 className="basalt-hero-title" style={styles.title}>프론트엔드 요청을 계획부터 검증까지 연결합니다</h1>
          <p style={styles.lead}>
            Basalt는 단순 코드 생성기가 아니라, 요청을 계획하고 실행하며 검증 결과까지 남기는
            프론트엔드 작업 관리 서비스입니다.
          </p>
          <div style={styles.actions}>
            <a href="#workflow" className="basalt-cta-link" style={styles.primaryAction}>작업 흐름 살펴보기</a>
            <a href="#proof" className="basalt-cta-link" style={styles.secondaryAction}>검증 결과 보기</a>
          </div>
        </section>

        <section id="stats" style={styles.statsSection}>
          <div className="basalt-shimmer" style={styles.statsBar}>
            {stats.map((item) => (
              <div key={item.label} className="basalt-stat" style={styles.statsItem}>
                <strong style={styles.statsValue}>{item.value}</strong>
                <span style={styles.statsLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.eyebrow}>Workflow</p>
            <h2 className="basalt-section-heading" style={styles.heading}>하나의 요청이 완료되기까지</h2>
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

        <section id="team" style={styles.teamSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.eyebrow}>Agent Team</p>
            <h2 className="basalt-section-heading" style={styles.heading}>이 워크플로우를 움직이는 에이전트</h2>
          </div>
          <div style={styles.teamGrid}>
            {agents.map((agent) => (
              <article key={agent.role} className="basalt-card" style={styles.agentCard}>
                <span className="basalt-agent-dot" style={{ ...styles.agentDot, background: agent.color }} />
                <div style={styles.agentMeta}>
                  <strong style={{ ...styles.agentRole, color: agent.color }}>{agent.role}</strong>
                  <span style={styles.agentName}>{agent.name}</span>
                </div>
                <p style={styles.agentBlurb}>{agent.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" style={styles.gridSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.eyebrow}>Highlights</p>
            <h2 className="basalt-section-heading" style={styles.heading}>이 데모에서 볼 수 있는 것</h2>
          </div>
          <div style={styles.grid}>
            {cards.map((card) => (
              <article key={card.title} className="basalt-card" style={styles.card}>
                <span style={{ ...styles.cardAccent, background: card.accent }} />
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.quoteSection}>
          <blockquote style={styles.quoteBox}>
            <p style={styles.quoteText}>
              “요청 한 줄이 플랜, 구현, 검증, 리뷰 기록까지 이어지는 흐름을
              한 화면에서 보여주는 도구는 처음이었어요.”
            </p>
            <footer style={styles.quoteFooter}>
              <span style={styles.quoteAvatar} aria-hidden>B</span>
              <span>
                <strong style={styles.quoteName}>프론트엔드 리드 (가상 사용자)</strong>
                <span style={styles.quoteRole}>제품 실험 피드백</span>
              </span>
            </footer>
          </blockquote>
        </section>

        <section id="proof" style={styles.proof}>
          <div>
            <p style={styles.eyebrow}>Delivery Proof</p>
            <h2 className="basalt-section-heading" style={styles.heading}>작업 결과에서 확인할 수 있는 것</h2>
          </div>
          <ul style={styles.proofList}>
            <li>태스크 생성과 칸반 상태 이동</li>
            <li>AI workflow와 단계별 실행 로그</li>
            <li>실제 파일 변경 내역과 diff</li>
            <li>QA 검수 완료 메타데이터</li>
          </ul>
        </section>

        <section id="faq" style={styles.faqSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.eyebrow}>FAQ</p>
            <h2 className="basalt-section-heading" style={styles.heading}>자주 묻는 질문</h2>
          </div>
          <div style={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className="basalt-faq" style={styles.faqItem}>
                <summary style={styles.faqSummary}>
                  <span>{item.q}</span>
                  <svg className="basalt-faq-chevron" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path d="M5 7l5 6 5-6" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p style={styles.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="cta" style={styles.ctaOuter}>
          <div className="basalt-shimmer" style={styles.ctaBanner}>
            <p style={{ ...styles.eyebrow, color: "#ffffff" }}>Get Started</p>
            <h2 className="basalt-section-heading" style={styles.ctaHeading}>
              한 줄의 요청을 실행과 검증으로 이어보세요
            </h2>
            <p style={styles.ctaLead}>
              계획, 구현, 검증, 리뷰가 한 흐름으로 이어지는 작업 경험을 지금 확인해보세요.
            </p>
            <div style={styles.actions}>
              <a href="#workflow" className="basalt-cta-link" style={styles.ctaPrimary}>시작 워크플로우 보기</a>
              <a href="#team" className="basalt-cta-link" style={styles.ctaSecondary}>Agent 팀 만나기</a>
            </div>
          </div>
        </section>
      </main>
    </>
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
  statsSection: {
    padding: "32px min(8vw, 96px)",
  },
  statsBar: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 24,
    padding: "28px 32px",
    borderRadius: 18,
    color: "#ffffff",
    boxShadow: "0 32px 60px -30px rgba(37, 99, 235, 0.55)",
  },
  statsItem: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    color: "#ffffff",
  },
  statsValue: {
    fontSize: 40,
    lineHeight: 1,
    letterSpacing: -1,
    fontWeight: 800,
  },
  statsLabel: {
    fontSize: 13,
    opacity: 0.92,
    letterSpacing: 0.3,
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
  teamSection: {
    padding: "56px min(8vw, 96px) 24px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    marginTop: 28,
  },
  agentCard: {
    position: "relative",
    background: "#ffffff",
    border: "1px solid #dfe5ef",
    borderRadius: 12,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    overflow: "hidden",
  },
  agentDot: {
    width: 14,
    height: 14,
    borderRadius: 999,
    boxShadow: "0 0 0 4px rgba(255,255,255,1), 0 0 0 6px rgba(15,23,42,0.06)",
  },
  agentMeta: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    flexWrap: "wrap",
  },
  agentRole: {
    fontSize: 18,
    letterSpacing: 0.2,
  },
  agentName: {
    fontSize: 12,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  agentBlurb: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
    fontSize: 14,
  },
  gridSection: {
    padding: "24px min(8vw, 96px) 56px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
    marginTop: 28,
  },
  card: {
    position: "relative",
    background: "#ffffff",
    border: "1px solid #dfe5ef",
    borderRadius: 10,
    padding: "24px 24px 24px 28px",
    overflow: "hidden",
  },
  cardAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
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
  quoteSection: {
    padding: "24px min(8vw, 96px) 56px",
  },
  quoteBox: {
    margin: 0,
    padding: "36px 40px",
    borderRadius: 16,
    background: "linear-gradient(135deg,#111827 0%,#1f2937 100%)",
    color: "#ffffff",
    boxShadow: "0 30px 60px -30px rgba(15,23,42,0.5)",
  },
  quoteText: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.55,
    fontWeight: 500,
  },
  quoteFooter: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#d1d5db",
  },
  quoteAvatar: {
    width: 36,
    height: 36,
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#2563eb,#22c55e)",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: 14,
  },
  quoteName: {
    display: "block",
    color: "#ffffff",
    fontSize: 14,
  },
  quoteRole: {
    display: "block",
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 2,
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
  faqSection: {
    padding: "56px min(8vw, 96px) 24px",
  },
  faqList: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  faqItem: {
    background: "#ffffff",
    border: "1px solid #dfe5ef",
    borderRadius: 10,
    padding: "16px 20px",
  },
  faqSummary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    fontWeight: 700,
    fontSize: 16,
  },
  faqAnswer: {
    margin: "12px 0 0",
    color: "#4b5563",
    lineHeight: 1.8,
    fontSize: 14,
  },
  ctaOuter: {
    padding: "24px min(8vw, 96px) 80px",
  },
  ctaBanner: {
    borderRadius: 20,
    padding: "56px 48px",
    color: "#ffffff",
    boxShadow: "0 40px 80px -30px rgba(37,99,235,0.55)",
  },
  ctaHeading: {
    margin: "14px 0 0",
    fontSize: 32,
    color: "#ffffff",
    lineHeight: 1.2,
  },
  ctaLead: {
    maxWidth: 640,
    margin: "16px 0 0",
    fontSize: 17,
    color: "rgba(255,255,255,0.92)",
    lineHeight: 1.7,
  },
  ctaPrimary: {
    background: "#ffffff",
    color: "#111827",
    padding: "13px 20px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 800,
  },
  ctaSecondary: {
    background: "rgba(255,255,255,0.16)",
    color: "#ffffff",
    padding: "13px 20px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.5)",
  },
};
