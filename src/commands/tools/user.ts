import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import {
	ActionRowBuilder,
	ApplicationCommandOptionType,
	ButtonBuilder,
	ButtonStyle,
	CommandInteraction,
	EmbedBuilder,
	User
} from "discord.js";
import { emotifySpaced, emptyCharacter } from "../../utils/text";
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
		
		const i18n = interactionI18N(interaction);
		
		const userAvatar = user.avatarURL({ size: FULL_FRAME_AVATAR_SIZE });
		const displayAvatar = user.displayAvatarURL({ size: FULL_FRAME_AVATAR_SIZE });
		
		const embed = rikaEmbed(new EmbedBuilder())
			.setImage(displayAvatar)
			.setTitle(emotifySpaced(DiscordEmotes.CameraWithFlash, user.tag));
		
		if (userAvatar && userAvatar != displayAvatar) {
			embed.setAuthor({
				name: emptyCharacter,
				iconURL: userAvatar
			});
		}
		
		const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents(
				new ButtonBuilder()
					.setStyle(ButtonStyle.Link)
					.setURL(displayAvatar)
					.setLabel(i18n.commands.user.avatar.view_avatar())
			);
		
		await interaction.reply({
			components: [row],
			embeds: [embed]
		});
	}
}