module.exports = {
    name: 'crks',
    description: 'returns the crks.xyz link"',
    execute(message, args) {
        message.channel.send('http://crks.xyz');
    },
};