const { Client, Collection } = require("discord.js");
require("dotenv")
const keepAlive = require("./server")
const welcome = require('./welcome')

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

  welcome(client)

client.login(client.config.token);

keepAlive()