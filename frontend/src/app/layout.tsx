import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6 max-w-5xl">
       
          {children}

          
        </main>
        <Footer />
      </body>
    </html>
  );
}

// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow container mx-auto px-4 py-6 max-w-md">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }