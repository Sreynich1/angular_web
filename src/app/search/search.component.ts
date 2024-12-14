import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
onButtonClose() {
throw new Error('Method not implemented.');
}
closeSearch() {
throw new Error('Method not implemented.');
}
performSearch() {
throw new Error('Method not implemented.');
}
searchQuery: any;
  onSubmit() {
    alert('Form submitted successfully!');
  }

}
