"use client"
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetch";
import ProfileCard from "./ProfileCard";
import { Profile } from "../types";

export default function ProfileList() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    async function loadProfiles() {
      try {
        const data = await fetchData<Profile[]>("/profile/all");
        setProfiles(data);
      } catch (error) {
        console.error("Failed to fetch profiles:", error);
      }
    }
    loadProfiles();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {profiles.length > 0 ? (
        profiles.map((profile) => <ProfileCard key={profile._id} profile={profile} />)
      ) : (
        <p className="text-center text-gray-500">No profiles available.</p>
      )}
    </div>
  );
}
// import ProfileCard from "./ProfileCard";
// import { Profile } from "@/types";

// export default function ProfileList({ profiles }: { profiles: Profile[] }) {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {profiles.map((profile) => (
//         <ProfileCard key={profile.ProfileId} profile={profile} />
//       ))}
//     </div>
//   );
// }