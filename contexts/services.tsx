import {createContext} from "react";

export const GeneratedTextContext = createContext<{
	generatedText: string | null;
	setGeneratedText: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const GeneratedImageContext = createContext<{
	generatedImage: string | null;
	setGeneratedImage: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const GeneratedAudioContext = createContext<{
	generatedAudio: string | null;
	setGeneratedAudio: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);
