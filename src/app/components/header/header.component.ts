import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
