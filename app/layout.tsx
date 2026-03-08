
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
//       <body className="bg-[var(--color-white)] text-[var(--color-dark)] overflow-x-hidden">

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


// import "./globals.css";
// import Navbar from "@/component/Navbar";
// import Footer from "@/component/Footer";
// import type { Metadata } from "next";
// import ScrollToTop from "@/component/ScrollToTop";

// export const metadata: Metadata = {
//   title: "Coding Cloud",
//   description: "Ignite Young Minds with Coding Cloud Courses",
//   icons: {
//     icon: "../public/logos/logo.png",       // browser tab favicon
//     shortcut: "../public/logos/logo.png",   // shortcut icon
//     apple: "../public/logos/logo.png",      // iPhone home screen icon
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
// <html lang="en" data-scroll-behavior="smooth">
//         <body className="bg-[var(--color-white)] text-[var(--color-dark)] overflow-x-hidden">
//         <ScrollToTop />

//         {/* FULL WIDTH NAVBAR */}
//         <Navbar />

//         {/* CONTENT */}
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
import ScrollToTop from "@/component/ScrollToTop";

export const metadata: Metadata = {
  title: "Coding Cloud",
  description: "Ignite Young Minds with Coding Cloud Courses",
  icons: {
    icon: "../public/logos/logo.png",
    shortcut: "../public/logos/logo.png",
    apple: "../public/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[var(--color-white)] text-[var(--color-dark)] overflow-x-hidden w-full relative">
        <ScrollToTop />

        {/* FULL WIDTH NAVBAR - Ensure it doesn't overflow */}
          <Navbar />

        {/* CONTENT - Add container for safety */}
        <main className="w-full max-w-full overflow-x-visible">
          <div className="w-full max-w-full">
            {children}
          </div>
        </main>

        {/* FULL WIDTH FOOTER */}
        <div className="w-full max-w-full overflow-x-hidden">
          <Footer />
        </div>

      </body>
    </html>
  );
}