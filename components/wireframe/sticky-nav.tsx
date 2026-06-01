import { WireframeStickyNav } from "components/ui/wireframe";

export function StickyNav() {
	return (
		<WireframeStickyNav>
			<div className="bg-(image:--crossed-gradient) flex h-full w-full items-center justify-center bg-fuchsia-500/40">
				<div className="border-2 border-black bg-white px-2 font-bold">
					STICKY NAV
				</div>
			</div>
		</WireframeStickyNav>
	);
}
