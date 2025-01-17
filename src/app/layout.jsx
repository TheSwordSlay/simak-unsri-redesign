import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIMAK UNSRI",
  description: "Website Sistem Akademik Universitas Sriwijaya",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-base-putih-clr" lang="en" data-theme="light">
      <body className="bg-base-putih-clr">
              <NextTopLoader
          color="#FFD681"
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
