import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Roopasa Ayurveda — Pure Ayurveda for Timeless Beauty",
  description:
    "Experience the goodness of Ayurveda with Roopasa's premium range of 100% pure, natural skincare and wellness products. Rooted in Ayurveda, made for today.",
  keywords:
    "Roopasa Ayurveda, Ayurvedic skincare, natural rose water, saffron honey, face cream, botanical wellness, herbal cosmetics",
  openGraph: {
    title: "Roopasa Ayurveda — Pure Ayurveda for Timeless Beauty",
    description: "100% pure, natural skincare and wellness formulated with classical Ayurvedic wisdom.",
    images: ["/herobanners/naturalcarebanner.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FAF4EA] text-[#24231F] font-sans selection:bg-[#B58A48]/20 selection:text-[#153D2A] overflow-x-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
