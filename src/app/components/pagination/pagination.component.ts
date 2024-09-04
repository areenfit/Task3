import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  imports: [CommonModule, FormsModule], 
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() itemsPerPage: number = 5;
  @Input() numberOfUsers: number = 0;
  @Input() itemsPerPageOptions: number[] = [5, 10, 15];
  @Output() pageChanged = new EventEmitter<number>();
  @Output() itemsPerPageChanged = new EventEmitter<number>();

  constructor(userService: UserService) {
    this.numberOfUsers = userService.numOfUsers;
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }

  onItemsPerPageChange(): void {
    this.itemsPerPageChanged.emit(this.itemsPerPage);
  }
  getMaxPerPage() {
    return Math.min(this.numberOfUsers, this.currentPage * this.itemsPerPage);
  }
}
