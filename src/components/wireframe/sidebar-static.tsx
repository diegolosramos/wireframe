import {
	WireframeSidebar,
	WireframeSidebarContent,
	WireframeSidebarFooter,
	WireframeSidebarHeader,
} from "@/components/ui/wireframe";

export function SidebarStatic() {
	return (
		<WireframeSidebar collapsed={false} position="left">
			<WireframeSidebarHeader>
				<div className="bg-(image:--crossed-gradient) flex w-full items-center justify-center bg-lime-500/40 p-4">
					Header
				</div>
			</WireframeSidebarHeader>
			<WireframeSidebarContent>
				<div className="bg-(image:--crossed-gradient) flex w-full items-center justify-center bg-lime-500/40 p-4">
					Sidebar
				</div>
			</WireframeSidebarContent>
			<WireframeSidebarFooter>
				<div className="bg-(image:--crossed-gradient) flex w-full items-center justify-center bg-lime-500/40 p-4">
					Footer
				</div>
			</WireframeSidebarFooter>
		</WireframeSidebar>
	);
}
