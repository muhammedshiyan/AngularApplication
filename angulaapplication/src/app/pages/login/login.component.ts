import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class Logincomponent {

  Loginobj: Login;
  constructor(private http:HttpClient){

    this.Loginobj=new Login();
  }

  onLogin()
  {
  console.log("Login clicked");
this.http.post('https://localhost:7108/api/Auth/login'
,this.Loginobj
).subscribe((res:any)=>{
  if(res.result)
  {alert('Login Success');

  }
  else{
    alert(res.message);
  }
})
  }
}

export class Login{
emailId:string;
password:string;
constructor(){
  this.emailId='';
  this.password='';
}
}