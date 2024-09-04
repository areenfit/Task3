import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule, CommonModule],
})
export class HeaderComponent {
  searchValue: number | null = null;
  @Input() showInput: boolean = true;
  @Output() searchId = new EventEmitter<number | null>();

  onSearch() {
    this.searchId.emit(this.searchValue);
  }
  clearInput() {
    this.searchValue = null;
    this.onSearch();
  }
}
