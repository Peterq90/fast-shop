import './globals.css';

export const metadata = {
  title: 'FAST – Future Always Starts Today',
  description: 'Deutscher Premium-Onlineshop für smarte Produkte und aktuelle Bestseller.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
