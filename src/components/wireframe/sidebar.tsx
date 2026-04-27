"use client";

import { useState } from "react";
import {
	WireframeSidebar,
	WireframeSidebarContent,
	WireframeSidebarFooter,
	WireframeSidebarHeader,
	type WireframeSidebarPosition,
} from "@/components/ui/wireframe";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [position, setPosition] = useState<WireframeSidebarPosition>("left");

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<WireframeSidebar collapsed={collapsed} position={position}>
			<WireframeSidebarHeader>
				<div className="bg-(image:--crossed-gradient) flex w-full items-center justify-center bg-pink-500/40 p-4">
					<div className="border-2 border-black bg-white px-2 font-bold">
						HEADER
					</div>
				</div>
			</WireframeSidebarHeader>
			<WireframeSidebarContent>
				<div className="bg-(image:--crossed-gradient) flex min-h-full w-full flex-col items-center justify-center gap-4 bg-pink-500/40 p-4">
					<button onClick={handleClick} type="button">
						Collapse
					</button>
					<div className="border-2 border-black bg-white px-2 font-bold">
						SIDEBAR
					</div>
					<select
						onChange={(e) =>
							setPosition(e.target.value as WireframeSidebarPosition)
						}
						value={position}
					>
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</div>
			</WireframeSidebarContent>
			<WireframeSidebarFooter>
				<div className="bg-(image:--crossed-gradient) flex w-full items-center justify-center bg-pink-500/40 p-4">
					<div className="border-2 border-black bg-white px-2 font-bold">
						FOOTER
					</div>
				</div>
			</WireframeSidebarFooter>
		</WireframeSidebar>
	);
}
