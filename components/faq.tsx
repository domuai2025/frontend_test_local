import {ArrowUpRight} from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {faqs} from "@/config";

const FAQ = () => {
	return (
		<section id="faq" className="container pb-14 pt-16 max-w-4xl mx-auto">
			<div>
				<h2 className="text-3xl md:text-4xl font-bold text-center">
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						Frequently Asked Questions
					</span>
				</h2>

				<p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
					Have a question? Contact me at <b>admin@example.com</b>
				</p>

				<div className="flex flex-col gap-8">
					{faqs.map((item, index) => (
						<Accordion key={index} type="single" collapsible>
							<AccordionItem value={item.question}>
								<AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
								<AccordionContent className="text-base md:w-3/4">
									<p
										dangerouslySetInnerHTML={{
											__html: item.answer,
										}}
									/>
									{item.link && (
										<a
											href={item.link}
											className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
										>
											Learn more <ArrowUpRight className="ml-1" size="16" />
										</a>
									)}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
