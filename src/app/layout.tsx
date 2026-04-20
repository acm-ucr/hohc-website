import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Hands On Health Care Website",
  description: "Hands On Health Care",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="font-hohc-kanit">
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
