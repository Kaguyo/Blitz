import { ASSETS_BASE } from "../../../config/paths";

const standardLevel0: HTMLImageElement = new Image();
standardLevel0.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_0.png";
const standardLevel1: HTMLImageElement = new Image();
standardLevel1.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_1.png";
const standardLevel2: HTMLImageElement = new Image();
standardLevel2.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_2.png";
const standardLevel3: HTMLImageElement = new Image();
standardLevel3.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_3.png";
const standardLevel4: HTMLImageElement = new Image();
standardLevel4.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_4.png";
const standardLevel5: HTMLImageElement = new Image();
standardLevel5.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_5.png";
const standardLevel6: HTMLImageElement = new Image();
standardLevel6.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_6.png";
const standardLevel7: HTMLImageElement = new Image();
standardLevel7.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_7.png";
const standardLevel8: HTMLImageElement = new Image();
standardLevel8.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_8.png";
const standardLevel9: HTMLImageElement = new Image();
standardLevel9.src = ASSETS_BASE + "hud/characterContainer/customText/characterLevels/standard_lvl_9.png";

const standardLevelSymbols: HTMLImageElement[] = [
    standardLevel0, standardLevel1, standardLevel2,
    standardLevel3, standardLevel4, standardLevel5,
    standardLevel6, standardLevel7, standardLevel8,
    standardLevel9
];

export class CharacterLevel {
    static drawLevel(ctx: CanvasRenderingContext2D, dx: number, dy: number, characterLevel: number): void {
        if (characterLevel < 10)
            ctx.drawImage(standardLevelSymbols[characterLevel], dx, dy);
        else if (characterLevel < 100) {
            let strLevel = characterLevel.toString();
            ctx.drawImage(standardLevelSymbols[parseInt(strLevel[0])], dx, dy);
            ctx.drawImage(standardLevelSymbols[parseInt(strLevel[1])], dx+25, dy);
        }
        else if (characterLevel < 1000) {
            let strLevel = characterLevel.toString();
            ctx.drawImage(standardLevelSymbols[parseInt(strLevel[0])], dx, dy);
            ctx.drawImage(standardLevelSymbols[parseInt(strLevel[1])], dx+25, dy);
            ctx.drawImage(standardLevelSymbols[parseInt(strLevel[2])], dx+50, dy);
        }

    }
}