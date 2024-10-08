import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Output() searchTermChange = new EventEmitter<string>();
    public searchTerm: string = '';

    onSearch() {
        this.searchTermChange.emit(this.searchTerm);
    }
}
