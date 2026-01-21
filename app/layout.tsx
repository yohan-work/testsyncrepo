import "./globals.css";

export const metadata = {
  title: "더미 데이터",
  description: "간단한 더미 데이터 목록 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
