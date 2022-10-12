import { DiscordEmote, DiscordEmotes } from "./emotes";

export const emotify = (emote: DiscordEmote, text: string) => `${emote} | ${text}`

export const error = (text: string) => emotify(DiscordEmotes.X, text)