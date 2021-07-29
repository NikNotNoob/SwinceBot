const config = require("../config");

module.exports = {
	name: "message",
	handle(client, message) {
		if (message.author.bot) return;
		if (message.webhookID) return;
		if (message.content.indexOf(config.prefix) !== 0) return;

		//The regex in this case will remove many consecutive spaces, instead of just one
		const args = message.content
			.slice(config.prefix.length)
			.trim()
			.split(/ +/g);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).handle(message, args);
		} catch (error) {
			console.error(error);
			message.channel.send(
				`An error occured trying to execute command ${command}`
			);
		}
	},
};
