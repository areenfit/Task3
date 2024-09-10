import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(userId).subscribe({
      next: (response) => {
        this.user = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage =
          'Failed to fetch user details. Please try again later.';
        this.isLoading = false;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
