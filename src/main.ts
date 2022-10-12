import { importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";
import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import { config } from "dotenv";
import { server } from "./server";

config();

server();

export const bot = new Client({
	botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
	
	// Discord intents
	intents: [
		IntentsBitField.Flags.Guilds
	],
	
	// Debug logs are disabled in silent mode
	silent: false,
	
	// Configuration for @SimpleCommand
	simpleCommand: {
		prefix: "!"
	}
});

bot.once("ready", async () => {
	// Make sure all guilds are cached
	await bot.guilds.fetch();
	
	// Synchronize applications commands with Discord
	await bot.initApplicationCommands();
	
	// To clear all guild commands, uncomment this line,
	// This is useful when moving from guild commands to global commands
	// It must only be executed once
	//
	//  await bot.clearApplicationCommands(
	//    ...bot.guilds.cache.map((g) => g.id)
	//  );
	
	console.log("Bot started");
});

bot.on("interactionCreate", async (interaction: Interaction) => {
	await bot.executeInteraction(interaction);
});

bot.on("messageCreate", async (message: Message) => {
	await bot.executeCommand(message);
});

async function run() {
	await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
	
	// Let's start the bot
	if (!process.env.BOT_TOKEN) {
		throw Error("Could not find BOT_TOKEN in your environment");
	}
	
	// Log in with your bot token
	await bot.login(process.env.BOT_TOKEN);
}

void run();
