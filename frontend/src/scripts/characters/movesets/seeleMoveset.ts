import { SeeleAnimation } from "../animations/seeleAnimation.js";
import { GameProperties } from "../../options/gameProperties.js";
import { Attributes } from "../properties/attributes.js";
import { Player } from "../../players/player.js";
import { LifeBarManager } from "../../hud/characterHud/lifeBarManager.js";

export class SeeleMoveset {
    constructor(){
        
    }

    // public methods region
    reset(player: Player){
        player.activeCharacter.animationSet.setAnimation(1);
        GameProperties.allowMovement = true;
        GameProperties.allowBasicAttack = true;
        GameProperties.allowDash = true;
        GameProperties.allowE = true;
        GameProperties.usingUltimate = false;
    }
    
    Run(player: Player){
        if (GameProperties.allowMovement){
            player.activeCharacter.animationSet.setAnimation(2);
        }
    }
    
    Ultimate(player: Player){
        if (player.activeCharacter.attribute.energy >= player.activeCharacter.attribute.ultCost && GameProperties.allowUltimate){
            let percentage = Math.max((((player.activeCharacter.attribute.hp / player.activeCharacter.attribute.hpBuild) - 0.6) * 100), 0).toString() + "%";
            LifeBarManager.setHealthBar(percentage);
            player.activeCharacter.attribute.hp -= (player.activeCharacter.attribute.hpBuild / 5) * 3;
            player.activeCharacter.animationSet.setAnimation(6);
            player.activeCharacter.attribute.energy = GameProperties.handleEnergy(
                player.activeCharacter.attribute.energy, -player.activeCharacter.attribute.ultCost
            );
            player.activeCharacter.attribute.energy = GameProperties.ceilToZero(player.activeCharacter.attribute.energy);
            GameProperties.usingUltimate = true;
            GameProperties.allowE = false;
            GameProperties.allowMovement = false;
            
            
            if (player.activeCharacter.attribute.energy <= player.activeCharacter.attribute.energyMax){
                percentage = (100 / (player.activeCharacter.attribute.energyMax / player.activeCharacter.attribute.energy)).toFixed(0).toString() + "%";
            } else {
                percentage = '100%';
            }
        }
    }   

    Dash(){
        if (GameProperties.allowDash){
            
        }
    }

    BasicAttack(){
        if (GameProperties.allowBasicAttack){
            // attack logic
        }
    }

    // private methods region


}