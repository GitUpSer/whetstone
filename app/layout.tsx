// Minimal root layout so Next.js has a valid app/ directory. The actual
// pages are the static HTML files in public/, served via rewrites in
// next.config.mjs.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
