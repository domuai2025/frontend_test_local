"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import React from "react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		title: string;
		links: {
			title: string;
			href: string;
		}[];
	}[];
}

export function SidebarNav({className, items, ...props}: SidebarNavProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn("flex flex-col space-y-1 lg:space-x-0 lg:space-y-1", className)}
			{...props}
		>
			{items.map((item, index) => (
				<React.Fragment key={index}>
					<div className="text-sm font-medium text-muted-foreground">{item.title}</div>
					{item.links.map((link, linkIndex) => (
						<Link
							key={linkIndex}
							href={link.href}
							className={cn(
								buttonVariants({variant: "ghost"}),
								pathname === link.href ? "bg-muted hover:bg-muted" : "hover:bg-secondary",
								"justify-start",
							)}
						>
							{link.title}
						</Link>
					))}
				</React.Fragment>
			))}
		</nav>
	);
}
