class Race {
    displayName: String;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    remaining: number;

    constructor (
        displayName: String,
        strength: number,
        dexterity: number,
        constituion: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        remaining: number
    ) {
        this.displayName = displayName;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constituion;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.remaining = remaining;
    }
}
