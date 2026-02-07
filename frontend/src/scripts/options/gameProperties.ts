import { SpBarManager } from "../hud/spBarManager.js"
import { Hud } from "../hud/hud.js"

export class GameProperties {

    static ctx1 : CanvasRenderingContext2D;
    static ctx2 : CanvasRenderingContext2D;

    // public fields region
    static gameSpeed = 1;

    static inputKeys : Record<string, boolean> = {
        '1': false,
        '2': false,
        '3': false,
        'w' : false,
        'a' : false,
        's' : false,
        'd' : false,
        'q' : false,
        'e' : false,
        'l' : false,
    }

    // private fields region
    private static _usingMovement: boolean;
    private static _usingUltimate: boolean;

    private static _allowIdle: boolean;
    private static _allowUltimate: boolean;
    

    // public fields region
    static get allowIdle(): boolean {
        GameProperties._allowIdle = true;

        if (GameProperties.usingIActionArray.includes(true)) {
            GameProperties._allowIdle = false;
        }

        return GameProperties._allowIdle;
    }

    static get allowUltimate(): boolean {        
        GameProperties._allowUltimate = true;

        if (GameProperties.usingUltimate) {
            GameProperties._allowUltimate = false;
        }
        
        return GameProperties._allowUltimate;
    }

    static allowE = true;
    static allowMovement = true;
    static allowExtendMapRight = true;
    static allowExtendMapLeft = false;
    static allowDash = true;
    static allowBasicAttack = true;
    static allowSwitchCharacter = true;

    static get usingUltimate(): boolean {
        return this._usingUltimate;
    }
    static set usingUltimate(value: boolean) {
        this.usingIActionArray[0] = value;
        this._usingUltimate = value;
    };
    
    static get usingMovement(): boolean {
        return this._usingMovement;
    }
    static set usingMovement(value: boolean) {
        this.usingIActionArray[1] = value;
        this._usingMovement = value;
    };

    static usingIActionArray: boolean[] = [GameProperties.usingUltimate, GameProperties.usingMovement];

    static switchingCharacter = false;

    // public methods region
    static ceilToZero(value : number){
        if (value < 0){
            value = 0;
        }

        return value;
    }

    static handleEnergy(characterEnergy: number, characterEnergyModifier: number): number {
        return characterEnergy += characterEnergyModifier;
    }

    static setInitialEnergy(anything: TransferObject): number {
        let percentage: string = ((anything.characterEnergy / anything.characterMaxEnergy) * 100) + "%";
        SpBarManager.setEnergyBar(percentage);
    
        return anything.characterEnergy;
    }
}

export type TransferObject = {
    characterEnergy: number,
    characterMaxEnergy: number,
    energyCost: number
};
