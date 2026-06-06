import './globals.css';

export const metadata = {
  title: '늙은 기사의 마지막 모험',
  description: '늙은 기사의 이야기를 페이지 넘김과 함께 읽을 수 있는 Next.js 동화책',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
