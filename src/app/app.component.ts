import { Component , OnInit} from '@angular/core';
import {ServiceService} from './service.service'
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  name= 'jigyasa';

  new :any;

constructor(private service:ServiceService){

}



ngOnInit(){

   this.service.getData().subscribe((data) => {
      this.new= data;
    })
    
  }


Click()
{
 console.log('clicked');

}

ModelChangedValue(e){
 console.log("on clicking model value changes" , e);

}




}