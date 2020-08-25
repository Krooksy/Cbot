module.exports = {
    name: 'prune',
    description: 'removes inactive users from the server',
    execute(message, args) {
        message.guild.members.prune({ days: 30, dry: false, reason: 'Inactive for too long.' })
            .then(pruned => console.log(`This will prune ${pruned} people!`))
            .catch(console.error);
        message.channel.send('The server has been pruned.');
    },
};