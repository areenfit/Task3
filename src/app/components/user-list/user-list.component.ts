import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;
  isLoading = true;
  errorMessage: string | null = null;
  itemsPerPage = 5;
  currentPage = 1;
  totalUsers = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 15];
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.userSubscription = this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalUsers = this.users.length;
        this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage);
        this.updateFilteredUsers();
        this.isLoading = false;
        this.userService.numOfUsers = this.totalUsers;
      },
      error: () => {
        this.errorMessage = 'Failed to fetch users. Please try again later.';
        this.isLoading = false;
      },
    });
  }

  handleSearch(id: number | null): void {
    this.updateFilteredUsers(id);
  }

  onPageChanged(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateFilteredUsers();
    }
  }

  onItemsPerPageChanged(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.updateFilteredUsers();
  }

  updateFilteredUsers(searchId: number | null = null): void {
    const filtered = this.users.filter(user => 
      searchId === null || user.id === searchId
    );

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredUsers = filtered.slice(start, end);
    console.log(this.filteredUsers);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  onAddUser(): void {
    this.router.navigate(['/users/add']);
  }
}
