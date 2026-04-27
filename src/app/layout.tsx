import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { RoutesButton } from "@/components/wireframe/routes-button";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	viewportFit: "cover",
	userScalable: false,
};
export const metadata: Metadata = {
	title: "App Wireframe",
	description: "App Wireframe",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="overscroll-none" lang="en" suppressHydrationWarning>
			<body>
				{children}
				<RoutesButton />
			</body>
		</html>
	);
}
