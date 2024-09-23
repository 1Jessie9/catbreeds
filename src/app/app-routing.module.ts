import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'detail-breed/:id',
		loadChildren: () => import('./detail-breed/detail-breed.module').then(m => m.DetailBreedPageModule)
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
