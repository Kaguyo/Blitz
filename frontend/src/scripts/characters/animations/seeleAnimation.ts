import { GameProperties } from "../../options/gameProperties.js";
import { Player } from "../../players/player.js";
import { ASSETS_BASE, SEELE_BASE } from "../../../config/paths.js";
// Seele Images
const seeleIdleImg1: HTMLImageElement = new Image();
seeleIdleImg1.src = SEELE_BASE + "SeeleIdle1.png";
const seeleIdleImg2: HTMLImageElement = new Image();
seeleIdleImg2.src = SEELE_BASE + "SeeleIdle2.png";
const seeleIdleImg3: HTMLImageElement = new Image();
seeleIdleImg3.src = SEELE_BASE + "SeeleIdle3.png";
const seeleIdleImg4: HTMLImageElement = new Image();
seeleIdleImg4.src = SEELE_BASE + "SeeleIdle4.png";

const seeleIdleImg1Reversed: HTMLImageElement = new Image();
seeleIdleImg1Reversed.src = SEELE_BASE + "SeeleIdle1Reversed.png";
const seeleIdleImg2Reversed: HTMLImageElement = new Image();
seeleIdleImg2Reversed.src = SEELE_BASE + "SeeleIdle2Reversed.png";
const seeleIdleImg3Reversed: HTMLImageElement = new Image();
seeleIdleImg3Reversed.src = SEELE_BASE + "SeeleIdle3Reversed.png";
const seeleIdleImg4Reversed: HTMLImageElement = new Image();
seeleIdleImg4Reversed.src = SEELE_BASE + "SeeleIdle4Reversed.png";

const seeleRunImg1: HTMLImageElement = new Image();
seeleRunImg1.src = SEELE_BASE + "SeeleRun1.png";
const seeleRunImg2: HTMLImageElement = new Image();
seeleRunImg2.src = SEELE_BASE + "SeeleRun2.png";
const seeleRunImg3: HTMLImageElement = new Image();
seeleRunImg3.src = SEELE_BASE + "SeeleRun3.png";
const seeleRunImg4: HTMLImageElement = new Image();
seeleRunImg4.src = SEELE_BASE + "SeeleRun4.png";

const seeleRunImg1Reversed: HTMLImageElement = new Image();
seeleRunImg1Reversed.src = SEELE_BASE + "SeeleRun1Reversed.png";
const seeleRunImg2Reversed: HTMLImageElement = new Image();
seeleRunImg2Reversed.src = SEELE_BASE + "SeeleRun2Reversed.png";
const seeleRunImg3Reversed: HTMLImageElement = new Image();
seeleRunImg3Reversed.src = SEELE_BASE + "SeeleRun3Reversed.png";
const seeleRunImg4Reversed: HTMLImageElement = new Image();
seeleRunImg4Reversed.src = SEELE_BASE + "SeeleRun4Reversed.png";

const seeleIdleArmedImg1: HTMLImageElement = new Image();
seeleIdleArmedImg1.src = SEELE_BASE + "SeeleIdleArmed1.png";
const seeleIdleArmedImg1Reversed: HTMLImageElement = new Image();
seeleIdleArmedImg1Reversed.src = SEELE_BASE + "SeeleIdleArmed1Reversed.png";

const seeleActivatingUltDash1: HTMLImageElement = new Image();
seeleActivatingUltDash1.src = SEELE_BASE + "ActivatingUltDash1.png";
const seeleActivatingUltDash2: HTMLImageElement = new Image();
seeleActivatingUltDash2.src = SEELE_BASE + "ActivatingUltDash2.png";

const seeleActivatingUltDash1Reversed: HTMLImageElement = new Image();
seeleActivatingUltDash1Reversed.src = SEELE_BASE + "ActivatingUltDash1Reversed.png";
const seeleActivatingUltDash2Reversed: HTMLImageElement = new Image();
seeleActivatingUltDash2Reversed.src = SEELE_BASE + "ActivatingUltDash2Reversed.png";

const seeleUltEffect1: HTMLImageElement = new Image();
seeleUltEffect1.src = SEELE_BASE + "UltEffect1.png";
const seeleUltEffect2: HTMLImageElement = new Image();
seeleUltEffect2.src = SEELE_BASE + "UltEffect2.png";

const seeleUltEffect1Reversed: HTMLImageElement = new Image();
seeleUltEffect1Reversed.src = SEELE_BASE + "UltEffect1Reversed.png";
const seeleUltEffect2Reversed: HTMLImageElement = new Image();
seeleUltEffect2Reversed.src = SEELE_BASE + "UltEffect2Reversed.png";

