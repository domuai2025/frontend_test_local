"use client";

import {NavbarUserLinks} from "@/components/navbar/navbar-user-links";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {MenuIcon} from "lucide-react";
import {buttonVariants} from "../ui/button";
import {NavLink} from "./navbar";
import {User} from "@supabase/supabase-js";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export const NavbarMobile = ({links, user}: {links: NavLink[]; user?: User | null}) => {
	const pathname = usePathname();

	return (
		<>
			<NavigationMenu key={pathname}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="-mr-4">
							<MenuIcon />
						</NavigationMenuTrigger>
						<NavigationMenuContent className="flex flex-col p-1">
							{links.map((link) => (
								<NavigationMenuLink
									className={cn(buttonVariants({variant: "outline"}), "mb-1")}
									key={link.href}
									href={link.href}
								>
									{link.title}
								</NavigationMenuLink>
							))}
							<div className="flex flex-col mb-0.5">
								<NavbarUserLinks user={user} />
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
};
