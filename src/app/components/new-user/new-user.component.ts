// new-user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      avatar: ['', Validators.required], // Avatar URL field
      first_name: ['', [Validators.required, Validators.minLength(2)]], // First name field with validation
      last_name: ['', [Validators.required, Validators.minLength(2)]], // Last name field with validation
      email: ['', [Validators.required, Validators.email]], // Email field with validation
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser);
      console.log(newUser);
      
    } else {
      console.log('Form is invalid');
    }
  }
  goBack() {
    this.location.back();
  }
}
