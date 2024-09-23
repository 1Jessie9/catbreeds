import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CatService {
    apiUrl: string = environment.api_url;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getBreeds(limit: number, page: number): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}/breeds`, {
            params: {
                limit: limit.toString(),
                page: page.toString()
            }
        });
    }

    searchBreeds(query: string): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}/breeds/search`, {
            params: { q: query }
        });
    }

    getBreedById(id: string): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}/breeds/${id}`);
    }
}
