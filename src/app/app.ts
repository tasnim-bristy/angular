import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { email } from '@angular/forms/signals';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
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

  // users=["Oreo", "Leo", "Casper", "Nimpu", "Kaltu", "Fiona", "Laltu", "Laddu", "Liona"];
  // students=[
  //   {name:'Tasnim', age:21, email:'tasnim@gmail.com'},
  //   {name:'Bristy', age:20, email:'bristy@gmail.com'},
  //   {name:'Mushkan', age:24, email:'mushkan@gmail.com'},
  //   {name:'Nargis', age:28, email:'nargis@gmail.com'}
  // ]

  // getName(name:string){
  //   console.log(name);
  // }

  //  count=signal(10);
  //  x=20;
  //  constructor(){
  //   effect(()=>{
  //     console.log(this.count())
  //   })
  //  }
  //  updateValue(val:string){
  //   // this.count.set(this.count()+1);
  //   if(val== 'inc'){
  //     this.count.set(this.count()+1);
  //   }
  //   else{
  //     this.count.set(this.count()-1);
  //   }
  //  }

  // data:WritableSignal<number | string>=signal(10);
  // count:Signal<number>=computed(()=>200);
  // updateSignal(){
  //   this.data.set("Hello");
  // }

  // x=signal(10);
  // y=signal(20);
  // z=computed(()=>this.x()+this.y());
  // showValue(){
  //   console.log(this.z());
  //   this.x.set(100);
  //   console.log(this.z())
  // }
  // updateX(){
  //   this.x.set(300);
  // }

  // userName= signal('Tasnim');
  // count=signal(0);
  // displayHeading=false;
  // constructor(){
  //   effect(()=>{
  //     if(this.count()==2){
  //       // this.displayHeading=true;
  //       setTimeout(()=>{
  //         debugger;
  //         this.displayHeading=true;
  //         console.log(this.displayHeading);
  //       },2000)
  //     }
  //     else{
  //       this.displayHeading=false;
  //     }
  //   })
  // }
  // toggleValue(){
  //   // this.displayHeading=!this.displayHeading; 
  //   this.count.set(this.count()+1);
  // }

  // users=['Tasnim', 'Bristy', 'Oreo', 'Leo', 'Casper', 'laddu', 'Liona', 'Fiona', 'Laltu', 'Kaltu', 'Nimpu']
  // users=[]

  // name="tasnim";

  // task="";
  // taskList:{id:number, task:string}[]=[];
  // addTask(){
  //   this.taskList.push({id:this.taskList.length+1,task:this.task});
  //   console.log(this.taskList)
  //   this.task=''
  // }
  // deleteTask(taskId:number){
  //   this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  // }

  // bgColor='green';
  // fontSize="50px";
  // headingSizeBig='80px';
  // headingSizeSmall='30px';
  // zoom=false;
  // updateHeadingSize(){
  //   this.zoom=!this.zoom;
  // }

  // login=true;


  // students=['anaya','amaya','mushkan'];
  // studentsData=[
  //   {
  //     name:'Tasnim',
  //     age:'21',
  //     email:'tasnim@gmail.com'
  //   },
  //   {
  //     name:'Bristy',
  //     age:'20',
  //     email:'bristy@gmail.com'
  //   },
  //   {
  //     name:'Anaya',
  //     age:'17',
  //     email:'anaya@gmail.com'
  //   },
  //   {
  //     name:'Amaya',
  //     age:'16',
  //     email:'tasnim@gmail.com'
  //   },
  //   {
  //     name:'Mushkan',
  //     age:'26',
  //     email:'mushkan@gmail.com'
  //   },
  // ]

  // color="black";
  // changeColor(color:string){
  //   this.color=color;
  // }


//   name=new FormControl('tasnim');
//   password=new FormControl('1234')
//   displayValue(){
//     console.log(this.name.value, this.password.value);
//   }
//   setValue()
// {
//   this.name.setValue('bristy');
//   this.password.setValue('4321');
// }

// profileForm= new FormGroup({
//   name:new FormControl('', [Validators.required]),
//   password:new FormControl('', [Validators.required,Validators.minLength(5)]),
//   email:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')] ),
// })
// onSubmit(){
//   console.log(this.profileForm.value);
// }
// get name(){
//   return this.profileForm.get('name');
// }
// get password(){
//   return this.profileForm.get('password');
// }
// get email(){
//   return this.profileForm.get('email');
// }


// addDetails(val:NgForm){
//   console.log(val);
// }


// userName="Tasnim";
// onUserChange(user:string){
// this.userName=user;
// }

users=['Tasnim', 'bristy', 'oreo', 'Casper']

}
 