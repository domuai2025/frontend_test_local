"use client";
import {createContext, useContext, useState} from "react";

type LoadedState = {
	pixel: boolean | undefined;
	analytics: boolean | undefined;
	clarity: boolean | undefined;
	promokit: boolean | undefined;
};

const defaultLoadedState = {
	pixel: process.env.NEXT_PUBLIC_PROMOTE_KIT_ID ? undefined : false,
	analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? undefined : false,
	clarity: process.env.NEXT_PUBLIC_CLARITY_ID ? undefined : false,
	promokit: process.env.NEXT_PUBLIC_PROMOTE_KIT_ID ? undefined : false,
};

export const ExternalContext = createContext<{
	loaded: LoadedState;
	setLoaded: React.Dispatch<React.SetStateAction<LoadedState>>;
}>({
	loaded: defaultLoadedState,
	setLoaded: () => {},
});

ExternalContext.displayName = "ExternalContext";

export function ExternalProvider({children}: {children: React.ReactNode}) {
	const [loaded, setLoaded] = useState<LoadedState>(defaultLoadedState);

	return (
		<ExternalContext.Provider value={{loaded, setLoaded}}>
			{children}
		</ExternalContext.Provider>
	);
}

export function useExternal() {
	const context = useContext(ExternalContext);
	if (context === undefined) {
		throw new Error("useExternal must be used within an ExternalProvider");
	}
	return context;
}
