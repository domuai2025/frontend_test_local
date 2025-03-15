import {Button, buttonVariants} from "@/components/ui/button";
import {FC} from "react";
import Link from "next/link";
import {SubmitButton} from "../ui/submit-button";
import {User} from "@supabase/supabase-js";
import {handleLogout} from "@/lib/supabase/actions";
import {usePathname} from "next/navigation";
import {dashboardSidebarNavItems} from "@/config";

export const NavbarUserLinks: FC<{user?: User | null}> = ({user}) => {
	// get current path
	const path = usePathname();

	return (
		user !== undefined && (
			<form>
				{!user ? (
					<Link href="/auth">
						<Button className="text-sm" variant="outline">
							Login
						</Button>
					</Link>
				) : (
					<div className="md:flex md:space-x-2">
						{!path.includes("account") ? (
							<Link href="/account/text-to-image">
								<Button className="text-sm mb-2 md:mb-0" variant="default">
									Dashboard
								</Button>
							</Link>
						) : (
							<>
								{dashboardSidebarNavItems.map((item) => (
									<div className="md:hidden flex-row" key={item.title}>
										<div className="text-center py-2 text-muted-foreground">
											{item.title}
										</div>
										<div className="text-center space-y-2">
											{item.links.map((link) => (
												<Link href={link.href} key={link.href}>
													<Button
														variant={path === link.href ? "default" : "outline"}
														className="w-full mb-1"
													>
														{link.title}
													</Button>
												</Link>
											))}
										</div>
									</div>
								))}
							</>
						)}
						<SubmitButton
							formAction={handleLogout}
							className="text-sm w-full"
							variant="outline"
						>
							Log out
						</SubmitButton>
					</div>
				)}
			</form>
		)
	);
};
