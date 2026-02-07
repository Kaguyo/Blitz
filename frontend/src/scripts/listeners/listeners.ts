import { GameProperties } from "../options/gameProperties.js";
import { Player } from "../players/player.js";

export class Listeners {
    static keydownHandler = (event : KeyboardEvent) => {
        const key : string = event.key.toLowerCase();
        if (key in GameProperties.inputKeys && key != 'e') {
            GameProperties.inputKeys[key] = true;

            if (key == 'a') {
                GameProperties.inputKeys.d = false;
            } else if (key == 'd') {
                GameProperties.inputKeys.a = false;
            }
        }

        if (key == 'e' && GameProperties.allowE) {
            GameProperties.inputKeys[key] = true;
            GameProperties.allowE = false;
            // Player.switchingWeapon = true;
        }
        
    };

    static keyupHandler = (event : KeyboardEvent) => {
        const key = event.key.toLowerCase();
        if (key === 'e')
            GameProperties.allowE = true;

        if (key in GameProperties.inputKeys) {
            GameProperties.inputKeys[key] = false;
        }
    };

    static LoadDefaultScenery() {
        document.addEventListener('keydown', Listeners.keydownHandler);
        document.addEventListener('keyup', Listeners.keyupHandler);
    }

    static DispatchDefaultScenery() {
        document.removeEventListener('keydown', Listeners.keydownHandler);
        document.removeEventListener('keyup', Listeners.keyupHandler);
    }
}