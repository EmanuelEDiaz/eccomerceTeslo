import { SidebarInterface } from "@/interfaces/sidebar.interfaces";
import { IoPeopleOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

interface SidebarData {
    dates:SidebarInterface[];
}

export const sideDataOptions: SidebarData = {
    dates:[
        {
            icon: IoShirtOutline,
            name:'Productos',
            url:'/'
        },
        {
            icon: IoTicketOutline,
            name:'Ordenes',
            url:'/'
        },
        {
            icon: IoPeopleOutline,
            name:'Usuarios',
            url:'/'
        },
        
    ]
}