import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBreedPageRoutingModule } from './detail-breed-routing.module';

import { DetailBreedPage } from './detail-breed.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailBreedPageRoutingModule,
        SharedModule,
    ],
    declarations: [DetailBreedPage]
})
export class DetailBreedPageModule { }
