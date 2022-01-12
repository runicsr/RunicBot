const { Client, CommandInteraction } = require('discord.js');
module.exports = {
    name: "unban",
    description: "unban a user",
    userPermissions: ["BAN_MEMBERS"],
    options: [
    {
        name: "userid",
        description: "userid that you want to unban",
        type: "STRING",
        required: true,
    },
  ],
  /**
   * 
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
    
  run: async (client, interaction) => {
    const userId = interaction.options.getString('userId');
    
    interaction.guild.members.unban(userId).then((user) => {
      interaction.followUp({
        content: `${user.tag} is unbanned from this server!`,
      });
    }).catch(() => {
      interaction.followUp({ content: "Please specify a banned member's id",
            })
        }
    )}}
