import { MapValues } from "./types";

const discordEmotify = <T extends string>(name: T): `:${T}:` => `:${name}:`;

const GameDie = discordEmotify("game_die");
const Smile = discordEmotify("smile");
const WhiteCheckMark = discordEmotify("white_check_mark");
const X = discordEmotify("x");
const CameraWithFlash = discordEmotify("camera_with_flash");

export const DiscordEmotes = {
	CameraWithFlash,
	GameDie,
	Smile,
	WhiteCheckMark,
	X
};

export type DiscordEmote = MapValues<typeof DiscordEmotes>