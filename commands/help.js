const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
	name: "help",
	description: "Comment t'as eu ce message lol",
	disabled: false,
	handle(message, args) {
		const helpMessage = new Discord.RichEmbed()
			.setColor("#00FF22")
			.setTitle("Commandes")
			.setDescription("Exclusivités Twisted Tea");

		const commandFiles = fs
			.readdirSync(__dirname)
			.filter((file) => file.endsWith(".js"));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			if (!command.disabled) {
				helpMessage.addField(command.name, command.description);
			}
		}

		message.channel.send(helpMessage);
	},
};
