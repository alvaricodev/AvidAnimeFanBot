const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

        client.user.setPresence({
            activities: [{
                name: '/ping',
                type: ActivityType.Listening,
                url: 'https://github.com/alvaricodev',
            }],
            status: 'online',
        });
	},
};