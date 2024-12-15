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

import { MonitorPlay, Film, Sparkles, Star } from "lucide-react"

import Image from "next/image"
import logoB from "@/app/public/img/logo_b.png"


export const CinematicaSidebar = () => {
    return (
        <Sidebar>
            <Image src={logoB} alt = "logo_b"/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl">Films</SidebarGroupLabel>
                    <SidebarGroupContent>
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
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl">Séries TV</SidebarGroupLabel>
                    <SidebarGroupContent>
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
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

const items_film = [
    {
        title : "A l'affiche",
        url : "/movies/now-playing",
        icon : Film
    },
    {
        title : "Populaires",
        url : "/movies/popular",
        icon : Sparkles
    },
    {
        title : "Les mieux notés",
        url : "/movies/top-rated",
        icon : Star
    }
]

const items_tv = [
    {
        title : "En diffusion",
        url : "/shows/on-the-air",
        icon : MonitorPlay
    },
    {
        title : "Populaires",
        url : "/shows/popular",
        icon : Sparkles
    },
    {
        title : "Les mieux notés",
        url : "/shows/top-rated",
        icon : Star
    }
]