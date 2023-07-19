import { world } from "@minecraft/server";
import { Command, CommandRegistration, Validation } from "../../../@modules";
import { HomeDB } from "./sethome";

const registration: CommandRegistration = new CommandRegistration()
  .setName("listhome")
  .setDescription("Get all home")
  .setInputs({ 0: ["string"] })
  .setUsage(["<homeName>"])
  .setExample(["home myHome"]);

Command.BuildCommand(registration, (interaction) => {
  const { sender, inputs } = interaction;
  const homeName = inputs.getInput(0) as any;

  if (Validation.isUndefined(homeName))
    return sender.sendMessage("§cHome name cannot be empty");

  const findHome = HomeDB.find((home) => home.creator === sender.name);
  return sender.sendMessage(
    `§b---- Home List ----\n\n${
      findHome.length === 0
        ? "§f# §7You don't have any home"
        : findHome
            .sort()
            .map(
              (home: { name: string; dimension: string }) =>
                `§f# §7${home.name} - ${home.dimension}`
            )
    }`
  );
});
