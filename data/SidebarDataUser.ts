import { SidebarInterface } from "@/interfaces/sidebar.interfaces";
import { IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoTicketOutline } from "react-icons/io5";

interface SidebarData {
    dates:SidebarInterface[];
}

export const sideData: SidebarData = {
    dates:[
        {
            icon: IoPersonOutline,
            name:'Perfil',
            url:'/'
        },
        {
            icon: IoTicketOutline,
            name:'Ordenes',
            url:'/'
        },
        {
            icon: IoLogInOutline,
            name:'Ingresar',
            url:'/'
        },
        {
            icon: IoLogOutOutline,
            name:'Salir',
            url:'/'
        },
    ]
}