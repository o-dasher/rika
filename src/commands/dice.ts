import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import { ApplicationCommandOptionType, bold, CommandInteraction } from "discord.js";
import { randomInt } from "crypto";
import L from "../i18n/i18n-node";
import { interactionLocalize } from "../utils/i18n";

const default_min = 1;
const default_max = 10;

const name = "dice"

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
			type: ApplicationCommandOptionType.Number
		})
			min: number,
		@SlashOption({
			name: "max",
			description: "The max value that the dice can roll!",
			descriptionLocalizations: {
				"pt-BR": "O valor máximo que o dado poder rolar."
			},
			type: ApplicationCommandOptionType.Number
		})
			max: number,
		interaction: CommandInteraction
	) {
		min ??= default_min;
		max ??= default_max;
		
		const rolled = randomInt(min, max);
		
		await interaction.reply(
			bold(
				interactionLocalize(interaction).ROLL_DICE({
					rolled,
					member: interaction.user.toString()
				})
			)
		)
	}
}