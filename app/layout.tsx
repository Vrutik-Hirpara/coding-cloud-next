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
//       <body className="bg-white text-gray-900">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

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

        {/* CONTENT (ONLY THIS PART WILL HAVE SPACING) */}
        <main>{children}</main>

        {/* FULL WIDTH FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
