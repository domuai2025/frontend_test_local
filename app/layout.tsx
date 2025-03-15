import {Work_Sans} from "next/font/google";
import "@/app/globals.css";
import {cn} from "@/lib/utils";
import {Toaster} from "@/components/ui/toaster";
import {ReactNode} from "react";
import Metrics from "../components/metrics";
import {ThemeProvider} from "@/components/theme-provider";
import {ExternalProvider} from "@/contexts/external";
import {defaultTheme, themesList} from "@/config";

const font = Work_Sans({subsets: ["latin"]});

export default async function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(font.className)} suppressHydrationWarning>
				<ExternalProvider>
					<ThemeProvider
						defaultTheme={defaultTheme}
						enableColorScheme
						themes={themesList}
						disableTransitionOnChange
					>
						<Metrics />
						{children}
						<Toaster />
					</ThemeProvider>
				</ExternalProvider>
			</body>
		</html>
	);
}
