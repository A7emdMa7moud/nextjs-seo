import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ahmed Mahmoud | MERN Stack Developer",
    template: "%s - Ahmed Mahmoud | MERN Stack Developer",
  },
  description:
    "Ahmed Mahmoud - MERN Stack developer. Articles, tutorials, and resources about MongoDB, Express, React, Node.js, and modern web development.",
  keywords: [
    "Ahmed Mahmoud",
    "MERN Stack",
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Web Development",
    "JavaScript",
    "Full Stack",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mahmoud | MERN Stack Developer",
    description:
      "Follow Ahmed Mahmoud for the best MERN Stack tutorials, tips, and web development resources.",
    images: [
      {
        url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1750335983/opengraph-image_j72cxs.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Mahmoud MERN Stack Twitter Card Image",
      },
    ],
    site: "@ahmedmahmoud",
  },
  openGraph: {
    title: "Ahmed Mahmoud | MERN Stack Developer",
    description:
      "Ahmed Mahmoud - MERN Stack developer. Articles, tutorials, and resources about MongoDB, Express, React, Node.js, and modern web development.",
    images: [
      {
        url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1750335983/opengraph-image_j72cxs.png",
        secureUrl:
          "https://res.cloudinary.com/test-image-upload-2/image/upload/v1750335983/opengraph-image_j72cxs.png",
        // width: 1200,
        // height: 630,
        // alt: "Ahmed Mahmoud MERN Stack Open Graph Image",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Ahmed Mahmoud | MERN Stack Developer",
    countryName: "cairo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
