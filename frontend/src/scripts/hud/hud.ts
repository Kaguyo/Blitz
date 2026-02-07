import { CharacterCard } from "./characterCard.js";
import { CharacterIcons } from "./characterIcon.js";
import { CharacterLevel } from "./characterLevel.js";
import { LifeBarManager } from "./lifeBarManager.js";
import { SpBarManager } from "./spBarManager.js";
import { Player } from "../players/player.js";

export class Hud {
    static generateHud(ctx: CanvasRenderingContext2D, player: Player): void {
        SpBarManager.trackEnergyBar(player.activeCharacter);
        CharacterCard.drawCard(ctx, 0, 0);

        CharacterIcons.drawCharacterIconBackground(ctx, 0, 0);
        CharacterIcons.generateCharacterIcon(ctx, 0, 0);
        
        CharacterLevel.drawLevel(ctx, 0, 0, player.getCharacterLevel());
    }
}