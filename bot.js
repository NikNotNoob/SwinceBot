const Discord = require("discord.js");
const auth = require("./auth");
const fs = require("fs");
const path = require("path");

const bot = new Discord.Client({ disableEveryone: true });

const eventFiles = fs
	.readdirSync(path.join(__dirname, "events"))
	.filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.handle(bot, ...args));
	} else {
		bot.on(event.name, (...args) => event.handle(bot, ...args));
	}
}

bot.login(auth.token);
