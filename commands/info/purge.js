const ms = require("ms");
module.exports = {
  name: "purge",
  description: "remove messages",
  userPermissions: ["MANAGE_MESSAGES"],
  options: [
      {
         name: 'amount',
         description: 'amount of messages that are going to be deleted',
         type: 'INTEGER',
         required: true,
      },
  ],
  run: async(client, interaction) => {
      const amount = interaction.options.getInteger('amount');
      if(amount > 100)
         return interaction.followUp({
              content:
                  "The maximum amount of message you can delete is 100 messages"
         });
      const messages = await interaction.channel.messages.fetch({
           limit: amount + 1,
      });
   
      const filtered = messages.filter(
          (msg) => Date.now() - msg.createdTimestamp < ms("14 days")
      );
                                       
      await interaction.channel.bulkDelete(filtered)
      
      interaction.channel.send({
          content: `Deleted ${filtered.size - 1} messages`,
      })
      .then((msg) => {
          setTimeout(() => msg.delete(), ms('5 seconds'))
      },
)}}
