"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Button, ButtonProps, buttonVariants} from "./button";
import {useFormStatus} from "react-dom";

export const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, size, variant, ...props}, ref) => {
		const {pending} = useFormStatus();

		return (
			<Button
				className={cn(buttonVariants({variant, size, className}))}
				type="submit"
				loading={pending}
				variant={variant}
				{...props}
			>
				{props.children}
			</Button>
		);
	},
);

SubmitButton.displayName = "SubmitButton";
