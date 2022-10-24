class ValidationError extends Error {
  constructor(message, ...args) {
    super(...args);
    this.name = "ValidationError"
    this.message = message || "Invalid input";

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError)
    }
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