const seeleUltWing1: HTMLImageElement = new Image();
seeleUltWing1.src = SEELE_BASE + "UltWing1.png";
const seeleUltWing2: HTMLImageElement = new Image();
seeleUltWing2.src = SEELE_BASE + "UltWing2.png";
const seeleUltWing3: HTMLImageElement = new Image();
seeleUltWing3.src = SEELE_BASE + "UltWing3.png";
const seeleUltWing4: HTMLImageElement = new Image();
seeleUltWing4.src = SEELE_BASE + "UltWing4.png";
const seeleUltWing5: HTMLImageElement = new Image();
seeleUltWing5.src = SEELE_BASE + "UltWing5.png";
const seeleUltWing6: HTMLImageElement = new Image();
seeleUltWing6.src = SEELE_BASE + "UltWing6.png";
const seeleUltWing7: HTMLImageElement = new Image();
seeleUltWing7.src = SEELE_BASE + "UltWing7.png";
const seeleUltWing8: HTMLImageElement = new Image();
seeleUltWing8.src = SEELE_BASE + "UltWing8.png";
const seeleUltWing9: HTMLImageElement = new Image();
seeleUltWing9.src = SEELE_BASE + "UltWing9.png";
const seeleUltWing10: HTMLImageElement = new Image();
seeleUltWing10.src = SEELE_BASE + "UltWing10.png";
const seeleUltWing11: HTMLImageElement = new Image();
seeleUltWing11.src = SEELE_BASE + "UltWing11.png";
const seeleUltWing12: HTMLImageElement = new Image();
seeleUltWing12.src = SEELE_BASE + "UltWing12.png";

const seeleUltWing1Reversed: HTMLImageElement = new Image();
seeleUltWing1Reversed.src = SEELE_BASE + "UltWing1Reversed.png";
const seeleUltWing2Reversed: HTMLImageElement = new Image();
seeleUltWing2Reversed.src = SEELE_BASE + "UltWing2Reversed.png";
const seeleUltWing3Reversed: HTMLImageElement = new Image();
seeleUltWing3Reversed.src = SEELE_BASE + "UltWing3Reversed.png";
const seeleUltWing4Reversed: HTMLImageElement = new Image();
seeleUltWing4Reversed.src = SEELE_BASE + "UltWing4Reversed.png";
const seeleUltWing5Reversed: HTMLImageElement = new Image();
seeleUltWing5Reversed.src = SEELE_BASE + "UltWing5Reversed.png";
const seeleUltWing6Reversed: HTMLImageElement = new Image();
seeleUltWing6Reversed.src = SEELE_BASE + "UltWing6Reversed.png";
const seeleUltWing7Reversed: HTMLImageElement = new Image();
seeleUltWing7Reversed.src = SEELE_BASE + "UltWing7Reversed.png";
const seeleUltWing8Reversed: HTMLImageElement = new Image();
seeleUltWing8Reversed.src = SEELE_BASE + "UltWing8Reversed.png";
const seeleUltWing9Reversed: HTMLImageElement = new Image();
seeleUltWing9Reversed.src = SEELE_BASE + "UltWing9Reversed.png";
const seeleUltWing10Reversed: HTMLImageElement = new Image();
seeleUltWing10Reversed.src = SEELE_BASE + "UltWing10Reversed.png";
const seeleUltWing11Reversed: HTMLImageElement = new Image();
seeleUltWing11Reversed.src = SEELE_BASE + "UltWing11Reversed.png";
const seeleUltWing12Reversed: HTMLImageElement = new Image();
seeleUltWing12Reversed.src = SEELE_BASE + "UltWing12Reversed.png";

export class SeeleAnimation {

    constructor(){

    }
    
    // private fields region
    private frame: HTMLImageElement = new Image();

    private animationNumber: number = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash, 6: ultimate

