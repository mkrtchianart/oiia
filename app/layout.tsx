import "./globals.css";
import { WebAppProvider } from "@/components/providers/webapp-provider";
import { SelectionPrevention } from "./components/SelectionPrevention";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-tg-header-height pb-tg-nav-height bg-green-700">
        <SelectionPrevention />
        <WebAppProvider>
          <div className="sticky-wrap">
            <div className="sticky-content">
              {children}
            </div>
          </div>
        </WebAppProvider>
      </body>
    </html>
  );
}
