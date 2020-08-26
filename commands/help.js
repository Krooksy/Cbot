module.exports = {
    name: 'help',
    description: 'returns a list of all known commands',
    execute(message, args) {
        message.channel.send('Command list:\n');
        
    },
};