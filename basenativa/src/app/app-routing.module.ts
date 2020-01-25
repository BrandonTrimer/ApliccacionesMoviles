import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  {
    path: 'autores',
    loadChildren: () => import('./pages/autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'autores/:id',
    loadChildren: () => import('./pages/autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'libros/:id/:nombre/:genero/:img',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'libros2',
    loadChildren: () => import('./pages/libros2/libros2.module').then( m => m.Libros2PageModule)
  },
  {
    path: 'libros2/:id/:titulo/:autorId',
    loadChildren: () => import('./pages/libros2/libros2.module').then( m => m.Libros2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
