import { LocalizeRouterModule } from "localize-router";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroes.component";

  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HeroesComponent }
  ];
  
  @NgModule({
    imports: [
      LocalizeRouterModule.forChild(routes),
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule, LocalizeRouterModule ]
  })
  export class HeroesRoutingModule {}
