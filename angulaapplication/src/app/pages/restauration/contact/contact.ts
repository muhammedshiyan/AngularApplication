import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    if (!control) return '';

    if (control.hasError('required')) return `${field} is required`;
    if (control.hasError('email')) return `Invalid email format`;
    if (control.hasError('pattern')) return `Invalid phone number`;
    if (control.hasError('minlength')) return `Message must be at least 10 characters`;

    return '';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Thank you for contacting us!');
      this.contactForm.reset();
    }
  }
}
