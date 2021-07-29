module.exports = {
	name: "ping",
	description: "Obtient latence.",
	disabled: false,
	handle(message, args) {
		message.reply(`PONG! ${Math.round(message.client.ping)} ms`);
	},
};
