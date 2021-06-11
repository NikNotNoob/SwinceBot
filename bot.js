const Discord = require('discord.js');
const config = require('./config');
const auth = require('./auth');
const fs = require('fs');
const path = require('path');
const bot = new Discord.Client({disableEveryone: true});

const prefix = '>';
let xdSent = false;

bot.once('ready', () => {
    console.log(`${bot.user.tag} has logged in.`);
    bot.user.setActivity(`Ca swince!`, {type: `CUSTOM_STATUS`});
});

bot.on('guildCreate', guild => console.log(`${bot.user.tag} has joined ${guild.name}.`));

bot.on('guildDelete', guild => console.log(`${bot.user.tag} has left ${guild.name}.`));

bot.on('message', message => {

    if(message.author.id == "218406279683506177" && !xdSent) {
        xdSent = true;
        message.channel.send("*Du coup, " + message.content + "* **XD**").then(msg => {
            setTimeout(() => msg.delete(), 1000);
        });
    }

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    //The regex in this case will remove many consecutive spaces, instead of just one
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.reply(`PONG! ${Math.round(message.client.ping)} ms`);
    }

    if(command === 'help') {
        const helpMessage = new Discord.RichEmbed()
            .setColor('#00FF22')
            .setTitle('Commandes')
            .setDescription('Exclusivités Twisted Tea')
            .addField('Ping', 'Obtient latence.')
            .addField('Help', 'Comment t\'as eu ce message lol')
            .addField('Swince', `+1 swince!!!`)
            .addField('SwinceStats', `Nombre de swince`);
            message.channel.send(helpMessage);
    }

    if(command === "addswince") {
        let swince;
        let data;

        fs.readFile(path.resolve(__dirname, 'config.json'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            swince = JSON.parse(data);
            if(swince[message.author.id]) swince[message.author.id]++;
            else swince[message.author.id] = 1;
            data = JSON.stringify(swince, null, 2);
            fs.writeFile(path.resolve(__dirname, 'config.json'), data, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                message.channel.send(`+1 swince pour ${message.author.username}! ${swince[message.author.id]} à date!`);
            });
        });
    }

    if(command === "swince") {
        let swince;
        let data;

        fs.readFile(path.resolve(__dirname, 'config.json'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            swince = JSON.parse(data);
            if(swince[message.author.id] && swince[message.author.id] > 0) swince[message.author.id]--;
            else swince[message.author.id] = 0;
            data = JSON.stringify(swince, null, 2);
            fs.writeFile(path.resolve(__dirname, 'config.json'), data, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                message.channel.send(`${message.author.username} a soincé! ${swince[message.author.id]} restantes!`);
            });
        });
    }

    if(command === "swincestats") {
        let swince;
        let swince_count;
        fs.readFile(path.resolve(__dirname, 'config.json'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            swince = JSON.parse(data);
            swince_count = (swince[message.author.id] === undefined) ? 0 : swince[message.author.id];
            message.channel.send(`${swince_count} swinces à date pour ${message.author.username}!`);
        });
    }
});

bot.on('error', err => {
    console.error(err);
})

bot.login(auth.token);
