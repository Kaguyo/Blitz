import { Player } from "./scripts/players/player.js";
import { Character } from "./scripts/characters/character.js";
import { GameProperties } from "./scripts/options/gameProperties.js";
import { Stage1 } from "./scripts/scenery/stage1.js";
import { Listeners } from "./scripts/listeners/listeners.js";
import { Hud } from "./scripts/hud/hud.js";

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
canvas.width = 1920;
canvas.height = 1080;
const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground') as HTMLCanvasElement;
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;
const ctx2 = canvasBackground.getContext('2d');

GameProperties.ctx1 = ctx!;
GameProperties.ctx2 = ctx2!;

const characters : Character[] = [];

characters.push(new Character(1, 33));


const player1 = new Player(1, "Kaguyo", characters);

Listeners.LoadDefaultScenery();

function main(){
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    player1.handleInput();
    
    Stage1.generateStage1(player1, ctx2!);
    
    player1.updateCharacterFrame();
    player1.drawPlayer(ctx!);


    Hud.generateHud(ctx!, player1);
    requestAnimationFrame(main);
}

main();