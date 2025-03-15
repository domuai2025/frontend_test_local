import {Metadata} from "next";
import {Separator} from "@/components/ui/separator";
import {SidebarNav} from "@/components/ui/sidebar-nav";
import {UserProvider} from "@/contexts/user";
import {createClient} from "@/lib/supabase/server";
// import {Badge} from "@/components/ui/badge";
import {redirect} from "next/navigation";
import {getUserDetails} from "@/lib/supabase/queries";
import {dashboardSidebarNavItems} from "@/config";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "User control dashboard",
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default async function AccountLayout({children}: SettingsLayoutProps) {
	const supabase = createClient();
	const {
		data: {user},
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/auth");
	}

	const userDetails = await getUserDetails(supabase);

	return (
		<UserProvider user={user} userDetails={userDetails}>
			<div className="container">
				<div className="space-y-6 pb-16 block">
					<div className="flex justify-between items-center">
						<div className="space-y-0.5">
							<h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
							<p className="text-muted-foreground hidden md:flex">
								All the source code is included in the starter kit.
							</p>
						</div>
						<div className="flex items-center space-x-2 px-3 py-1 rounded-full">
							{/* <Badge variant={"outline"} className="text-sm">
								{userDetails?.credits} credits
							</Badge> */}
						</div>
					</div>
					<Separator className="my-2" />
					<div className="flex flex-col space-y-2 md:flex-row md:space-x-12 md:space-y-0">
						<aside className="hidden md:flex">
							<SidebarNav items={dashboardSidebarNavItems} />
						</aside>
						<div className="flex-1">{children}</div>
					</div>
				</div>
			</div>
		</UserProvider>
	);
}
