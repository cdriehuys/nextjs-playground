import GlobalProviders from "@/components/GlobalProviders";
import "./global.css";
import Header from "@/components/Header";

export const metadata = {
  title: "My App",
  description: "A playground for Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProviders>
          <Header />
          <main>{children}</main>
        </GlobalProviders>
      </body>
    </html>
  );
}
