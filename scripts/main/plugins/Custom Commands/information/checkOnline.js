import {
  Command,
  CommandRegistration,
  PlayerClass,
  Validation,
} from "../../class.chain";

const registration = new CommandRegistration()
  .setName("checkonline")
  .setDescription("Get player status, online or offline")
  .setAliases(["con", "checkon"])
  .setCategory("Information")
  .setInputs({ 0: ["playername"] })
  .setUsage(["<playername: Player.name>"])
  .setExample(["con JustSky001"]);

Command.BuildCommand(registration, (interaction) => {
  const { sender, inputs } = interaction;
  const player = new PlayerClass(sender);

  if (Validation.isUndefined(inputs.getInput(0)))
    return sender.sendMessage(
      "§cPlayername should be starts with @, like @PlayerName"
    );

  const checkPlayer = player.isOnline(inputs.getInput(0));
  return sender.sendMessage(
    checkPlayer
      ? `§aPlayer with names §f${inputs.getInput(0)} §ais online`
      : `§cPlayer with names §f${inputs.getInput(0)} §cnot found or offline`
  );
});
