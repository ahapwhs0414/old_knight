import './globals.css';

export const metadata = {
  title: '늙은 기사의 마지막 모험',
  description: '충직했던 늙은 기사의 마지막 여정을 담은 이야기',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
