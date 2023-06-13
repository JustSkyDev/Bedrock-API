import { world, Player } from "@minecraft/server";
import { EntityClass } from "./Entity.Class.js";
import { ErrorClass } from "../message/Error.Class.js";
import * as World from "../world/World.Function.js";

class PlayerClass extends EntityClass {
  /**
   * Player class
   * @param {Player} playerObject - Player object
   */
  constructor(playerObject) {
    super(playerObject);
    /**@private */
    this.playerObject = playerObject;
    /**@private */
    this.error = new ErrorClass();

    if (!playerObject)
      this.error.CustomError(
        "PlayerClass",
        "constructor",
        "PlayerObject cannot be empty"
      );
  }

  /**
   * Get player scoreboard score
   * @param {String} objective - Scoreboard objective name
   * @returns {Number}
   * @example
   * getScore("money");
   */
  getScore(objective) {
    return (
      world.scoreboard.getObjective(objective) ??
      world.scoreboard.addObjective(objective, objective)
    ).getScore(this.playerObject.scoreboardIdentity);
  }

  /**
   * Get player xp level
   * @returns {Number}
   * @example getXpLevel();
   */
  getXpLevel() {
    return this.playerObject.level;
  }

  /**
   * Check player if online
   * @param {Player.nameTag} target - Player nametag
   * @returns {Boolean}
   * @example isOnline("JustSky001");
   */
  isOnline(target) {
    return (
      World.getOnlinePlayers().find((player) => player.nameTag === target) !==
      undefined
    );
  }
}

export { PlayerClass };
