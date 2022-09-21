import { PersonMangerComponent } from './Pages/person-manger/person-manger.component';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home-page/home-page.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'course/:id',
    component:CoursesPageComponent
  },
  {
    path: 'person',
    component:PersonMangerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
