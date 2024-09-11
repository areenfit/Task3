import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  user: User = { id: 0, email: '', first_name: '', last_name: '', avatar: '' };
  userForm = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    avatar: new FormControl(''),
  });

  isEditing = false;
  userId: number | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      this.isEditing = this.route.snapshot.url[this.route.snapshot.url.length - 1].path === 'edit';

      if (this.isEditing && this.userId) {
        this.userService.getUserById(this.userId).subscribe({
          next: response => {
            this.user = response.data;
            this.userForm.setValue({
              email: this.user.email || '',
              first_name: this.user.first_name || '',
              last_name: this.user.last_name || '',
              avatar: this.user.avatar || ''
            });
            this.isLoading = false;
          },
          error: () => {
            this.errorMessage = 'Failed to fetch user details. Please try again later.';
            this.isLoading = false;
          }
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      const user: User = {
        id: this.isEditing ? this.userId! : 0,
        email: formValues.email || '',
        first_name: formValues.first_name || '',
        last_name: formValues.last_name || '',
        avatar: formValues.avatar || ''
      };

      const action = this.isEditing ? this.userService.updateUser(user) : this.userService.saveUser(user);

      action.subscribe({
        next: () => this.router.navigate(['/users']),
        error: () => this.errorMessage = this.isEditing ? 'Failed to update user.' : 'Failed to add user.',
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
