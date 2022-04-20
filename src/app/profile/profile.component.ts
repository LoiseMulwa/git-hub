import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public info:any=[];
  public profiles:any=[];
  public repos:any=[];


  constructor(private profileService:ProfileService) {
    this.profileService.getUserRepos().subscribe(repos =>{
      this.repos=repos;
    });
    this.profileService.getUserInfo().subscribe(info =>{
      this.info=info;
    });
   }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data)=>{
      this.profiles=data;
      console.log (data);
  })

}
}



// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
  // public info:any=[];
  // public profiles:any=[];
  // public repos:any=[];


//   constructor(private profileService:ProfileService) {
//       this.profileService.getUserRepos().subscribe(repos =>{
//       this.repos=repos;
//     });
//     this.profileService.getUserInfo().subscribe(info =>{
//       this.info=info;
//     });
//    }

//   ngOnInit(): void {
//     this.profileService.getProfiles().subscribe((data)=>{
//       this.profiles=data;
//       console.log (data);
    
      
//     })
//   }

// }


