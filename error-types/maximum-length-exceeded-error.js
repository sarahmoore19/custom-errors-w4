const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength = null, ...args) {
    super(...args);
    this.name = "MaximumLengthExceededError";

    if (!excessLength) this.message = "Maximum length exceeded"
    else this.message = `Maximum length exceeded by ${excessLength}`

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
