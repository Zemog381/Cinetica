import { CinematicaSidebar } from "@/components/CineticaSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <SidebarProvider>
     <CinematicaSidebar/>
        <SidebarTrigger/>
        {children}
      </SidebarProvider>
    );
}
