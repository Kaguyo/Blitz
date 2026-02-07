const healthBar1: HTMLElement = document.getElementById('healthBar1')!;
const healthBar2: HTMLElement = document.getElementById('healthBar2')!;
const healthBar3: HTMLElement = document.getElementById('healthBar3')!;
const healthBarBackground: HTMLElement = document.getElementById('healthBarBackground')!;
const healthBloodBar1: HTMLElement = document.getElementById('healthBloodBar')!;

export class LifeBarManager {
    static setHealthBar (percentage: string) : void {
        healthBar1!.style.width = percentage;
        healthBar2!.style.width = percentage;
        healthBar3!.style.width = percentage;
        
        LifeBarManager.setHealthBarColor(
            healthBar1, healthBar2,
            healthBar3, healthBloodBar1,
            healthBarBackground
        );
    }

    static setHealthBarColor(hBar1: HTMLElement, hBar2: HTMLElement, hBar3: HTMLElement, hBloodBar1: HTMLElement, hBarBackground: HTMLElement): void {
        if (parseInt(hBar1.style.width.split('%')[0]) >= 60) {
            hBar1.style.backgroundColor = "rgb(0, 255, 200)";
            hBar2.style.backgroundColor = "rgb(150, 255, 230)";
            hBar3.style.backgroundColor = "rgb(3, 145, 114)";
            hBarBackground.style.backgroundColor = "rgb(41, 68, 63)";

        } else if (parseInt(hBar1.style.width.split('%')[0]) > 20) {
            hBar1.style.backgroundColor = "rgba(227, 229, 134, 1)";
            hBar2.style.backgroundColor = "rgba(255, 251, 190, 1)";
            hBar3.style.backgroundColor = "rgba(133, 132, 53, 1)";
            hBarBackground.style.backgroundColor = "rgb(46, 45, 41)";
        } else {
            hBar1.style.backgroundColor = "rgb(206, 0, 0)";
            hBar2.style.backgroundColor = "rgb(255, 186, 186)";
            hBar3.style.backgroundColor = "rgb(146, 0, 0)";
            hBarBackground.style.backgroundColor = "rgba(31, 6, 6, 1)";
        }

        hBloodBar1.style.width = hBar1.style.width;
    }
}
