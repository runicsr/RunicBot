const { Client, CommandInteraction } = require('discord.js');module.exports = {
  name: 'kick',
  description: "This command kicks a member!",
  userPermissions: ["KICK_MEMBERS"],
  options: [
    {
      name: 'target',
      description: 'target to kick',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'reason for the kick',
      type: 'STRING',
      required: false
    }
  ]
  /**
   * 
   * @param {Client} client
   * @param (CommandInteraction) interaction
   * @param {String[]} args
   */
,
  run: async (client, interaction, args) => {
    const target = interaction.options.getMember("target");
    const reason = interaction.options.getString("reason");

    if (
      target.roles.highest.position >= interaction.member.roles.highest.position
    )
      return interaction.followUp({
        content: "You cannot take action on this user",
      });
    
    target.send(`You have been kicked from ${interaction.guild.name}," reason: ${reason}`
    );

    target.kick(reason);

    interaction.followUp({
      content: `Kicked ${target.user.tag} successfully! reason ${reason}`,
    });
  }
}
