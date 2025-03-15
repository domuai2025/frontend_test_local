"use server";

import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

export const handleLogout = async () => {
	console.log("logging out");
	const supabase = createClient();
	const {error} = await supabase.auth.signOut();
	console.log(error);
	redirect("/auth");
};
