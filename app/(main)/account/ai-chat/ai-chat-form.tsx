"use client";

import {useChat} from "ai/react";
import {useState, useEffect} from "react";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {SendIcon, BotIcon, UserIcon} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";

// Define Zod schema for message
const MessageSchema = z.object({
	id: z.string(),
	role: z.enum(["user", "assistant"]),
	content: z.string().min(1, "Message cannot be empty").max(1000, "Message is too long"),
});

// Define Zod schema for chat state
const ChatStateSchema = z.object({
	messages: z.array(MessageSchema),
	input: z.string().max(1000, "Input is too long"),
});

export function AIChatForm() {
	const {messages, input, handleInputChange, handleSubmit, setMessages, isLoading} =
		useChat();
	const {toast} = useToast();

	useEffect(() => {
		// Add default AI message if there are no messages
		if (messages.length === 0) {
			setMessages([
				{
					id: "1",
					role: "assistant",
					content: "How can I help you?",
				},
			]);
		}
	}, [messages]);

	const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// Validate current chat state
			ChatStateSchema.parse({messages, input});
			handleSubmit(e);
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Handle validation errors
				error.errors.forEach((err) => {
					toast({
						title: "Input Error",
						description: err.message,
						variant: "destructive",
					});
				});
			} else {
				// Handle other errors
				toast({
					title: "Error",
					description: "An unexpected error occurred",
					variant: "destructive",
				});
			}
		}
	};

	return (
		<div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden shadow-lg">
			<div className="bg-primary p-4 text-primary-foreground">
				<h2 className="text-2xl font-bold">AI Chat</h2>
			</div>
			<ScrollArea id="scroll-area" className="flex-grow p-4 bg-background">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex items-start mb-4 ${
							message.role === "user" ? "justify-end" : ""
						}`}
					>
						<div
							className={`flex items-start space-x-2 ${
								message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
							}`}
						>
							<div
								className={`w-8 h-8 rounded-full flex items-center justify-center ${
									message.role === "user"
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground"
								}`}
							>
								{message.role === "user" ? (
									<UserIcon className="w-5 h-5" />
								) : (
									<BotIcon className="w-5 h-5" />
								)}
							</div>
							<div
								className={`max-w-xs px-4 py-2 rounded-lg ${
									message.role === "user"
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground"
								}`}
							>
								{message.content}
							</div>
						</div>
					</div>
				))}
				{isLoading && (
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground">
							<BotIcon className="w-5 h-5" />
						</div>
						<div className="text-muted-foreground">AI is typing...</div>
					</div>
				)}
			</ScrollArea>
			<div className="p-4 bg-background border-t">
				<form onSubmit={validateAndSubmit} className="flex space-x-2">
					<Input
						type="text"
						placeholder="Type your message..."
						value={input}
						onChange={(e) => {
							const newInput = e.target.value;
							try {
								z.string().max(1000, "Input is too long").parse(newInput);
								handleInputChange(e);
							} catch (error) {
								if (error instanceof z.ZodError) {
									toast({
										title: "Input Error",
										description: error.errors[0].message,
										variant: "destructive",
									});
								}
							}
						}}
						className="flex-grow"
					/>
					<Button type="submit" className="w-20" size="icon" disabled={isLoading}>
						Send
					</Button>
				</form>
			</div>
		</div>
	);
}
