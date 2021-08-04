const googleIt = require("google-it");
const utilities = require("../utilities/webHookUtils");

module.exports = {
	name: "ask",
	description: "Demande au prof, fait toi ghost.",
	disabled: true,
	handle(message, args) {
		utilities.getWebhook(message.channel).then((webhook) => {
			let messageToSend = "***vu***";
			googleIt({ query: args.join(" "), disableConsole: true })
				.then((results) => {
					if (results.length) messageToSend = results[0].link;
					utilities.sendWebhookMessage(
						webhook,
						messageToSend,
						"Prof",
						"https://4.bp.blogspot.com/-x1EtpB149Tk/Uia-0QSawiI/AAAAAAAABA8/RBDLmlJJZvY/s1600/facebook-default--profile-pic.jpg"
					);
				})
				.catch((e) => {
					console.log(e);
				});
		});
	},
};
