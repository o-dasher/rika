import { Discord, Slash } from "discordx";
import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	CommandInteraction,
	EmbedBuilder,
	OAuth2Scopes,
	PermissionsBitField
} from "discord.js";
import { FULL_FRAME_AVATAR_SIZE, rikaEmbed } from "../../utils/embeds";
import { interactionI18N } from "../../utils/i18n";

@Discord()
export abstract class InviteCommand {
	@Slash({
		name: "invite",
		description: "Invite rika to your server!",
		descriptionLocalizations: {
			"pt-BR": "Convide a rika para o seu servidor!"
		}
	})
	async invite(interaction: CommandInteraction) {
		const { client } = interaction;
		const i18n = interactionI18N(interaction);
		
		const embed = rikaEmbed(new EmbedBuilder())
			.setTitle(i18n.commands.invite.title())
			.setDescription(i18n.commands.invite.description())
			.setImage(client.user.avatarURL({ size: FULL_FRAME_AVATAR_SIZE }));
		
		const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
					.setLabel(i18n.commands.invite.button())
					.setURL(client.generateInvite({
						permissions: [PermissionsBitField.Flags.Administrator],
						scopes: [
							OAuth2Scopes.Bot,
							OAuth2Scopes.ApplicationsCommands
						]
					}))
			);
		
		await interaction.reply({
			components: [row],
			embeds: [embed]
		});
	}
}