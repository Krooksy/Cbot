module.exports = {
    name: 'server',
    description: 'returns the name of the server',
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer ID: ${message.guild.id}`);
    },
};