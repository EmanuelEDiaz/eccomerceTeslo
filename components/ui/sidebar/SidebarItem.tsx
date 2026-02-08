import { SidebarInterface } from "@/interfaces/sidebar.interfaces";
import Link from "next/link";

interface Props {
    dataUser: SidebarInterface;
}

export const SidebarItem = ({ dataUser }:Props) => {
  return (
    <Link
      href={dataUser.url}
      className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
    >
      <dataUser.icon size={30} />
      <span className="ml-3 text-xl">{dataUser.name}</span>
    </Link>
  );
};
