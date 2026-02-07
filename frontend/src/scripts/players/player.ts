import { Character } from "../characters/character.js";
import { GameProperties } from "../options/gameProperties.js";

export class Player {
    // public fields region
    id : number;
    name : string;

    characters : Character[];
    activeCharacterIndex = 0;
    activeCharacter: Character;

    dx : number;
    dy : number;
    extendMap : number;

    directionLeft = false;
    directionRight = true;

    switchingWeapon = false;
    weaponActive = false;

    constructor(id : number, name : string, characters : Character[]) {
        this.id = id;
        this.name = name;
        this.dx = 300;
        this.dy = 630;
        this.characters = characters;
        this.extendMap = 0;
        this.activeCharacter = this.characters[this.activeCharacterIndex];
    }

    // public methods region
    drawPlayer(ctx : CanvasRenderingContext2D): void {
        ctx.drawImage(this.activeCharacter.frame, this.dx, this.dy);
    }

    updateCharacterFrame(): void {
        this.activeCharacter.frame = this.activeCharacter.updateFrame(this);
    }
        
    getCharacterLevel(): number {
        return this.activeCharacter.attribute.level;
    }
    
    handleInput(): void {
        const switchKeys = ['1', '2', '3'];
        const moveKeys = ["a", "d", "w", "s"];
        const attackKeys = ['j', 'k', 'q', 'i'];

        if (GameProperties.allowIdle && !GameProperties.usingIActionArray.includes(true)) {
            this.activeCharacter.moveset.reset(this);
        }
               

        for (const key of moveKeys) {
            if (GameProperties.inputKeys[key] && GameProperties.allowMovement){
                if (key == 'a') { 
                    this.directionLeft = true;
                    this.directionRight = false;
                    this.dx -= this.activeCharacter.attribute.speed;
                    if (this.dx < 300) {
                        this.extendMap = 300 - this.dx;
                        this.dx = 300;
                    }
                    this.activeCharacter.moveset.Run(this);
                    GameProperties.usingMovement = true;

                } else if (key == 'd') {
                    this.directionLeft = false;
                    this.directionRight = true;
                    this.dx += this.activeCharacter.attribute.speed;
                    if (this.dx > 1920 - 300) {
                        this.extendMap = this.dx - (1920 - 300);
                        this.dx = 1920 - 300;
                    }
                    this.activeCharacter.moveset.Run(this);
                    GameProperties.usingMovement = true;
                }
            } else {
                GameProperties.usingMovement = false;
            }
        }

        for (const key of switchKeys) {
            if (GameProperties.inputKeys[key] && GameProperties.allowSwitchCharacter){
                switch (key) { 
                    case '1':
                        this.#switchCharacter(0);
                        break;
                    case '2':
                        this.#switchCharacter(1);
                        break;
                    case '3':
                        this.#switchCharacter(2);
                        break;
                }
            }
        }
    
        for (const key of attackKeys) {
            if (GameProperties.inputKeys[key]){
                switch (key) { 
                    case 'q':
                        this.activeCharacter.moveset.Ultimate(this);
                        break;
                }
            }
        }
    }

    // private methods region
    #switchCharacter(index : number): void {
        if (this.activeCharacterIndex !== index) {
            this.activeCharacter.moveset.reset();
            this.activeCharacterIndex = index;
            this.activeCharacter = this.characters[this.activeCharacterIndex];
        }
    }
}