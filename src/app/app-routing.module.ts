
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AnimalsComponent } from "./animals/animals.component";
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, children: [
      { path: "", redirectTo: "animals", pathMatch: "full" },
      { path: "animals", component: AnimalsComponent }
    ]
  },
  { path: 'contacts', component: ContactsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
