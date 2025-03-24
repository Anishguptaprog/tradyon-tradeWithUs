import { Profile } from "../types";
import Link from "next/link";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{profile.BusinessName}</h3>
      <p className="text-gray-600">{profile.BusinessOverview}</p>
      <p className="text-gray-500">{profile.Address}</p>
      <Link href={`/profile/${profile._id}`} className="text-blue-600 mt-2 block">
        View Details →
      </Link>
    </div>
  );
}
// import Link from "next/link";
// import Image from "next/image";
// import { Profile } from "@/types";
// import VerificationBadge from "./VerificationBadge";

// export default function ProfileCard({ profile }: { profile: Profile }) {
//   return (
//     <Link 
//       href={`/profile/${profile.ProfileId}`}
//       className="block bg-white p-4 rounded-lg shadow-sm"
//     >
//       <div className="flex flex-col items-center">
//         <div className="relative w-14 h-14 mb-2">
//           <Image 
//             src={profile.LogoUrl || "/api/placeholder/56/56"} 
//             alt={profile.BusinessName}
//             fill
//             className="rounded-full object-cover"
//           />
//           {profile.Verified && (
//             <div className="absolute -right-1 -bottom-1">
//               <VerificationBadge />
//             </div>
//           )}
//         </div>
//         <h3 className="font-medium text-center">{profile.BusinessName}</h3>
//         <p className="text-xs text-gray-500 text-center">{profile.Location}</p>
//       </div>
//     </Link>
//   );
// }
