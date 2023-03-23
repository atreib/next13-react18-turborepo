import { PropsWithChildren } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="w-full shadow p-4">
          <h2>Welcome to Next 13 and React 18</h2>
        </header>
        <section className="w-full p-4">{children}</section>
      </body>
    </html>
  );
}
