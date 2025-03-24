"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          TradeWithUs
        </Link>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>

        <div className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
          <Link href="/product/all" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/profile/all" className="text-gray-700 hover:text-blue-600">
            Profiles
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

// "use client"
// import Link from "next/link";
// import { useAuth } from "@/hooks/useAuth";
// import { ArrowLeft, User, Search, Bell } from "lucide-react";
// import { useRouter, usePathname } from "next/navigation";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const router = useRouter();
//   const pathname = usePathname();
  
//   // Show back button on detail pages
//   const showBackButton = !pathname?.includes("/product/all") && 
//                         !pathname?.includes("/profile/all") && 
//                         pathname !== "/";
  
//   // Different title based on the current route
//   const getTitle = () => {
//     if (pathname?.includes("/product/") && !pathname?.includes("/all")) {
//       return "Product Details";
//     } else if (pathname?.includes("/profile/") && !pathname?.includes("/all")) {
//       return "Seller Profile";
//     } else if (pathname?.includes("/product/all")) {
//       return "Products";
//     } else if (pathname?.includes("/profile/all")) {
//       return "Seller Profiles";
//     }
//     return "";
//   };

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-md">
//         {showBackButton ? (
//           <button 
//             onClick={() => router.back()} 
//             className="p-2 rounded-full hover:bg-gray-100"
//           >
//             <ArrowLeft size={20} />
//           </button>
//         ) : (
//           <Link href="/" className="font-bold text-lg">
//             TradeWithUs
//           </Link>
//         )}
        
//         {showBackButton && (
//           <h1 className="font-semibold text-lg">
//             {getTitle()}
//           </h1>
//         )}
        
//         <div className="flex items-center gap-3">
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Search size={20} />
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Bell size={20} />
//           </button>
//           {user ? (
//             <button 
//               onClick={() => router.push(`/profile/{profile.ProfileId}`)} 
//               className="p-2 rounded-full hover:bg-gray-100"
//             >
//               <User size={20} />
//             </button>
//           ) : (
//             <Link href="/auth/login" className="p-2 rounded-full hover:bg-gray-100">
//               <User size={20} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

