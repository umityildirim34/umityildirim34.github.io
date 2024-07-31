class NegativeValueException extends Error {
    constructor(message) {
      super(message);
      this.name = "NegativeValueException";
    }
  }