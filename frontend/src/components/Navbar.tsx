import Link from "next/link";
import { useAuth } from "@/lib/auth";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">TradeWithUs</Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hello, {user.name}</span>
            <Link href="/product/all">Products</Link>
          <Link href="/profile/all">Profiles</Link>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link href="/product/all">Products</Link>
            <Link href="/profile/all">Profiles</Link>
            <Link href="/auth/login" className="mr-4">Login</Link>
            <Link href="/auth/signup" className="bg-green-500 px-4 py-2 rounded">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
