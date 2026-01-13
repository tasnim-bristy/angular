import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  imports: [],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css',
})
export class Profiles {

  userName: string | null = "";
  constructor(private route:ActivatedRoute){ }
  ngOnInit(){
    let name = this.route.snapshot.paramMap.get('name');
    console.log(this.userName); 
  }
}
