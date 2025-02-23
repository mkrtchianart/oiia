import "./globals.css";
import { WebAppProvider } from "@/components/providers/webapp-provider";
import { SelectionPrevention } from "./components/SelectionPrevention";
import { metadata } from "./metadata";

export { metadata };

const safeArea = {
  paddingTop: `calc(var(--tg-content-safe-area-inset-top) + var(--tg-safe-area-inset-top))`,
  paddingBottom: `var(--tg-content-safe-area-inset-bottom)`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body className="pt-tg-header-height pb-tg-nav-height bg-green-700" style={safeArea}>
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
