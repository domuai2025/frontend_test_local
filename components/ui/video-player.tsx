"use client";
import "@vidstack/react/player/styles/base.css";

import {useEffect, useRef, useState} from "react";

import {
	isHLSProvider,
	isYouTubeProvider,
	MediaPlayer,
	MediaPlayerInstance,
	MediaProvider,
	Poster,
	useStore,
	type MediaCanPlayDetail,
	type MediaCanPlayEvent,
	type MediaProviderAdapter,
	type MediaProviderChangeEvent,
} from "@vidstack/react";

import {VideoLayout} from "./video-layout";

export function Player({
	videoSrc,
	posterSrc,
	comment,
}: {
	videoSrc: string;
	posterSrc: string;
	comment?: string;
}) {
	let player = useRef<MediaPlayerInstance>(null);
	useEffect(() => {
		// Subscribe to state updates.
		return player.current!.subscribe(({paused, viewType, height, canPlay}) => {
			// console.log('is paused?', '->', state.paused);
			// console.log('is audio view?', '->', state.viewType === 'audio');
		});
	}, []);

	function onProviderChange(
		provider: MediaProviderAdapter | null,
		nativeEvent: MediaProviderChangeEvent,
	) {
		if (isHLSProvider(provider)) {
			provider.config = {};
		}
	}

	// We can listen for the `can-play` event to be notified when the player is ready.
	function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {}

	return (
		<MediaPlayer
			className="w-full aspect-auto font-sans overflow-hidden rounded-t-md ring-media-focus data-[focus]:ring-4"
			src={videoSrc}
			crossOrigin
			playsInline={true}
			onProviderChange={onProviderChange}
			onCanPlay={onCanPlay}
			ref={player}
		>
			<MediaProvider></MediaProvider>
			<Poster
				className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
				src={posterSrc}
				alt="Loading..."
			/>
			{comment && <VideoLayout comment={comment} />}
		</MediaPlayer>
	);
}
