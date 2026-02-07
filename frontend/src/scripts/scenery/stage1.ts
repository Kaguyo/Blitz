import { Player } from "../players/player.js";
import { GameProperties } from "../options/gameProperties.js";
import { SCENERY_BASE } from "../../config/paths.js";

// Stage1 Images Stage 1
const stageImage1: HTMLImageElement = new Image();
stageImage1.src = SCENERY_BASE + "11lay2.png";
const stageImage2: HTMLImageElement = new Image();
stageImage2.src = SCENERY_BASE + "22lay2.png";
const stageImage3: HTMLImageElement = new Image();
stageImage3.src = SCENERY_BASE + "33lay2.png";
const stageImage4: HTMLImageElement = new Image();
stageImage4.src = SCENERY_BASE + "44lay2.png";

// Stage1 Images Stage 1 Reversed Horizontally
const stageImage5: HTMLImageElement = new Image();
stageImage5.src = SCENERY_BASE + "11layReversed2.png";
const stageImage6: HTMLImageElement = new Image();
stageImage6.src = SCENERY_BASE + "22layReversed2.png";
const stageImage7: HTMLImageElement = new Image();
stageImage7.src = SCENERY_BASE + "33layReversed2.png";
const stageImage8: HTMLImageElement= new Image();
stageImage8.src = SCENERY_BASE + "44layReversed2.png";

export class Stage1 {
    // public fields region
    id : number;
    x : number;
    width : number;
    speedModifier : number;
    image : HTMLImageElement;
    reversed : boolean;
    
    // static public fields region
    static Stage1InstancesArray : Stage1[] = [];


    constructor(image : HTMLImageElement, speedModifier : number, reversed : boolean, x : number) {
        this.id = Stage1.Stage1InstancesArray.length + 1;
        this.x = x;
        this.width = 1920;
        this.speedModifier = speedModifier;
        this.image = image;
        this.reversed = reversed;

        Stage1.Stage1InstancesArray.push(this);
    }

    // private methods region
    #draw(ctxStages: CanvasRenderingContext2D) {
        ctxStages!.drawImage(this.image, this.x, 0);
    }

    #update(player : Player) {
        if (this.x < -1920){
            let difference = this.x + 1920;
            this.x = 1920 + difference;
        }
        
        Stage1.Stage1InstancesArray.forEach((instancedObject) => {
            if (player.extendMap > 0 && GameProperties.allowExtendMapRight){
                instancedObject.x -= (player.extendMap * instancedObject.speedModifier);
            }
        });
        
        player.extendMap = 0;
    }

    // public methods region
    static generateStage1(player : Player, ctxStages : CanvasRenderingContext2D){ 
        Stage1.Stage1InstancesArray.forEach((instancedObject) => {
            instancedObject.#update(player);
            instancedObject.#draw(ctxStages);
        });
    }
}
// instances pushed in static array from constructor
const stage1ImageObject1 = new Stage1(stageImage1, 0.2, false, 0);
const stage1ImageObject1Reversed = new Stage1(stageImage5, 0.2, true, 1920);

const stage1ImageObject2 = new Stage1(stageImage2, 0.4, false, 0);
const stage1ImageObject2Reversed = new Stage1(stageImage6, 0.4, true, 1920);

const stage1ImageObject3 = new Stage1(stageImage3, 0.6, false, 0);
const stage1ImageObject3Reversed = new Stage1(stageImage7, 0.6, true, 1920);

const stage1ImageObject4 = new Stage1(stageImage4, 0.8, false, 0);
const stage1ImageObject4Reversed = new Stage1(stageImage8, 0.8, true, 1920);