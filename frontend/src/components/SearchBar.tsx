import { Search } from "lucide-react";

export default function SearchBar({ placeholder, onSearch }: { placeholder: string, onSearch: (query: string) => void }) {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
