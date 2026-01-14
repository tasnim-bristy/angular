import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
// name: string | null = '';
// constructor(private route:ActivatedRoute){

// }
// ngOnInit(){
//   this.route.params.subscribe((params)=>{
//     console.log(params);
//     this.name=params['name'];
//   });
// }

// @Input() user:string='';
// @Input() city:string='';

// @Output() getUsers = new EventEmitter();
// users = ['Tasnim', 'Bristy', 'Casper', 'Leo'];
// loadData(){
//   this.getUsers.emit(this.users);
// }

constructor(){
  console.log('constructor')
}
ngOnInit(){
   
}
}
