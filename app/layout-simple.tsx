import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Datamaglia - AI-Powered Data Governance for Manufacturing & Supply Chain",
  description: "Automate compliance monitoring with multi-agent AI. Real-time data governance solutions for manufacturing, supply chain, distribution, and logistics companies.",
  keywords: ["data governance", "manufacturing compliance", "supply chain analytics", "AI compliance", "data quality", "logistics data management"],
  authors: [{ name: "Datamaglia" }],
  creator: "Datamaglia",
  publisher: "Datamaglia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}