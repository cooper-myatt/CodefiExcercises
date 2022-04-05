import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Input() myProfile : string[] =['']
  constructor() { }

  ngOnInit(): void {
    console.log('my profile', this.myProfile);
  }

}
