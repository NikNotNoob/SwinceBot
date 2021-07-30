const fs = require("fs");
const path = require("path");
const config = require("../config");

module.exports = {
	name: "addswince",
	description: "+1 swince!!!",
	disabled: false,
	handle(message, args) {
		let swince;
		let newData;

		fs.writeFile(
			path.resolve(__dirname, `../${config.swinceFile}`),
			JSON.stringify({}),
			{ flag: "wx" },
			(err) => {
				if (err) throw err;
			}
		);

		fs.readFile(
			path.resolve(__dirname, `../${config.swinceFile}`),
			(err, data) => {
				if (err) {
					console.log(err);
					return;
				}
				swince = JSON.parse(data);
				if (swince[message.author.id]) swince[message.author.id]++;
				else swince[message.author.id] = 1;
				newData = JSON.stringify(swince, null, 2);
				fs.writeFile(
					path.resolve(__dirname, `../${config.swinceFile}`),
					newData,
					(err) => {
						if (err) {
							console.log(err);
							return;
						}
						message.channel.send(
							`+1 swince pour ${message.author.username}! ${
								swince[message.author.id]
							} à date!`
						);
					}
				);
			}
		);
	},
};
