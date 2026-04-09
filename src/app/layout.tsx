import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";

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
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
