import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Using the clsx library to toggle class names
// https://nextjs.org/learn/dashboard-app/css-styling#using-the-clsx-library-to-toggle-class-names
