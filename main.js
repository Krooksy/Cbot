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
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if (command === 'crks') {
        client.commands.get('crks').execute(message, args);
    }
    if(command === 'time') {
        client.commands.get('time').execute(message, args);
    }
    if(command === 'server') {
        client.commands.get('server').execute(message, args);
    }
    if(command === 'purge') {
        client.commands.get('purge').execute(message, args);
    }
    if(command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    if(command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'prune') {
        client.commands.get('prune').execute(message, args);
    }
});

// Must stay at the end
client.login(config.token);

// test comment