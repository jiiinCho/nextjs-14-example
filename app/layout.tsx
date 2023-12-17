import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// Using the clsx library to toggle class names
// https://nextjs.org/learn/dashboard-app/css-styling#using-the-clsx-library-to-toggle-class-names
