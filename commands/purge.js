module.exports = {
    name: 'purge',
    description: 'purges the amount of specified messages',
    execute(message, args) {
        // This command removes all messages from all users in the channel, up to 100.
        // get the delete count, as an actual number.
        const deleteCount = parseInt(args[0], 10);

        // Ooooh nice, combined conditions. <3
        if(!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.reply('Please provide a number between 2 and 100 for the number of messages to delete');
        }
        message.channel.bulkDelete(deleteCount)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    },
};