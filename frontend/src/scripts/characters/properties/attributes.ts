import { GameProperties } from "../../options/gameProperties.js";
import { TransferObject } from "../../options/gameProperties.js";
type artifactStats = {
    hp?: number, hpPercentage?: number,
    atk? : number, atkPercentage?: number,
    def? : number, defPercentage?: number,
    speed? : number, energyRecharge?: number, 
    critDmg?: number, critRate?: number,
    lightning?: number, lightningPercentage?: number,
    fire?: number, firePercentage?: number,
    darkness?: number, darknessPercentage?: number,
    light?: number, lightPercentage?: number,
    ice?: number, icePercentage?: number,
    water?: number, waterPercentage?: number,
    physical?: number, physicalPercentage?: number,
    earth?: number, earthPercentage?: number,
    wind?: number, windPercentage?: number
};

type artifact = [ 
    attribute1?: artifactStats, attribute2? : artifactStats,
    attribute3? : artifactStats, attribute4? : artifactStats 
];

type artifacts = [
    artifact, artifact?,
    artifact?, artifact?, 
    artifact?, artifact?
];


const justifyStats = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100,
    110, 120, 130, 140, 150,
    160, 170, 180, 190, 200
];

export class Attributes {
    constructor(id : number, level = 1) {
        this.id = id;
        this.level = level;
        this.hpBase = 0;
        this.atkBase = 0;
        this.defBase = 0;
        this.hpBuild = 0;
        this.atkBuild = 0;
        this.defBuild = 0;
        this.hp = this.hpBuild;
        this.atk = this.atkBuild;
        this.def = this.defBuild;
        this.speed = this.speed;
        this.energyMax = this.energyMax;
        this.dto = { 
            characterEnergy: this.energyMax,
            characterMaxEnergy: this.energyMax,
            energyCost: this.ultCost 
        };
        
        this.energy = GameProperties.setInitialEnergy(this.dto);
    }
    
    artifacts : artifacts = [[{hp : 322}, {atkPercentage : 40}], [{hp : 322}], [{hp : 322}, {hp : 322}, {hp : 322}, {hp : 322}]];
    
    // private fields region
    private _hp = 0;
    private _atk = 0;
    private _def = 0;
    private _hpBase = 0;
    private _atkBase = 0;
    private _defBase = 0;
    private _hpBuild = 0;
    private _atkBuild = 0;
    private _defBuild = 0;
    private _expMax = 0;
    private _energyMax = 0;
    private _ultCost = 0;
    private _speed = 0;

    // public fields region
    readonly id : number;
    level : number;
    dto: TransferObject = {
        characterEnergy: 0,
        characterMaxEnergy: 0,
        energyCost: 0
    }
    energy = 0;
    energyRecharge = 0;
    exp = 0;
    hasWeapon = false;
    equipedWeapon = false;
    switchingWeapon = false;
    
    // private setters
    private set speed(value: number) { 
        this._speed = value;
    }

    private set hpBase(value: number) {
        this._hpBase = value;
    }

    private set atkBase(value: number) {
        this._atkBase = value;
    }

    private set defBase(value: number) {
        this._defBase = value;
    }

    private set hpBuild(value: number) {
        this._hpBuild = value;
    }

    private set atkBuild(value: number) {
        this._atkBuild = value;
    }

    private set defBuild(value: number) {
        this._defBuild = value;
    }

    private set expMax(value: number) {
        this._expMax = value;
    }
    
    // public getters
    get speed(){ 
        if (this.id == 1)
            this.speed = 20;
        else if (this.id == 2)
            this.speed = 30;
        else if (this.id == 3)
            this.speed = 20;
        else if (this.id == 4)
            this.speed = 18;

        return Number.parseInt(this._speed.toString(), 10); 
    }

    set atk(value: number){ this._atk = value }
    get atk(){ return Number.parseInt(this._atk.toString(), 10); }

    set hp(value: number){ this._hp = value }
    get hp(){ return Number.parseInt(this._hp.toString(), 10); }
    
    set def(value: number){ this._def = value }
    get def(){ return Number.parseInt(this._def.toString(), 10); }

