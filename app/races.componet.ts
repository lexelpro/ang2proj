import { Component } from '@angular/core';
import {Race} from './race';
import {RACES} from './mocks';

@Component({
    selector:'races',
    templateUrl: 'app/races.component.html',
    styleUrls: ['app/races.component.css']
})
export class RacesComponent{
    races: Race[];
    ngOnInit(){
        this.races = RACES;
    }
    totalCost(){
        let sum = 0;
        for(let race of this.races ){
            if(race.isRacing){
                sum += race.entryFee
            }
        }
        return sum;
    }
}