const fs = require("fs");
const path = require("path");
const config = require("../config");

module.exports = {
	name: "swincestats",
	description: "Nombre de swince",
	disabled: false,
	handle(message, args) {
		let swince;
		let swince_count;
		fs.readFile(path.resolve(process.cwd(), config.swinceFile), (err, data) => {
			if (err) {
				console.log(err);
				return;
			}
			swince = JSON.parse(data);
			swince_count =
				swince[message.author.id] === undefined ? 0 : swince[message.author.id];
			message.channel.send(
				`${swince_count} swinces à date pour ${message.author.username}!`
			);
		});
	},
};
