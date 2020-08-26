module.exports = {
    name: 'help',
    description: 'returns a list of all known commands',
    execute(message, args) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const commandList = []; 
        for (const file of commandFiles) {
            commandList.push(file.slice(0, -3));
        }
        const commandListString = commandList.join('\n');

        message.channel.send(`Command list:\n${commandListString}`);
    },
};