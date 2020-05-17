import { Component ,OnInit} from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Social1';
  constructor(private _router:Router){}

  userexist:boolean
  UserName:string
  ngOnInit() {
        
    if (!sessionStorage.getItem('username'))
    {
      this._router.navigate(['../login'])
    }else
    {
      this.userexist=true
      const uname=sessionStorage.getItem('username');
      this.UserName=uname;
    }
  }
  logOut():void {
    sessionStorage.clear()
    this.UserName=null
    this.userexist=false    
    this._router.navigate(['app'])
    this._router.navigate(['../login'])
  }
}
