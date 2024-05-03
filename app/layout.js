import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anuja Rahul - Portfolio",
  description: "Welcome to my portfolio site.",
  authors: [{ name: "Anuja Rahul" }],
  creator: "Anuja Rahul",
  openGraph: {
    description:
      "Hello 👋, I'm a Web developer/ Software developer/ CS Undergraduate from Sri Lanka.",
    images: [
      {
        url: "https://github.com/anuja-rahul/portfolio-next/blob/main/public/og-image.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "./favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
