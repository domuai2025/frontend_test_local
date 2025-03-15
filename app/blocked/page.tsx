import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const BlockedPage: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Access Denied</CardTitle>
				</CardHeader>
				<CardContent>
					You have been rate limited. Please try again later.
					<br />
					<small>If you believe this is an error, please contact support.</small>
				</CardContent>
				<CardFooter>
					<Link className="link" href="/">
						<Button> Go home</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default BlockedPage;
