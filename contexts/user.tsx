"use client";
import React, {createContext, useContext} from "react";
import {User} from "@supabase/supabase-js";
import {Tables} from "@/types/db";

type UserDetails = Tables<"users">;

type UserContextType = {
	user: User | null;
	userDetails: UserDetails | null;
	setUserDetails: (userDetails: Partial<UserDetails>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
	children,
	user,
	userDetails: initialUserDetails,
}: {
	children: React.ReactNode;
	user: User | null;
	userDetails: UserDetails | null;
}) {
	const [userDetails, setUserDetailsState] = React.useState<UserDetails | null>(
		initialUserDetails,
	);

	const setUserDetails = (newUserData: Partial<UserDetails>) => {
		setUserDetailsState(
			(prevUserDetails) =>
				({
					...prevUserDetails,
					...newUserData,
				} as UserDetails),
		);
	};

	return (
		<UserContext.Provider value={{user, userDetails, setUserDetails}}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
