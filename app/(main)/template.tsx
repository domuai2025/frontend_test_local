"use client";
import {Background} from "@/components/background";
import {defaultBackground} from "@/config";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function Template({children}: {children: React.ReactNode}) {
	const [mounted, setMounted] = useState(false);
	const {theme} = useTheme();
	useEffect(() => setMounted(true), [theme]);

	return (
		<>
			{mounted && <Background theme={theme} type={defaultBackground} />}
			<div>{children}</div>
		</>
	);
}
