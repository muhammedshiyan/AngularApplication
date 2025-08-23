import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class Registercomponent implements OnInit {
  registerObj: Register;
  roles: any[] = []; // roles fetched from API

  constructor(private userService: UserService, private router: Router) {
    this.registerObj = new Register();
  }

  ngOnInit(): void {
    this.loadRoles();
    this.registerObj.roleId = this.roles[0].roleId;
  }

  loadRoles() {
    this.userService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
      },
      error: (err) => {
        console.error("Failed to load roles", err);
      }
    });
  }
  onRoleChange(event: any): void {
    console.log("Selected onRoleChange event:");
  //const selectedRoleId = event.target.value;
  //const selectedRole = this.roles.find(r => r.roleId == selectedRoleId);
  
  //////console.log("Selected Role ID:", selectedRoleId);
  //console.log("Selected Role Object:", selectedRole);

  // Example: set something else based on role
  ////if (selectedRole?.roleName === 'admin') {
   // alert("Admin role selected!");
  //}
}
  onRegister() {
    console.log("Register clicked", this.registerObj);
    this.userService.registerUser(this.registerObj).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message || 'User registered successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert(err.error || 'Registration failed');
      }
    });  
  }
}

export class Register {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  roleId?: number; // role selection

  constructor() {
    this.name = '';
    this.email = '';
    this.passwordHash = '';
    this.phone = '';
    this.roleId = undefined;
  }
}
