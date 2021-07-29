const DiscordJS = require("discord.js");

/**
 * Returns webhook if channel has one, else creates new one.
 * @param {DiscordJS.TextChannel} channel The channel to get the webhook from.
 * @returns {Promise<DiscordJS.Webhook>} A promise containing the webhook.
 */
function getWebhook(channel) {
	return new Promise((resolve) => {
		channel.fetchWebhooks().then(async (webhooks) => {
			let webhook = webhooks.first();
			if (!webhook) {
				webhook = await channel.createWebhook("SwinceBotHook");
			}

			resolve(webhook);
		});
	});
}

/**
 * Sends a message with a certain webhook using a username and avatar
 * @param {DiscordJS.Webhook} webhook
 * @param {string} hookMessage
 * @param {string} hookUsername
 * @param {string} hookAvatarURL
 */
function sendWebhookMessage(webhook, hookMessage, hookUsername, hookAvatarURL) {
	webhook.send(hookMessage, {
		username: hookUsername,
		avatarURL: hookAvatarURL,
	});
}

module.exports = { getWebhook, sendWebhookMessage };
