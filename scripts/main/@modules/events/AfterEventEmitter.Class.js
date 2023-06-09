class AfterEventEmitterClass {
  /**
   * Event emitter class
   */
  constructor() {
    /**@private */
    this.listeners = {};
  }

  /**
   * @typedef {"blockBreak" | "blockExplode" | "blockPlace" | 
   * "buttonPush" | "chat" | "dataDrivenEntity" | "effectAdd" | 
   * "entityDie" | "entityHealthChanged" | "entityHitBlock" | 
   * "entityHitEntity" | "entityHurt" | "entityRemoved" | 
   * "entitySpawn" | "explosion" | "itemCompleteUse" | 
   * "itemDefinition" | "itemReleaseUse" | "itemStartUse" | 
   * "itemStartUseOn" | "itemStopUse" | "itemStopUseOn" | 
   * "itemUse" | "itemUseOn" | "leverAction" | "messageReceive" | 
   * "pistonActivate" | "playerJoin" | "playerLeave" | "playerSpawn" | 
   * "pressurePlatePop" | "pressurePlatePush" | "projectileHit" | 
   * "targetBlockHit" | "tripWireTrip" | "weatherChange" | 
   * "worldInitialize"} AfterEventType
   */

  /**
   * Add listener
   * @param {String} eventName
   * @param {Function} callback
   * @param {Boolean} once
   * @private
   */
  _addListener(eventName, callback, once = false) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push({ callback, once });
  }

  /**
   * On called events
   * @param {AfterEventType} eventName
   * @param {Function} callback
   */
  on(eventName, callback) {
    this._addListener(eventName, callback);
  }

  /**
   * Once called events
   * @param {AfterEventType} eventName
   * @param {Function} callback
   */
  once(eventName, callback) {
    this._addListener(eventName, callback, true);
  }

  /**
   * Event emitter
   * @param {String} eventName
   * @param  {...args} args
   */
  emit(eventName, ...args) {
    const eventListeners = this.listeners[eventName];
    if (eventListeners) {
      eventListeners.forEach((listener, index) => {
        listener.callback(...args);

        if (listener.once) {
          eventListeners.splice(index, 1);
        }
      });
    }
  }
}

const AfterEvents = new AfterEventEmitterClass();
export { AfterEvents };
