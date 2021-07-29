const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
	name: "ready",
	once: true,
	handle(client) {
		console.log(`${client.user.tag} has logged in.`);
		client.user.setActivity(`Ca swince!`, { type: `CUSTOM_STATUS` });

		client.commands = new Discord.Collection();
		const commandFiles = fs
			.readdirSync(`${process.cwd()}/commands`)
			.filter((file) => file.endsWith(".js"));

		for (const file of commandFiles) {
			const command = require(`../commands/${file}`);
			if (!command.disabled) {
				client.commands.set(command.name, command);
			}
		}
	},
};
