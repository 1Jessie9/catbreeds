import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { IBreed } from '../../interfaces/breed';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-breeds',
    templateUrl: './list-breeds.component.html',
    styleUrls: ['./list-breeds.component.scss'],
})
export class ListBreedsComponent implements OnChanges {
    @Input() searchTerm: string = '';

    public catbreeds: IBreed[] = [];
    private limit: number = 12;
    private page: number = 0;
    private isLoadingMore: boolean = false;
    private isSearching: boolean = false;

    constructor(
        private catService: CatService,
        private router: Router,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['searchTerm']) {
            this.page = 0;
            this.filterBreeds();
        }
    }

    getBreeds() {
        this.catService.getBreeds(this.limit, this.page).subscribe({
            next: (result) => {
                console.log(result);
                this.catbreeds = result;
            },
            error: (err) => {
                console.error(err)
            }
        });
    }

    trackItems(index: number, itemObject: any) {
        return itemObject.id;
    }

    handleImageError(event: any) {
        event.target.src = '/assets/images/default-cat-image.webp';
    }

    loadMore(event: any) {
        if (this.isLoadingMore || this.isSearching) {
            event.target.complete();
            return;
        }

        this.page += 1;

        this.catService.getBreeds(this.limit, this.page).subscribe({
            next: (result) => {
                if (result.length === 0) {
                    // Si el resultado está vacío, deshabilita el infinite scroll
                    event.target.disabled = true;
                    this.isLoadingMore = false;
                } else {
                    this.catbreeds = [...this.catbreeds, ...result];
                }

                event.target.complete();
            },
            error: (err) => {
                console.error(err);
                event.target.complete();
            }
        });
    }

    filterBreeds() {
        if (this.searchTerm.length) {
            this.isSearching = true;
            this.catService.searchBreeds(this.searchTerm).subscribe({
                next: (result) => {
                    this.catbreeds = result;
                    this.isLoadingMore = false;
                },
                error: (err) => {
                    console.error(err);
                }
            });
        } else {
            this.isSearching = false;
            this.getBreeds();
        }
    }

    goToDetail(id: string) {
        this.router.navigate(['/detail-breed', id]);
    }
}
