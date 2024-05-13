import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HerosComponent } from "./pages/heros.component";
import { RolodexComponent } from "./pages/rolodex.component";

const routes: Routes = [
  { path: "", redirectTo: "/heros", pathMatch: "full" },
  { path: "heros", component: HerosComponent },
  { path: "rolodex", component: RolodexComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
