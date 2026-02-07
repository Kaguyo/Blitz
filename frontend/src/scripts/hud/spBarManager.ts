import { Character } from "../characters/character.js"

const energyBar1: HTMLElement = document.getElementById('energyBar1')!;
const energyBar2: HTMLElement = document.getElementById('energyBar2')!;
// const energyBarBackground: HTMLElement = document.getElementById('energyBarBackground')!;

export class SpBarManager {

    static setEnergyBar(percentage: string): void {
        energyBar1.style.width = percentage;
        energyBar2.style.width = percentage;
    }

    static trackEnergyBar(character: Character): void {
        let percentage: string = ((character.attribute.energy / character.attribute.energyMax) * 100) + "%";
        SpBarManager.setEnergyBar(percentage);
    }
}