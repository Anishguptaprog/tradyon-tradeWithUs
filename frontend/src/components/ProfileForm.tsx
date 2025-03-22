import { useState } from "react";
import { Profile } from "@/types";

interface ProfileFormProps {
  profile?: Profile; // Optional for Create Profile, Required for Edit Profile
  onSubmit: (formData: Profile) => Promise<void>;
}

export default function ProfileForm({ profile, onSubmit }: ProfileFormProps) {
  const [formData, setFormData] = useState<Profile>(
    profile || {
      ProfileId: "",
      BusinessName: "",
      BusinessOverview: "",
      Address: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Business Name</label>
        <input
          type="text"
          name="BusinessName"
          value={formData.BusinessName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Business Overview</label>
        <textarea
          name="BusinessOverview"
          value={formData.BusinessOverview}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Save Profile
      </button>
    </form>
  );
}
