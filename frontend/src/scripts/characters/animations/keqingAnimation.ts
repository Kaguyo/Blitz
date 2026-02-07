import { Player } from "../../players/player";

export class KeqingAnimation {
    setAnimation(arg0: number) {
        throw new Error("Method not implemented.");
    }
    constructor(){

    }
    // private fields region
    private readonly animationMap : Record<number, Function> = {};
    private animationNumber: number = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash, 6: ultimate
    // public methods region
    getFrame(player: Player): HTMLImageElement {
        let frame = new Image();
        frame = this.animationMap[this.animationNumber].call(
            player.activeCharacter.animationSet, player
            
        );
        
        

        return frame;
    }

    // public fields region
    ultimateAnimation = {};
}