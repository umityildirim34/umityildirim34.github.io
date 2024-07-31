class TableHeadException extends Error {
    constructor(message) {
      super(message);
      this.name = "TableHeadException";
    }
}