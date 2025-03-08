// Importing the dotenv package to load environment variables from a .env file
import "dotenv/config";

// Importing the axios package for making HTTP requests
import axios from "axios";

// Importing the necessary classes from the discord.js library
import { Client, GatewayIntentBits } from "discord.js";

// Creating a new instance of the Discord client with specified intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Logging a message when the bot is ready and connected to Discord
client.on("ready", () => {
  console.log("Bot is ready");
});

// Listening for new messages in the Discord server
client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    message.reply("pong"); // Responding with 'pong' when a message with content 'ping' is received
  }

  // else if (message.content === 'quote') {
  //     // Making an HTTP GET request to fetch a random quote
  //     const resp = await axios.get('https://api.quotable.io/random');
  //     const quote = resp.data.content;
  //     message.reply(quote); // Responding with the fetched quote
  // }
});

// Logging in the bot using the Discord Bot ID from the environment variables
client.login(process.env.DISCORD_BOT_ID);
