const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
// command prefix
const prefix = config.prefix;

// On notification
client.once('ready', () => {
    console.log('Ready to rumble!');
});

// Check prefix is valid and read command, find command file
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (commandName === commandName) {
        command.execute(message, args);
    }
});

// Must stay at the end
client.login(config.token);

// test comment