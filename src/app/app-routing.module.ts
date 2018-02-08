
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from "./categories/categories.component";
import { AddContactDialog } from "./dialog/add-contact-dialog/add-contact-dialog.componet";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, children: [
      { path: "", redirectTo: "categories", pathMatch: "full" },
      { path: "categories", component: CategoriesComponent },
      //{ path: "AddContactDialog", component: AddContactDialog }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
