import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainNav from "../components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diagnosa Tingkat Depresi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100">
        <Providers>
          <MainNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}

