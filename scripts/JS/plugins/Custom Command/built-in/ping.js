import * as API from "../../class.chain.js";

const registration = new API.CommandRegistration()
  .setName("ping")
  .setDescription("Ping command")
  .setCategory("Built-In")
  .setAliases(["p"]);

API.Command.BuildCommand(registration, (interaction) => {
  interaction.sender.sendMessage("Pong!");
});