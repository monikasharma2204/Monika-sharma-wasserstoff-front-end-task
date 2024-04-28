
import "./globals.css";


export const metadata = {
  title: "Astrix",
  description: "Task By Kanishk kashyap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    </head>
      <body className="bg-black" >{children}</body>
    </html>
  );
}
