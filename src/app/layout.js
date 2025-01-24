import MainHeader from "@/components/MainHeader";
import { ContentProvider } from "./content";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
      <main>
      <ContentProvider>
          {children}
        </ContentProvider>
      </main>
      </body>
    </html>
  );
}
