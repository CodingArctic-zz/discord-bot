module.exports = {
	name: 'server',
    description: 'Display info about this server.',
    cooldown: 5,
    guildOnly: true,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};