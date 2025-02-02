import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QuizDataProvider from "@/components/quiz/quiz-data-provider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Krisha Quiz App",
  description: "Created by Krisha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuizDataProvider />
        {children}
      </body>
    </html>
  );
}
