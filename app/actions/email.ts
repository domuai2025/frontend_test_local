"use server";

import {actionClient} from "@/lib/safe-action";
import {emailSchema} from "@/types/general";
import {loops} from "@/lib/loops";

export const sendEmail = actionClient
	.schema(emailSchema)
	.action(async ({parsedInput: {email}}) => {
		if (!loops) {
			return {error: "Loops API key not setup"};
		}

		const res = await loops.sendTransactionalEmail({
			// Change this to your transactional email template ID
			transactionalId: "welcome",
			email,
		});

		if (!res.success) {
			return {error: "Failed to send email"};
		}

		return {
			success: true,
		};
	});
