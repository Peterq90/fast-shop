import './globals.css';

export const metadata = {
  title: 'FAST – Future Always Starts Today',
  description: 'Modern dropshipping storefront for trending products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