    get hpBase(){
        let countDecimal = 0;
        this._hpBase = 0;
        let i = 0;
        if (this.id == 1){
            for (i; i < this.level; i++){
                this._hpBase += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.id == 2){
            for (i; i < this.level; i++){
                this._hpBase += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        } else if (this.id == 3){
            for (i; i < this.level; i++){
                this._hpBase += (38 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }
        
        return Number.parseInt(this._hpBase.toString(), 10);
    }

    get atkBase() {
        let countDecimal = 0;
        this._atkBase = 0;
        if (this.id == 1){
            for (let i = 0; i < this.level; i++){
                this._atkBase += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.id == 2){
            for (let i = 0; i < this.level; i++){
                this._atkBase += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }
        else if (this.id == 3){
            for (let i = 0; i < this.level; i++){
                this._atkBase += (12.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }

        return Number.parseInt(this._atkBase.toString(), 10);
    }

    get defBase(){
        let countDecimal = 0;
        this._defBase = 0;
        if (this.id == 1){
            for (let i = 0; i < this.level; i++){
                this._defBase += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.id == 2){
            for (let i = 0; i < this.level; i++){
                this._defBase += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }  else if (this.id == 3){
            for (let i = 0; i < this.level; i++){
                this._defBase += (13.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }

        return Number.parseInt(this._defBase.toString(), 10);
    }
    
    get hpBuild(){
        let buildHpStats = 0; 
        for (let i = 0; i < this.artifacts.length; i++){
            const artifact = this.artifacts[i];
            if (!artifact){ continue; }
            for (let j = 0; j < artifact.length; j++){
                if (artifact[j]?.hp != undefined){
                    buildHpStats += artifact[j]!.hp!;
                    
                } else if (artifact[j]?.hpPercentage != undefined){
                    buildHpStats += this.hpBase * artifact[j]?.hpPercentage!;

                }

                this._hpBuild = (buildHpStats + this.hpBase);
            }
        }
        
        return Number.parseInt(this._hpBuild.toString(), 10);
    }

    get atkBuild(){
        let buildAtkStats = 0; 
        for (let i = 0; i < this.artifacts.length; i++){
            const artifact = this.artifacts[i];
            if (!artifact){ continue; }
            for (let j = 0; j < artifact.length; j++){
                if (artifact[j]?.atk != null){
                    buildAtkStats += artifact[j]?.atk!;

                } else if (artifact[j]?.atkPercentage != null){
                    buildAtkStats += this.atkBase * artifact[j]?.atkPercentage! / 100;
                    
                }
                
                this._atkBuild = buildAtkStats + this.atkBase;
            }
        }

        return Number.parseInt(this._atkBuild.toString(), 10);
    }

    get defBuild(){
        let buildDefStats = 0; 
        for (let i = 0; i < this.artifacts.length; i++){
            const artifact = this.artifacts[i];
            if (!artifact){ continue; }
            for (let j = 0; j < artifact.length; j++){
                if (artifact[j]?.def != undefined){
                    buildDefStats += artifact[j]?.def!;
                    
                } else if (artifact[j]?.defPercentage != undefined){
                    buildDefStats += this.defBase * artifact[j]?.defPercentage!;

                }
                this._defBuild = buildDefStats + this.defBase;

            }
        }

        return Number.parseInt(this._defBuild.toString(), 10);
    } 

    get expMax(){
        let countDecimal = 0;
        this._expMax = 0;
        for (let i = 0; i < this.level; i++){
            this._expMax += (100 * (1 + (countDecimal / 1.25)));
            if (justifyStats.includes(i)) 
                countDecimal++;

        }

        return Number.parseInt(this._expMax.toString(), 10);
    }

    set energyMax(value: number) {
        this._energyMax = value;
    }
    get energyMax(){
        if (this.id == 1)
            this._energyMax = 160;
        else if (this.id == 2)
            this._energyMax = 40;
        
        return Number.parseInt(this._energyMax.toString(), 10);
    }

    get ultCost(){
        if (this.id == 1)
            this._ultCost = 80;
        else if (this.id == 2)
            this._ultCost= 40;

        return this._ultCost;
    }
}