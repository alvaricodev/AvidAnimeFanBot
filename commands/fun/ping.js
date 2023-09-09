const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Notify user the bot is listening'),
    async execute(interaction) {
        await interaction.reply('Yes, I am listening!');
    },
};