import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-change-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private userService: UserService) {}

  onChangePassword() {
    console.log('on change password clicked');
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.setMessage('All fields are required.', 'error');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.setMessage('New password and confirm password do not match.', 'error');
      return;
    }

    // ✅ Get logged-in userId from storage service
    const userId = 1;Number(localStorage.getItem('userId'));
    console.log('on change password clicked',userId);
    //  if (userId) {
    //   this.setMessage('User not logged in.', 'error');
    //   return;
    // }

    this.userService.onChangePassword(userId, this.newPassword).subscribe({
      next: () => this.setMessage('Password changed successfully!', 'success'),
      error: () => this.setMessage('Error changing password. Try again.', 'error')
    });
  }

  private setMessage(msg: string, type: 'success' | 'error') {
    this.message = msg;
    this.messageType = type;
  }
}
