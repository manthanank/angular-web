import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
