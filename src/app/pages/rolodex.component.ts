import { inject } from "@angular/core";
import { Component } from "@angular/core";
import { Flutter } from "@nativescript/flutter";
import { FlutterHeroService } from "../services/flutter-hero.service";

@Component({
  selector: "ns-rolodex",
  templateUrl: "./rolodex.component.html",
})
export class RolodexComponent {
  flutterHeros = inject(FlutterHeroService);
  flutter: Flutter;

  loadedFlutter(args) {
    this.flutter = args.object;
    this.flutter.sendMessage("shareNames", this.flutterHeros.addedNames);
  }
}
