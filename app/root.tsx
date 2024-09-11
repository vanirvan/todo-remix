import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

// Supports weights 200-800
import "@fontsource-variable/plus-jakarta-sans";

import { Footer } from "~/components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main className="font-plus-jakarta-sans relative min-h-svh w-full bg-background pb-12">
      <Outlet />
      <Footer />
    </main>
  );
}
