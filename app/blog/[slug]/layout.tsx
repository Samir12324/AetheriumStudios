import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`antialiased`}>
<div className="fixed inset-0 w-full h-full  -z-50">
     
      </div>
          {children}
        </body>
    </html>
  );
}
