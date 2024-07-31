class CharacterCountException extends Error {
    constructor(message) {
        super(message);
        this.name = "CharacterCountException";
    }
}