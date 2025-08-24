import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; 
import { ChangePasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']   // ✅ should be styleUrls, not styleUrl
})
export class ProfileComponent implements OnInit {
  user: any;
  userForm!: FormGroup;
  newPassword: string = '';
  userId!: number;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
    ,private router: Router
    //,private storage: StorageService
  ) {
  }

  ngOnInit(): void {
    // Example: get userId from localStorage/session
     const id = 1;
    this.userId = id ? Number(id) : 1;
    console.log('UserId from storage:', this.userId);
    // Initialize form
    this.userForm = this.fb.group({
      fullName: [''],
      email: [''],
      phone: [''],
      roleId: ['']
    });

    // Load user details
    this.userService.getUserById(this.userId).subscribe({
      next: (res) => {
        this.user = res;
        console.log('User details:', this.user);

        // Patch values into form
        this.userForm.patchValue(this.user);
      },
      error: (err) => {
        console.error('Error fetching user details', err);
      }
    });
  }

  // 🔹 Update profile
  onEditProfile(): void {
    this.userService.onEditProfile({ ...this.userForm.value, userId: this.userId }).subscribe({
      next: (res) => {
        alert(res.message);
      },
      error: (err) => {
        console.error('Error updating profile', err);
      }
    });
  }

  // 🔹 Change password
  onChangePassword(): void {
    this.router.navigate(['/changepassword']);
  }
}
