import { formatEmoji } from "discord.js";
import { MapValues } from "./types";

const gameDie = "game_die";
const smile = "smile"
const x = "x"

export const DiscordEmotes = {
	GameDie: formatEmoji<typeof gameDie>(gameDie),
	Smile: formatEmoji<typeof smile>(smile),
	X: formatEmoji<typeof x>(x)
}

export type DiscordEmote = MapValues<typeof DiscordEmotes>