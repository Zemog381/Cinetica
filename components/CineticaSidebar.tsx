import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { MonitorPlay } from "lucide-react"

import Image from "next/image"
import logoB from "@/app/public/img/logo_b.png"


export const CinematicaSidebar = () => {
    return (
        <Sidebar>
            <Image src={logoB} alt = "logo_b"/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl">Films</SidebarGroupLabel>
                    <SidebarMenu>
                        {items_film.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                         ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl">Séries TV</SidebarGroupLabel>
                    <SidebarMenu>
                        {items_tv.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                         ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

const items_film = [
    {
        title : "A l'affiche",
        url : "#",
        icon : MonitorPlay
    },
    {
        title : "A l'affiche",
        url : "#",
        icon : MonitorPlay
    },
    {
        title : "A l'affiche",
        url : "#",
        icon : MonitorPlay
    }
]

const items_tv = [
    {
        title : "En diffusion",
        url : "#",
        icon : MonitorPlay
    },
    {
        title : "En diffusion",
        url : "#",
        icon : MonitorPlay
    },
    {
        title : "En diffusion",
        url : "#",
        icon : MonitorPlay
    }
]