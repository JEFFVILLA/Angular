import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
