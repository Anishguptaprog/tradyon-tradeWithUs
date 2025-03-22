import ProfileCard from "./ProfileCard";
import { Profile } from "@/types";

export default function ProfileList({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <ProfileCard key={profile.ProfileId} profile={profile} />
      ))}
    </div>
  );
}
