"use client";
import {NavbarMobile} from "@/components/navbar/navbar-mobile";
import {NavbarUserLinks} from "@/components/navbar/navbar-user-links";
import Link from "next/link";
import {FC, Suspense, useEffect, useState} from "react";
import {Button, buttonVariants} from "../ui/button";
import {ThemeToggle} from "../theme-toggle";
import {siteName} from "@/config";
import {usePathname, useSearchParams} from "next/navigation";
import {createClient} from "@/lib/supabase/client";
import {User} from "@supabase/supabase-js";

export interface NavLink {
	title: string;
	href: string;
}

export const NavBar: FC = () => {
	const links: NavLink[] = [
		{
			title: "Blog",
			href: "/blog",
		},
		{
			title: "Docs",
			href: "/docs",
		},
	];

	const [user, setUser] = useState<User | null | undefined>();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const supabase = createClient();

	useEffect(() => {
		const fetchUser = async () => {
			const {data} = await supabase.auth.getUser();
			setUser(data.user);
		};
		fetchUser();
	}, [pathname, searchParams]);

	return (
		<>
			<div className="animate-in fade-in w-full">
				<nav className="container px-6 md:px-8 py-4">
					<div className="flex items-center">
						<Link href="/" className="hover:opacity-80 transition-opacity">
							<div className="flex items-center">
								<span className="text-xl font-semibold tracking-tighter text-slate-800 mr-6 dark:text-white">
									{siteName}
								</span>
							</div>
						</Link>
						<div className="hidden md:flex justify-between grow">
							<div>
								{links.map((link) => (
									<Link
										href={link.href}
										key={link.href}
										className={buttonVariants({variant: "link"})}
									>
										{link.title}
									</Link>
								))}
							</div>

							<div className="flex items-end space-x-4">
								<Link
									href={`https://buy.stripe.com/5kA00ld4MbEx75K4gg?prefilled_email=${user?.email}`}
								>
									<Button className="w-full" variant="default">
										Buy now for 49$
									</Button>
								</Link>
								<ThemeToggle />
								<NavbarUserLinks user={user} />
							</div>
						</div>
						<div className="grow md:hidden flex justify-end space-x-4">
							<Link
								href={`https://buy.stripe.com/5kA00ld4MbEx75K4gg?prefilled_email=${user?.email}`}
							>
								<Button size="sm" className="w-full" variant="default">
									Buy for 49$
								</Button>
							</Link>
							<ThemeToggle />
							<NavbarMobile links={links} user={user} />
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};
