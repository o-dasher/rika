import { CommandInteraction } from "discord.js";
import L from "../i18n/i18n-node";
import { TranslationFunctions } from "../i18n/i18n-types";

/**
 * How many default properties there are on a TranslationFunction.
 * {length, name}.
 */
const default_property_count = 2;

const default_i18n = L.en;

export const interactionI18N = (interaction: CommandInteraction) => {
	const record = L as Record<string, TranslationFunctions>;
	const i18n = record[interaction.locale];
	
	return Object.getOwnPropertyNames(i18n).length == default_property_count
	       ? default_i18n : i18n;
};