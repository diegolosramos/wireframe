import { WireframeNav } from "@/components/ui/wireframe";

export function BottomNav(
	props: Omit<React.ComponentProps<typeof WireframeNav>, "position">,
) {
	return (
		<WireframeNav position="bottom" {...props}>
			<div className="bg-(image:--crossed-gradient) flex h-full w-full items-center justify-between bg-blue-600/40">
				bottom nav
			</div>
		</WireframeNav>
	);
}