    private readonly animationMap : Record<string, Function> = {
        1 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // idle

            if (player.activeCharacter.attribute.equipedWeapon){ // armed
                if (animationSet.idleArmedAnimation.index == 1) {
                    animationSet.frame = player.directionRight ? seeleIdleArmedImg1 : seeleIdleArmedImg1Reversed;
                }
            } else if (!player.activeCharacter.attribute.equipedWeapon) { // unarmed
                if (animationSet.idleAnimation.index == 1) {
                    animationSet.idleAnimation.countIndexRepeated += 0.6 * GameProperties.gameSpeed;
                    if (animationSet.idleAnimation.countIndexRepeated >= 10){
                        if (animationSet.idleAnimation.breatheIn == true)
                            animationSet.idleAnimation.reverseIndex = 0;
                        animationSet.idleAnimation.countIndexRepeated = 0;
                        animationSet.idleAnimation.index = 2 + animationSet.idleAnimation.reverseIndex;
                        animationSet.idleAnimation.breatheIn = true;
                        animationSet.idleAnimation.breatheOut = false;
                    }
                    animationSet.frame = player.directionRight ? seeleIdleImg1 : seeleIdleImg1Reversed;
                } else if (animationSet.idleAnimation.index == 2) {
                    animationSet.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                    animationSet.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                    if (animationSet.idleAnimation.countIndexRepeated >= 10){
                        animationSet.idleAnimation.countIndexRepeated = 0;
                        animationSet.idleAnimation.index = 3 + animationSet.idleAnimation.reverseIndex; 
                        if (animationSet.idleAnimation.breatheIn == false)
                            animationSet.idleAnimation.reverseIndex = -1;
                    }
                    animationSet.frame = player.directionRight ? seeleIdleImg2 : seeleIdleImg2Reversed;

                } else if (animationSet.idleAnimation.index == 3) {
                    animationSet.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                        animationSet.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                        if (animationSet.idleAnimation.countIndexRepeated >= 10){
                            if (animationSet.idleAnimation.breatheIn == false)
                                animationSet.idleAnimation.reverseIndex = -2;
                            animationSet.idleAnimation.countIndexRepeated = 0;
                            animationSet.idleAnimation.index = 4 + animationSet.idleAnimation.reverseIndex; 
                        }
                        animationSet.frame = player.directionRight ? seeleIdleImg3 : seeleIdleImg3Reversed;

                } else if (animationSet.idleAnimation.index == 4) {
                    animationSet.idleAnimation.countIndexRepeated += 0.6 * GameProperties.gameSpeed;
                        animationSet.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                        if (animationSet.idleAnimation.countIndexRepeated >= 12) {
                            animationSet.idleAnimation.countIndexRepeated = 0;
                            animationSet.idleAnimation.index = 4 + animationSet.idleAnimation.reverseIndex; 
                            if (animationSet.idleAnimation.breatheIn == false)
                                animationSet.idleAnimation.reverseIndex = -1;
                            animationSet.idleAnimation.breatheIn = false;
                            animationSet.idleAnimation.breatheOut = true;
                            
                        }
                        animationSet.frame = player.directionRight ? seeleIdleImg4 : seeleIdleImg4Reversed;
                    }       
                }

                return animationSet.frame;
        },
        2 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // running
            
            animationSet.runningAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;

            if (animationSet.runningAnimation.index == 1) {
                if (animationSet.runningAnimation.countIndexRepeated >= 10){
                    animationSet.runningAnimation.countIndexRepeated = 0;
                    animationSet.runningAnimation.index = 2;
                }
                animationSet.frame = player.directionRight ? seeleRunImg2 : seeleRunImg2Reversed;

            } else if (animationSet.runningAnimation.index == 2) {
                if (animationSet.runningAnimation.countIndexRepeated >= 10){
                    animationSet.runningAnimation.countIndexRepeated = 0;
                    animationSet.runningAnimation.index = 3;
                }
                animationSet.frame = player.directionRight ? seeleRunImg3 : seeleRunImg3Reversed;

            } else if (animationSet.runningAnimation.index == 3) {
                if (animationSet.runningAnimation.countIndexRepeated >= 10){
                    animationSet.runningAnimation.countIndexRepeated = 0;
                    animationSet.runningAnimation.index = 4;
                }
                animationSet.frame = player.directionRight ? seeleRunImg4 : seeleRunImg4Reversed;

            } else if (animationSet.runningAnimation.index == 4) {
                if (animationSet.runningAnimation.countIndexRepeated >= 10){
                    animationSet.runningAnimation.countIndexRepeated = 0;
                    animationSet.runningAnimation.index = 1;
                }
                animationSet.frame = player.directionRight ? seeleRunImg1 : seeleRunImg1Reversed;

            }
            
