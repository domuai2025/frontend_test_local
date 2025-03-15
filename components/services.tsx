"use client";
import {Card, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {OrbitingCircles} from "./orbit";
import {AnimatedBeam} from "./ui/animated-beam";
import React, {
	RefCallback,
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import {useIsVisible} from "@/hooks/useIsVisible";
import {services} from "@/config";
import {NoSsr} from "@/hooks/noSsr";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "./ui/dialog";

export const Services = () => {
	const isWindowDefined = typeof window !== "undefined";
	const [isLargeScreen, setIsLargeScreen] = useState(
		() => isWindowDefined && window.innerWidth > 640,
	);
	const serviceList = services.map((service) => ({
		...service,
		ref: useRef<HTMLDivElement>(null),
	}));

	const containerRef = useRef<HTMLDivElement>(null);
	const divDestinationRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isWindowDefined) {
			return;
		}

		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 640);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [openDialog, setOpenDialog] = useState(false);
	const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(
		null,
	);

	const handleOpenDialog = (service: (typeof services)[0]) => {
		setSelectedService(service);
		setOpenDialog(true);
	};

	return (
		<section id="services" className="relative container pb-20" ref={containerRef}>
			<div className="text-center">
				<h2 className="text-3xl md:text-4xl font-bold">
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						List of our services
					</span>
				</h2>
				<p className="text-muted-foreground text-xl mt-4 mb-8 ">
					some of the best on the market
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="col-span-1">
					<div className="lg:grid lg:grid-cols-2 gap-4 py-8 place-items-center">
						{serviceList.map(
							({title, description, smallText, listOfFeatures, ref}, index: number) => (
								<React.Fragment key={index}>
									<div
										className={`
										mb-4 lg:mb-0 h-full w-full
										${index === serviceList.length - 1 ? "col-span-2" : "col-span-1"}`}
									>
										{isLargeScreen && (
											<NoSsr>
												<AnimatedBeam
													key={description}
													containerRef={containerRef}
													fromRef={ref}
													toRef={divDestinationRef}
												/>
											</NoSsr>
										)}
										<ServiceCard
											title={title}
											description={description}
											smallText={smallText}
											ref={ref}
											onClick={() =>
												handleOpenDialog({title, description, smallText, listOfFeatures})
											}
										/>
									</div>
								</React.Fragment>
							),
						)}
					</div>
				</div>
				<div className="col-span-1 content-center justify-center items-center">
					<OrbitingCircles ref={divDestinationRef} />
				</div>
			</div>
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent className="max-w-sm">
					<DialogHeader>
						<DialogTitle>{selectedService?.title}</DialogTitle>
					</DialogHeader>
					<div className="py-4">
						{selectedService?.listOfFeatures.map((feature, index) => (
							<p key={index}>
								<span className="text-green-500 mr-2">✓</span>
								{feature}
							</p>
						))}
					</div>
				</DialogContent>
			</Dialog>
		</section>
	);
};

interface ServiceCardProps {
	title: string;
	description: string;
	smallText: string;
	onClick: () => void;
}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
	({title, description, smallText, onClick}, forwardedRef) => {
		const [show, setNodeRef] = useIsVisible<HTMLDivElement>();

		const setRefs: RefCallback<HTMLDivElement> = useCallback(
			(node) => {
				setNodeRef(node);
				if (typeof forwardedRef === "function") {
					forwardedRef(node);
				} else if (forwardedRef) {
					forwardedRef.current = node;
				}
			},
			[forwardedRef, setNodeRef],
		);
		return (
			<Card
				ref={setRefs}
				className={`z-10 transition-opacity ease-in duration-1000 animate-delay-200 ${
					show ? "opacity-100" : "opacity-0"
				} cursor-pointer hover:bg-accent`}
				onClick={onClick}
			>
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div>
						<CardTitle>{title}</CardTitle>
						<CardDescription className="text-md mt-2">
							{description}
							<br />
							<b className="mt-2 text-sm leading-7 text-primary">{smallText}</b>
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		);
	},
);

ServiceCard.displayName = "ServiceCard";
