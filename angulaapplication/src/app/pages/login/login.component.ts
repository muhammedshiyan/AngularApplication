import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class Logincomponent {

  Loginobj: Login;
  constructor(private http:HttpClient, private router: Router){

    this.Loginobj=new Login();
  }

//   onLogin()
// {
// console.log("Login clicked");
// this.http.post('https://localhost:7108/api/Auth/login',this.Loginobj).subscribe((res:any)=>{
//   if(res.result)
//   {
//     alert('Login Success');
//   }
//   else{
//     alert(res.message);
//   }
// })
// }

onLogin()
{
console.log("Login clicked");
  this.http.post('https://localhost:7108/api/Auth/login', this.Loginobj)
    .subscribe({
      next: (res: any) => {
        console.log(res); // see what backend actually returns
        if (res.token) {
          alert('Login Success! Token: ' + res.token);
          // you can store it in localStorage for later API calls
          localStorage.setItem('jwtToken', res.token);
          this.router.navigate(['/landing']);
        } else {
          alert('Login failed!');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Invalid credentials');
      }
    });
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