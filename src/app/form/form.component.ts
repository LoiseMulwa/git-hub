import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ProfileService]
})
export class FormComponent implements OnInit {
  profile:any=[];
  info:any=[];
  repos:any=[];
  username:any=[];
  display:any=true;

  constructor (private profileService:ProfileService) { 
    this.profileService.getUserRepos().subscribe(repos =>{
      this.repos=repos

  });
  this.profileService.getUserInfo().subscribe(info =>{
    this.info=info
  });
  }

  searchUser(){
    this.display=false;
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile)=>{
    this.profile=profile
    });
    this.profileService.getRepos(this.username).subscribe((repos)=>{
      this.repos=repos
    });
     this.profileService.getProfileInfo().subscribe((info)=>{
      this.info=info
      console.log(this.info);
    });

}
  ngOnInit(): void {
  }

}










