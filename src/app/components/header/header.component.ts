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
  searchValue: string = '';
  @Input() showInput: boolean = true;
  @Output() searchId = new EventEmitter<number | null>();

  onSearchChange() {
    const id = parseInt(this.searchValue, 10);
    if (!isNaN(id)) {
      this.searchId.emit(id);
    } else {
      this.searchId.emit(null);
    }
  }
  clearInput() {
    this.searchValue = '';
    this.onSearchChange();
  }
}
