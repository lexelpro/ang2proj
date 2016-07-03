import { Component } from '@angular/core';
import {RacesComponent} from "./races.componet";
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <races> </races>`,
    directives: [RacesComponent]
})
export class AppComponent {
    title = 'Ultra Racing';

}
