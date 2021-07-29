const googleIt = require("google-it");
const utilities = require("../utilities/webHookUtils");

module.exports = {
	name: "ask",
	description: "Demande au prof, fait toi ghost.",
	disabled: false,
	handle(message, args) {
		utilities.getWebhook(message.channel).then((webhook) => {
			let messageToSend = "***vu***";
			googleIt({ query: args.join(" "), disableConsole: true })
				.then((results) => {
					if (results.length) messageToSend = results[0].link;
					utilities.sendWebhookMessage(
						webhook,
						messageToSend,
						"Domingo",
						"https://pbs.twimg.com/profile_images/715220412217565184/xV-alGUk.jpg"
					);
				})
				.catch((e) => {
					console.log(e);
				});
		});
	},
};
