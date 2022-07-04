import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'INPUTEXAMPLE'

 parentCount:number=0;



addUser ()
{
  this.parentCount+=1;

}

removeUser()
{
  if(this.parentCount>0)
  this.parentCount-=1;
}

}