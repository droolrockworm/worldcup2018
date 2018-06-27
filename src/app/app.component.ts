import { Component } from '@angular/core';
import { FifaService } from './fifa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  currentTeam: any;
  datainterval: any;
  title = 'app';


  constructor(private fifaService: FifaService) { }

  processCommand(newHero: string){

    for (let thing of this.fifaService.teamsjson){
      if (thing.country == newHero){
        this.currentTeam = thing
      }
    }




  }
  ngOnInit(){


    this.fifaService.getData()
     .subscribe(
       data => {




       },
       error => {

       })
    this.datainterval = setInterval(() => {


      this.fifaService.getData()
       .subscribe(
         data => {




         },
         error => {

         })
    }, 30000)

  }


}
