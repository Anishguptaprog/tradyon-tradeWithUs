export default function SearchBar({ placeholder, onSearch }: { placeholder: string, onSearch: (query: string) => void }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />
    );
  }