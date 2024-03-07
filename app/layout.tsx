import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";



export const metadata: Metadata = {
  metadataBase : new URL("https://tensor-pro.com/"),
  title: "TensorPro",
  description: "TensorPro offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.",
  openGraph: {
    title: "TensorPro",
    description: "TensorPro offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.",
    url: new URL("https://tensor-pro.com/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>TensorPro</title>
        <meta name="description" content="TensorPro offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform." />
        <meta property="og:image" content="./opengraph-image.jpg"></meta>
        <meta property="og:url" content="https://tensor-pro.com/"></meta>
        <meta property="og:title" content="TensorPro"></meta>
        <meta property="og:description" content="TensorPro offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
