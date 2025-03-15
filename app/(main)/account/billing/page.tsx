import {Separator} from "@/components/ui/separator";
import BillingForm from "./billingForm";
import {getSubscription} from "@/lib/supabase/admin";
import {createClient} from "@/lib/supabase/server";

// This example uses client side rendering
export default async function BillingPage() {
	const supabase = createClient();
	const subscription = await getSubscription(supabase);
	return (
		<div className="space-y-6 lg:max-w-2xl">
			<div>
				<h3 className="text-lg font-medium">Billing</h3>
				<p className="text-sm text-muted-foreground">Manage your subscription</p>
			</div>
			<Separator />
			<BillingForm subscription={subscription} />
		</div>
	);
}
