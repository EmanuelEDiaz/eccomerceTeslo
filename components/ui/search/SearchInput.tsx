"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  initialQuery?: string;
}

export const SearchInput = ({ initialQuery = "" }: Props) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) return;
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

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
