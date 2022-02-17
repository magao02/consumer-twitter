import { FollowersComponent } from './followers/followers.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { AppComponent } from './app.component';
import { CardUserComponent } from './card-user/card-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: "", pathMatch: 'full' },
  {path: 'pesquisa', component: CardUserComponent },
  {path: 'usuario', component: UserInformationComponent },
  {path: 'seguidores', component: FollowersComponent},
  {path: 'seguindo', component: FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
