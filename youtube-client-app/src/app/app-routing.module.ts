import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { DetailInfoComponent } from './youtube/components/detail-info/detail-info.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminPageComponent } from './youtube/components/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchResultComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailInfoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
