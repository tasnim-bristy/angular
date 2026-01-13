import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
users=[
  {
    id:'1',
    name:'Tasnim',
    age: 21,
    email:'tasnim@gmail.com'
  },
  {
    id:'2',
    name:'Casper',
    age: 2,
    email:'casper@gmail.com'
  },
  {
    id:'3',
    name:'Oreo',
    age: 1,
    email:'oreo@gmail.com'
  }
]
}
