import { CommandInteraction, User } from "discord.js";
import L from "../i18n/i18n-node";
import { TranslationFunctions } from "../i18n/i18n-types";

export const interactionLocalize = (interaction: CommandInteraction) =>
	((L as Record<string, TranslationFunctions>)[interaction.locale] as TranslationFunctions | undefined)
	?? L.en