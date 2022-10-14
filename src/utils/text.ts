import { DiscordEmote, DiscordEmotes } from "./emotes";

export type EmotifyFunction = (emote: DiscordEmote, text: string) => string;
export type EmotifyFunctionWithSeparator =
	(emote: DiscordEmote, text: string, separator: string) => string;

export const emotify: EmotifyFunctionWithSeparator =
	             (emote, text, separator) => `${emote} ${separator} ${text}`;

export const emotifySlashed: EmotifyFunction = (emote, text) =>
	emotify(emote, text, "|");

export const emotifySpaced: EmotifyFunction = (emote, text) =>
	emotify(emote, text, " ");

export const error = (text: string) => emotifySlashed(DiscordEmotes.X, text);

export const success = (text: string) =>
	emotifySlashed(DiscordEmotes.WhiteCheckMark, text);