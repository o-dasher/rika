import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import { ApplicationCommandOptionType, bold, CommandInteraction } from "discord.js";
import { randomInt } from "crypto";
import L from "../i18n/i18n-node";
import { interactionI18N } from "../utils/i18n";

const over_limits_addition = 1;

const default_min = 1;
const default_max = 10;

const name = "dice"

const clampValue = {
	minValue: 1,
	maxValue: 10000
}

@Discord()
@SlashGroup( {
	name,
	nameLocalizations: {
		"pt-BR": "dado"
	},
	description: "Dices... they are very fun :smile:",
	descriptionLocalizations: {
		"pt-BR": "Dados... eles são bem legais :smile:"
	}
})
@SlashGroup(name)
export abstract class Dice {
	@Slash({
		name: "roll",
		nameLocalizations: {
			"pt-BR": "rolar"
		},
		description: "Rolls a dice.",
		descriptionLocalizations: {
			"pt-BR": "Rola um dado."
		}
	})
	async roll(
		@SlashOption({
			name: "min",
			description: "The min value that the dice can roll!",
			descriptionLocalizations: {
				"pt-BR": "O valor mínimo que o dado pode rolar."
			},
			type: ApplicationCommandOptionType.Number,
			...clampValue
		})
			min: number,
		@SlashOption({
			name: "max",
			description: "The max value that the dice can roll!",
			descriptionLocalizations: {
				"pt-BR": "O valor máximo que o dado poder rolar."
			},
			type: ApplicationCommandOptionType.Number,
			...clampValue
		})
			max: number,
		interaction: CommandInteraction
	) {
		min ??= default_min;
		max ??= default_max;
		
		min = Math.min(min, max - over_limits_addition)
		max = Math.max(max, min + over_limits_addition)
		
		const rolled = randomInt(min, max);
		
		await interaction.reply(
			bold(
				interactionI18N(interaction).ROLL_DICE({
					rolled,
					member: interaction.user.toString()
				})
			)
		)
	}
}