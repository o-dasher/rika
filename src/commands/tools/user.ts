import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import {
	ActionRowBuilder,
	ApplicationCommandOptionType,
	bold,
	ButtonBuilder,
	ButtonStyle,
	CommandInteraction,
	EmbedBuilder,
	User
} from "discord.js";
import { emotifySpaced, error } from "../../utils/text";
import { DiscordEmotes } from "../../utils/emotes";
import { FULL_FRAME_AVATAR_SIZE, rikaEmbed } from "../../utils/embeds";
import { interactionI18N } from "../../utils/i18n";

const name = "user";

@Discord()
@SlashGroup({
	name,
	description: "Grab some information about a user.",
	descriptionLocalizations: {
		"pt-BR": "Pegue informações sobre algum usuário."
	}
})
@SlashGroup(name)
export abstract class UserCommand {
	@Slash({
		name: "avatar",
		description: "View the avatar of @someone.",
		descriptionLocalizations: {
			"pt-BR": "Veja o avatar de alguém."
		}
	})
	async avatar(
		@SlashOption({
			name: "user",
			description: "The user you want to stole the avatar from...",
			descriptionLocalizations: {
				"pt-BR": "O cara que você quer roubar o avatar..."
			},
			type: ApplicationCommandOptionType.User
		})
			user: User,
		interaction: CommandInteraction
	) {
		user ??= interaction.user;
		
		const { username } = user;
		
		const i18n = interactionI18N(interaction);
		const avatarURL = user.avatarURL({ size: FULL_FRAME_AVATAR_SIZE });
		
		const embed = rikaEmbed(new EmbedBuilder())
			.setTitle(emotifySpaced(DiscordEmotes.CameraWithFlash, username))
			.setImage(avatarURL);
		
		if (!avatarURL)
			return await interaction.reply(
				bold(error(i18n.commands.user.avatar.not_found({ username })))
			);
		
		const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
					.setURL(avatarURL)
					.setLabel(i18n.commands.user.avatar.view_avatar())
			);
		
		await interaction.reply({
			components: [row],
			embeds: [embed]
		});
	}
}