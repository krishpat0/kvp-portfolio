import { Inter } from "next/font/google";
import Header from "./Components/Header";
import "./globals.css";
Header;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishna Patil -Portfolio",
  description: "All About Krishna Patil Professional life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header></Header>

        {children}
      </body>
    </html>
  );
}
