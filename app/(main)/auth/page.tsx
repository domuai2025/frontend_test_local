import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/server";
import AuthUI from "./authUI";

export default async function Auth() {
	const supabase = createClient();
	const {data} = await supabase.auth.getUser();
	// Check if logged in already
	if (data.user) {
		redirect("/account");
	}

	return <AuthUI />;
}
