import { ASSETS_BASE } from "../../../config/paths";

const SeeleIcon1: HTMLImageElement = new Image();
SeeleIcon1.src = ASSETS_BASE + "hud/characterContainer/characterIcons/SeeleIcon1.png";

export class CharacterIcons {
    static generateCharacterIcon(ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
        ctx.drawImage(SeeleIcon1, dx, dy);
    }
    static drawCharacterIconBackground(ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
        ctx.drawImage(backgroundIcon1, dx, dy);
    }   
}

const backgroundIcon1: HTMLImageElement = new Image();
backgroundIcon1.src = ASSETS_BASE + "hud/characterContainer/backgrounds/BackgroundDarkBlue.png";

const backgroundIcons = [
    backgroundIcon1
];