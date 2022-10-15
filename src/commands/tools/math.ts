import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import { ApplicationCommandOptionType, bold, CommandInteraction, inlineCode } from "discord.js";
import { evaluate } from "mathjs";
import { interactionI18N } from "../../utils/i18n";
import { error, success } from "../../utils/text";

const name = "math";

@Discord()
@SlashGroup({
	name,
	description: "Some math functions to help you out.",
	descriptionLocalizations: {
		"pt-BR": "Algumas funções matemáticas para te ajudar naquela provinha..."
	}
})
@SlashGroup(name)
export abstract class Math {
	@Slash({
		name: "calc",
		description: "Calculates a mathematical expression.",
		descriptionLocalizations: {
			"pt-BR": "Calcule uma expressão matemática."
		}
	})
	async eval(
		@SlashOption({
			name: "expression",
			description: "The mathematical expression to be calculated.",
			descriptionLocalizations: {
				"pt-BR": "A expressão matemática a ser calculada."
			},
			type: ApplicationCommandOptionType.String,
			required: true
		})
			expression: string,
		interaction: CommandInteraction
	) {
		const i18n = interactionI18N(interaction);
		
		const expressionArgs = {
			expression: inlineCode(expression)
		};
		
		let result: string;
		
		try {
			result = inlineCode(evaluate(expression));
		} catch {
			return await interaction.reply(
				bold(error(i18n.commands.math.calc.bad(expressionArgs)))
			);
		}
		
		await interaction.reply(
			bold(success(
				i18n.commands.math.calc.result({
					...expressionArgs,
					result
				})
			))
		);
	}
}