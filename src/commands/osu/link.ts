import { Slash } from "discordx";
import { CommandInteraction } from "discord.js";
import { MakeOsuCommand } from "./osu";

@MakeOsuCommand
export abstract class OsuLink {
	@Slash({ name: "link", description: "stuff." })
	async link(interaction: CommandInteraction) {
		await interaction.reply("HI!");
	}
}