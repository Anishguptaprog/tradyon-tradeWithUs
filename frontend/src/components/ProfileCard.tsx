import Link from "next/link";
import { Profile } from "@/types";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{profile.BusinessName}</h2>
      <p>{profile.BusinessOverview}</p>
      <Link href={`/profile/${profile.ProfileId}`} className="text-blue-500">View Profile</Link>
    </div>
  );
}