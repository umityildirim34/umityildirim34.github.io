class NoSelectedValueException extends Error {
    constructor(message) {
      super(message);
      this.name = "NoSelectedValueException";
    }
  }