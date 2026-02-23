
// import "./globals.css";
// import Navbar from "@/component/Navbar";
// import Footer from "@/component/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-gray-900 overflow-x-hidden">

//         {/* FULL WIDTH NAVBAR */}
//         <Navbar />

//         {/* CONTENT (ONLY THIS PART WILL HAVE SPACING) */}
//         <main>{children}</main>

//         {/* FULL WIDTH FOOTER */}
//         <Footer />

//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding Cloud",
  description: "Ignite Young Minds with Coding Cloud Courses",
  icons: {
    icon: "../public/logos/logo.png",       // browser tab favicon
    shortcut: "../public/logos/logo.png",   // shortcut icon
    apple: "../public/logos/logo.png",      // iPhone home screen icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 overflow-x-hidden">

        {/* FULL WIDTH NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main>{children}</main>

        {/* FULL WIDTH FOOTER */}
        <Footer />

      </body>
    </html>
  );
}