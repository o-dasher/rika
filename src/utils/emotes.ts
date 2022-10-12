import { MapValues } from "./types";

const discordEmotify = <T extends string>(name: T): `:${T}:` => `:${name}:`

const GameDie = discordEmotify("game_die")
const Smile = discordEmotify("smile")
const X = discordEmotify("x")

export const DiscordEmotes = {
	GameDie,
	Smile,
	X
}

export type DiscordEmote = MapValues<typeof DiscordEmotes>