            return animationSet.frame;
        },
        3 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // jumping
            
            return animationSet.frame;
        },
        4 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // crouch

            return animationSet.frame;
        },
        5 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // dash
            
            return animationSet.frame;
        },
        6 : function(animationSet: SeeleAnimation, player: Player): HTMLImageElement { // ultimate
            if (!player.activeCharacter.animationSet.ultimateAnimation.vfxSparkle.stop)
                animationSet.renderVFXSparkles(player);
            animationSet.renderVFXWing(player);
            
            if (animationSet.ultimateAnimation.index == 1) {
                animationSet.ultimateAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (animationSet.ultimateAnimation.countIndexRepeated >= 25){
                    animationSet.ultimateAnimation.countIndexRepeated = 0;
                    animationSet.ultimateAnimation.index = 2;
                }
                animationSet.frame = player.directionRight ? seeleActivatingUltDash1 : seeleActivatingUltDash1Reversed;

            } else if (animationSet.ultimateAnimation.index == 2) {
                animationSet.ultimateAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                animationSet.frame = player.directionRight ? seeleActivatingUltDash2 : seeleActivatingUltDash2Reversed;
            }

            return animationSet.frame;
        }
    };

    // public fields region    
    idleAnimation = {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    };

    idleArmedAnimation = {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    }

    runningAnimation = {
        index : 1,
        countIndexRepeated : 0
    };
    
    runningArmedAnimation = {
        index : 1,
        countIndexRepeated : 0
    };

    ultimateAnimation = {
        index : 1,
        countIndexRepeated : 0,
        vfxSparkle : {
            stop : false,
            image : new Image(),
            index : 1,
            countIndexRepeated : 0
        },
        vfxWing : {
            image : new Image(),
            index : 1,
            countIndexRepeated : 0
        }, 
        updateVFXSparkles : function(player: Player): HTMLImageElement {
            if (this.vfxSparkle.index == 1) {
                this.vfxSparkle.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxSparkle.countIndexRepeated >= 5){
                    this.vfxSparkle.countIndexRepeated = 0;
                    this.vfxSparkle.index = 2;
                }
                this.vfxSparkle.image = player.directionRight ? seeleUltEffect1 : seeleUltEffect1Reversed;
            } else if (this.vfxSparkle.index == 2) {
                this.vfxSparkle.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxSparkle.countIndexRepeated >= 5){
                    this.vfxSparkle.countIndexRepeated = 0;
                    this.vfxSparkle.index = 1;
                }
                this.vfxSparkle.image = player.directionRight ? seeleUltEffect2 : seeleUltEffect2Reversed;
            }

            return this.vfxSparkle.image;
        },
        updateVFXWing : function(player: Player): HTMLImageElement {
            if (this.vfxWing.index == 1) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 2;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing1 : seeleUltWing1Reversed;
            } else if (this.vfxWing.index == 2) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;    
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 3;
                    player.activeCharacter.animationSet.ultimateAnimation.vfxSparkle.stop = true;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing2 : seeleUltWing2Reversed;
            } else if (this.vfxWing.index == 3) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 4;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing3 : seeleUltWing3Reversed;
            } else if (this.vfxWing.index == 4) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 5;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing4 : seeleUltWing4Reversed;
            } else if (this.vfxWing.index == 5) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 6;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing5 : seeleUltWing5Reversed;
            } else if (this.vfxWing.index == 6) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 7;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing6 : seeleUltWing6Reversed;
            } else if (this.vfxWing.index == 7) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;        
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 8;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing7 : seeleUltWing7Reversed;
            } else if (this.vfxWing.index == 8) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 9;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing8 : seeleUltWing8Reversed;
            } else if (this.vfxWing.index == 9) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 10;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing9 : seeleUltWing9Reversed;
            } else if (this.vfxWing.index == 10) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;    
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 11;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing10 : seeleUltWing10Reversed;
            } else if (this.vfxWing.index == 11) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 12;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing11 : seeleUltWing11Reversed;
            } else if (this.vfxWing.index == 12) {
                this.vfxWing.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxWing.countIndexRepeated >= 5){
                    this.vfxWing.countIndexRepeated = 0;
                    this.vfxWing.index = 1;
                    player.activeCharacter.moveset.reset(player);
                    player.activeCharacter.animationSet.ultimateAnimation.vfxSparkle.stop = false;
                }
                this.vfxWing.image = player.directionRight ? seeleUltWing12 : seeleUltWing12Reversed;
           
            }

            return this.vfxWing.image;
        }
    }

    // public methods region
    getFrame(player: Player): HTMLImageElement {
        let frame = new Image();

        frame = this.animationMap[this.animationNumber].call(
            // this utilizado dentro do metodo chamado:
            player.activeCharacter.animationSet,
            // parametros passados para o metodo chamado:
            player.activeCharacter.animationSet, player 
        );
        
        return frame;
    }

    setAnimation(number: number): void {
        this.animationNumber = number;
    }

    // private methods region
    private renderVFXSparkles(player: Player): void {
        // da pra desenvolver a soluçao aqui com ifs e capturadores de ultimo frame e modificação de resetter
        GameProperties.ctx1.drawImage(
            player.activeCharacter.animationSet.ultimateAnimation.updateVFXSparkles(player), player.dx, player.dy
        );
    }

    private renderVFXWing(player: Player): void {
        GameProperties.ctx1.drawImage(
            player.activeCharacter.animationSet.ultimateAnimation.updateVFXWing(player), player.dx, player.dy
        );
    }
}