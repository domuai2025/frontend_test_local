"use client";

import {Separator} from "@/components/ui/separator";
import React from "react";
import {AccountForm} from "./accountForm";

// This example uses client side rendering
export default function AccountPage() {
	return (
		<div className="space-y-6 lg:max-w-2xl">
			<div>
				<h3 className="text-lg font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings. Set your preferred language and timezone.
				</p>
			</div>
			<Separator />
			<AccountForm />
		</div>
	);
}
