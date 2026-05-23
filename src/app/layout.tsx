import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import { Kanit, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hohc-kanit",
});

export const metadata = {
  title: "Hands On Health Care Website",
  description: "Hands On Health Care",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${kanit.variable}`}>
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
