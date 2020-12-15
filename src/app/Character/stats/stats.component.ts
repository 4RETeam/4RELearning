import { SplitInterpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  intl:number=0;
  str:number=0;
  end:number=0;
  spirit:number=0;
  agi:number=0;
 
  armor = {
    Name:'fuckin armor',
    hp:2,
    arm:2,
    stiffness:1,
    spell:"protects from flying dicks",
    spellDmg:0
  }
  weapon ={
    Name:"fuckin weapon",
    DmgS:'(str*1 +1)',
    Dmg:(this.str*1 + 1),
    spellDmg:(this.intl*1+2),
    spell:"throw a dick into your opponent"
  }
  enduranceBrake=0;
  Hp=0;
  Dmg=0;
  MP=0;
  Moral=0;
  Endurance= 0;
  Weigth=0;
  POW=0;
  Start(){
    this.enduranceBrake=this.end+3;
    this.Hp=this.end*2+this.armor.hp+6;
    this.Dmg=this.weapon.Dmg;
    this.MP=this.agi*2 - this.armor.stiffness;
    this.Moral=this.spirit*2;
    this.Endurance= this.enduranceBrake*3;
    this.Weigth=this.end*2+8;
    this.POW=this.spirit*3;
  }


  getValue(val:object) {
    this.intl = val.int;
    this.spirit = val.spirit;
    this.str = val.str;
    this.agi = val.agi;
    this.end = val.end;
    this.Start();
   
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
class Items{
  public name;
  public weight;
  constructor(name:string,weight:number)
  {
  this.weight=weight;
  this.name=name;
  }
}
class weapon extends Items{ 
 
  constructor( name:string,weight:number,private Dmg:number, private DmgS:string,private spellDmg:number,private spell:string)
  {
  super(name,weight);

  }
}
class armor extends Items{ 
 
  constructor( name:string,weight:number,private arm:number, private stiffness:number,private spellDmg:number,private spell:string)
  {
  super(name,weight);

  }
}
