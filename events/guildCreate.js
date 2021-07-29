module.exports = {
	name: "guildCreate",
	handle(client, guild) {
		console.log(`${client.user.tag} has joined ${guild.name}.`);
	},
};
