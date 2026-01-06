import Providers from "@/components/Providers";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import AuthmainLayOut from "./MainLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: "NeuroPulse Clinical Copilot",
    template: "%s | NeuroPulse", // ✅ fixed template
  },
  description: "Empowering healthcare with intelligent diagnostic support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans`}>
        <Providers>
          <LayoutWrapper>
            <AuthmainLayOut>
              {children}
            </AuthmainLayOut>
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
