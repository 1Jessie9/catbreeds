import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBreedPage } from './detail-breed.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBreedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBreedPageRoutingModule {}
