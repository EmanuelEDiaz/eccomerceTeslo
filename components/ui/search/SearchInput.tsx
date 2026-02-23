"use client";

import { useDebounceSearch } from "@/hooks/useDebounceSearch";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  initialQuery?: string;
}

export const SearchInput = ({ initialQuery = "" }: Props) => {
  const { searchTerm, setSearchTerm, onSearchSubmit } = useDebounceSearch({
    initialQuery,
  });

  return (
    <form onSubmit={onSearchSubmit} className="relative mb-10">
      <IoSearchOutline size={20} className="absolute top-2 left-2" />
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
      />
    </form>
  );
};
