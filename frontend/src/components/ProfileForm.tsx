"use client";
import { useState } from "react";
import { Profile } from "@/types";

interface ProfileFormProps {
  profile?: Profile; // Optional for Create Profile, Required for Edit Profile
  onSubmit: (formData: Profile) => Promise<void>;
}

export default function ProfileForm({ profile, onSubmit }: ProfileFormProps) {
  const [formData, setFormData] = useState<Profile>(
    profile || {
      _id: "",
      BusinessName: "",
      BusinessOverview: "",
      BusinessType: "",
      Established: "",
      Address: "",
      Logo: "",
      LogoUrl: "",
      Owner: "",
      Type: "",
      Size: "",
      Founded: "",
      Employees: "",
      Location: "",
      ExportPercentage: "",
      ExportCountries: [],
      Image: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportCountriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const countriesArray = e.target.value.split(",").map((country) => country.trim());
    setFormData({ ...formData, ExportCountries: countriesArray });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800">{profile ? "Edit Profile" : "Create Profile"}</h2>

      {/* Business Name */}
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

      {/* Business Overview */}
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

      {/* Business Type */}
      <div>
        <label className="block text-gray-700">Business Type</label>
        <input
          type="text"
          name="BusinessType"
          value={formData.BusinessType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Established Year */}
      <div>
        <label className="block text-gray-700">Established</label>
        <input
          type="text"
          name="Established"
          value={formData.Established}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Address */}
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

      {/* Owner */}
      <div>
        <label className="block text-gray-700">Owner</label>
        <input
          type="text"
          name="Owner"
          value={formData.Owner}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Logo URL */}
      <div>
        <label className="block text-gray-700">Logo URL</label>
        <input
          type="text"
          name="LogoUrl"
          value={formData.LogoUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-gray-700">Type</label>
        <input
          type="text"
          name="Type"
          value={formData.Type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Size */}
      <div>
        <label className="block text-gray-700">Size</label>
        <input
          type="text"
          name="Size"
          value={formData.Size}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Founded Year */}
      <div>
        <label className="block text-gray-700">Founded</label>
        <input
          type="text"
          name="Founded"
          value={formData.Founded}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Employees */}
      <div>
        <label className="block text-gray-700">Employees</label>
        <input
          type="text"
          name="Employees"
          value={formData.Employees}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="Location"
          value={formData.Location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Export Percentage */}
      <div>
        <label className="block text-gray-700">Export Percentage</label>
        <input
          type="text"
          name="ExportPercentage"
          value={formData.ExportPercentage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Export Countries */}
      <div>
        <label className="block text-gray-700">Export Countries (comma separated)</label>
        <input
          type="text"
          name="ExportCountries"
          value={formData.ExportCountries?.join(", ")}
          onChange={handleExportCountriesChange}
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
