import "./globals.css";
import Navbar from "@/components/header/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mera Pehla Next App",
  description: "Create Next App Ke Dwara Banayi Gayi Hai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ModalProvider>
          <Navbar />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
