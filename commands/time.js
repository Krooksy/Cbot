module.exports = {
    name: 'time',
    description: 'returns current time',
    execute(message, args) {
        const dateTime = new Date();
        const date = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getYear();
        const time = dateTime.getTime();

        const dateString = `The current date is ${date}-${month}-${year}`;

        message.channel.send(dateTime.toString());
    },
};