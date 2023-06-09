/**
 * Check if string
 * @param {String} string
 * @return {Boolean}
 */
function isString(string) {
  return typeof string === "string";
}

/**
 * Check if number
 * @param {Number} number
 * @returns {Boolean}
 */
function isNumber(number) {
  return typeof number === "number";
}

/**
 * Check if integer
 * @param {BigInteger} integer
 * @returns {Boolean}
 */
function isInteger(integer) {
  return Number.isInteger(integer);
}

/**
 * Check if boolean
 * @param {Boolean} boolean
 * @returns {Boolean}
 */
function isBoolean(boolean) {
  return typeof boolean === "boolean";
}

/**
 * Check if object
 * @param {Object} object
 * @returns {Boolean}
 */
function isObject(object) {
  return (
    typeof object === "object" && !Array.isArray(object) && object !== null
  );
}

/**
 * Check if array
 * @param {Array} array
 * @returns {Boolean}
 */
function isArray(array) {
  return Array.isArray(array);
}

/**
 * Check if null
 * @param {Object} object
 * @returns
 */
function isNull(object) {
  return object === null;
}

/**
 * Check if undefined
 * @param {Object} object
 * @returns
 */
function isUndefined(object) {
  return object === undefined;
}

/**
 * Check if error
 * @param {Error} error
 * @returns
 */
function isError(error) {
  return error instanceof Error && "message" in error;
}

export {
  isString,
  isNumber,
  isInteger,
  isBoolean,
  isObject,
  isArray,
  isNull,
  isUndefined,
  isError,
};
