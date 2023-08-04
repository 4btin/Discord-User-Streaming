const express = require("express");
const chalk = require("chalk");
const server = express();
const dotenv = require('dotenv');
const { Client } = require('discord.js-selfbot-v11');

dotenv.config();

const users = [
  {
    name: "abtin",
    clientId: process.env.clientId,
    token: process.env.abtin,
    status: {
      name: "twitch",
      type: "STREAMING",
      details: "Streaming Something",
      largeText: "Your Large text", // Enter Your Large text
      image: "Your Image id" // Enter Your Discord Clinet Image id
    }
  }
];

for (const user of users) {
  const client = new Client();
  loginClient(client, user.name, user.clientId, user.token, user.status);
}

function loginClient(client, name, clientId, token, status) {
  client.login(token);
 
  console.clear();
  console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting Up`)))
  console.log(`\u001b[0m`)
  console.log(chalk.blue(chalk.bold(`©4btin Streaming User`)), (chalk.white(`|`)), (chalk.green(`2005 - ${new Date().getFullYear()}`)), (chalk.white(`|`)), (chalk.red(`All Rights Reserved`)))
  console.log(`\u001b[0m`)  

  client.on("ready", () => {
    console.log(`[${chalk.red.bold("+")}] ${chalk.blue.bold("Successfully logged in as")} ${chalk.green.bold(`${client.user.username}`)}`);
    setDefaultStatus(client, clientId, status);
  });
}

function setDefaultStatus(client, clientId, status) {
  const rpcGenerator = require("discordrpcgenerator");
  const { type, name, details, largeText, image } = status;
  const LINK = "https://twitch.tv/twitch";

  rpcGenerator.getRpcImage(clientId, image)
    .then(imageData => {
      client.user.setPresence(
        new rpcGenerator.Rpc()
          .setName(name)
          .setUrl(LINK)
          .setType(type)
          .setApplicationId(clientId)
          .setAssetsLargeImage(imageData.id)
          .setDetails(largeText)
          .toDiscord()
      );
    })
    .catch(console.error);
} 