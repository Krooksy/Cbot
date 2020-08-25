module.exports = {
    name: 'ban',
    description: 'bans the first tagged user',
    execute(message, args) {

        // Checks that the user issuing the command is of the correct role
        if(!message.member.roles.cache.some(r=>['Admins'].includes(r.name))) {
            return message.reply('Sorry, you don\'t have permissions to use this!');
        }
        // First tagged user
        let taggedUser = message.mentions.members.first();

        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        if(!taggedUser) {
            return message.reply('Please mention a valid member of this server');
        }
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            return message.reply('I cannot ban this user!');
        }
        taggedUser.ban()
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`))
            .then(message.channel.send(`${taggedUser} has been banned.`));
    },
};