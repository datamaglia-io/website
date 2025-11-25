import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "Datamaglia - AI-Powered Data Governance for Manufacturing & Supply Chain",
  description: "Automate compliance monitoring with multi-agent AI. Real-time data governance solutions for manufacturing, supply chain, distribution, and logistics companies.",
  keywords: ["data governance", "manufacturing compliance", "supply chain analytics", "AI compliance", "data quality", "logistics data management"],
  authors: [{ name: "Datamaglia" }],
  creator: "Datamaglia",
  publisher: "Datamaglia",
  openGraph: {
    title: "Datamaglia - AI-Powered Data Governance",
    description: "Automate compliance monitoring with multi-agent AI for manufacturing and supply chain",
    type: "website",
    locale: "en_US",
    siteName: "Datamaglia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datamaglia - AI-Powered Data Governance",
    description: "Automate compliance monitoring with multi-agent AI for manufacturing and supply chain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
