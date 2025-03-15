import {Database} from "@/types/db";
import {SupabaseClient, QueryData} from "@supabase/supabase-js";
import {cache} from "react";

export const getUser = cache(async (supabase: SupabaseClient<Database>) => {
	const {
		data: {user},
	} = await supabase.auth.getUser();
	return user;
});

export const getUserDetails = cache(async (supabase: SupabaseClient<Database>) => {
	const {data: userDetails} = await supabase.from("users").select("*").single();
	return userDetails;
});
