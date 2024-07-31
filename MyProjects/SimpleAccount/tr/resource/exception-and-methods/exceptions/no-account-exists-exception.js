class NoAccountExistsException extends Error {
    constructor(message) {
      super(message);
      this.name = "NoAccountExistsException";
    }
  }