import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anuja Rahul - Portfolio",
  description: "Welcome to my portfolio site.",
  authors: [{ name: "Anuja Rahul" }],
  creator: "Anuja Rahul",
  openGraph: {
    images: "./og-image.png",
    description:
      "Hello 👋, I'm a Web developer/ Software developer/ CS Undergraduate from Sri Lanka.",
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
