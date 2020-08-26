module.exports = {
    name: 'double',
    description: 'doubles the number passed in',
    execute(message, args) {
        const num = parseInt(args[0], 10);
        message.channel.send(num * 2);
    },
};