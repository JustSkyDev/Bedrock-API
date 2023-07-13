const BeforeEventType = [
  "chat",
  "dataDrivenEntity",
  "explosion",
  "itemDefinition",
  "itemUse",
  "itemUseOn",
  "pistonActivate",
];

const AfterEventType = [
  "blockBreak",
  "blockExplode",
  "blockPlace",
  "buttonPush",
  "chat",
  "dataDrivenEntity",
  "effectAdd",
  "entityDie",
  "entityHealthChanged",
  "entityHitBlock",
  "entityHitEntity",
  "entityHurt",
  "entityRemoved",
  "entitySpawn",
  "explosion",
  "itemCompleteUse",
  "itemDefinition",
  "itemReleaseUse",
  "itemStartUse",
  "itemStartUseOn",
  "itemStopUse",
  "itemStopUseOn",
  "itemUse",
  "itemUseOn",
  "leverAction",
  "messageReceive",
  "pistonActivate",
  "playerJoin",
  "playerLeave",
  "playerSpawn",
  "pressurePlatePop",
  "pressurePlatePush",
  "projectileHit",
  "targetBlockHit",
  "tripWireTrip",
  "weatherChange",
  "worldInitialize",
];

const SystemEventType = ["watchdogTerminate", "scriptEventReceive"];

export { BeforeEventType, AfterEventType, SystemEventType };
