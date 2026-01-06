import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profiles } from './profiles/profiles';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Profiles],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');

  // count = 0;

  // handleIncrement() {
  //   this.count++;
  // }

  // handleDecrement() {
  //   this.count--;
  // }

  // handleReset() {
  //   this.count = 0;
  // }

  // handleCounter(val:string){
  //   if(val=="minus"){
  //     this.count--
  //   }else if(val=="plus"){
  //     this.count++
  //   }else{
  //     this.count=0
  //   }
  // }


  //  handleEvent(event:any) {
  //   console.log('Button clicked',event.type);
  //   console.log('Button clicked',(event.target as Element).className);
  // }


  //  handleEvent(event:Event){
  //   console.log("function called",event.type);
  //   console.log("value",(event.target as HTMLInputElement).value);
  //  }

  //  name=""
  //  email=""
  //  displayName="";
  //  getName(event:Event){
  //   this.name=(event.target as HTMLInputElement).value
  //  }
  //  showName(){
  //   this.displayName=this.name;
  //  }
  //  setName(){
  //   this.name='Tasnim';
  //  }
  //  getEmail(val:string){
  //   console.log(val);
  //   this.email=val
  //  }
  //  setEmail(){
  //   this.email="abc@gmail.com"
  //  }

  // display=true;
  // toggleDiv=false;
  // hide(){
  //   this.display=false;
  // }
  // show(){
  //   this.display=true;
  // }
  // toggle(){
  //   this.display=!this.display;
  // }
  // toggleTwo(){
  //   this.toggleDiv=!this.toggleDiv;
  // }

  // color=2;
  // handleColor(val:number){
  //   this.color=val
  // }
  // handleInput(event:Event){
  //   this.color=parseInt((event.target as HTMLInputElement).value);
  // }

  // color='blue';
  // handleColor(val:string){
  //   this.color=val;
  // }
  // changeColor(event:Event){
  //   this.color=(event.target as HTMLInputElement).value;
  // }

  users=["Oreo", "Leo", "Casper", "Nimpu", "Kaltu", "Fiona", "Laltu", "Laddu", "Liona"];
  students=[
    {name:'Tasnim', age:21, email:'tasnim@gmail.com'},
    {name:'Bristy', age:20, email:'bristy@gmail.com'},
    {name:'Mushkan', age:24, email:'mushkan@gmail.com'},
    {name:'Nargis', age:28, email:'nargis@gmail.com'}
  ]

  getName(name:string){
    console.log(name);
  }
}
 