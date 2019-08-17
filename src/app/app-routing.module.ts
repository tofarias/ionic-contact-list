import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', loadChildren: './pages/contact-list/contact-list.module#ContactListPageModule' },
  { path: 'contacts/:id', loadChildren: './pages/contact-detail/contact-detail.module#ContactDetailPageModule' },
  { path: 'albums/:id/photos', loadChildren: './pages/contact-photos/contact-photos.module#ContactPhotosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
