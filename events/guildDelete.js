module.exports = {
	name: "guildDelete",
	handle(client, guild) {
		console.log(`${client.user.tag} has left ${guild.name}.`);
	},
};
