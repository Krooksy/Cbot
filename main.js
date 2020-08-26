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

    const commandList = []; 
    for (const file of commandFiles) {
        commandList.push(file.slice(0, -3));
    }

    if (commandList.includes(commandName)) {
        command.execute(message, args);
    } else {
        message.channel.send('Bruh, that\'s not a command, type "-help" for the command list');
    }
});

// Must stay at the end
client.login(config.token);