import "./globals.css";

export const metadata = {
  title: "AuditAI",
  description:
    "AI Spend Optimization Platform",
};

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