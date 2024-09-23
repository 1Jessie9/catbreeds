import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './components/search/search.component';
import { ListBreedsComponent } from './components/list-breeds/list-breeds.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const SHARED_EXPORTS = [
    HeaderComponent,
    SearchComponent,
    ListBreedsComponent,
];

@NgModule({
    declarations: [
        ...SHARED_EXPORTS,
    ],
    exports: [
        ...SHARED_EXPORTS,
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
})
export class SharedModule { }
