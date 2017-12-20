
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AnimalsComponent } from "./animals/animals.component";
import { ColorsComponent } from "./colors/colors.component";
import { GamesComponent } from "./games/games.component";
import { PlacesComponent } from "./places/places.component";
import {LettersComponent} from "./letters/letters.component";
import {CookwareComponent} from "./cookware/cookware.component";
import {EmotionsComponent} from "./emotions/emotions.component";
import {HousewaresComponent} from "./housewares/housewares.component";
import {NumbersComponent} from "./numbers/numbers.component";
import {ShapesComponent} from "./shapes/shapes.component";
import {SocialComponent} from "./social/social.component";
import {VegetablesComponent} from "./vegetables/vegetables.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, children: [
      { path: "", redirectTo: "animals", pathMatch: "full" },
      { path: "animals", component: AnimalsComponent },
      { path: "colors", component: ColorsComponent },
      { path: "games", component: GamesComponent },
      { path: "places", component: PlacesComponent },
      { path: "letters", component: LettersComponent },
      { path: "cookware", component: CookwareComponent },
      { path: "emotions", component: EmotionsComponent },
      { path: "housewares", component: HousewaresComponent },
      { path: "numbers", component: NumbersComponent },
      { path: "shapes", component: ShapesComponent },
      { path: "social", component: SocialComponent },
      { path: "vegetables", component: VegetablesComponent },
      { path: "vehicle", component: VehicleComponent }
    ]
  },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'contacts', component: ContactsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
