import { Component, inject } from "@angular/core";
import { Flutter, FlutterChannelType } from "@nativescript/flutter";
import { MenuEvent } from "../menu-button";
import { FlutterHeroService } from "../services/flutter-hero.service";
import { RouterExtensions } from "@nativescript/angular";
import { InAppBrowser } from "nativescript-inappbrowser";

@Component({
  selector: "ns-heros",
  templateUrl: "./heros.component.html",
})
export class HerosComponent {
  isIOS = __IOS__;
  flutterHeros = inject(FlutterHeroService);
  router = inject(RouterExtensions);
  flutter: Flutter;
  flutterChannel: FlutterChannelType;

  constructor() {
    // Flutter to NativeScript communication channel
    // Defines all the types of messages from Flutter with handlers
    this.flutterChannel = {
      viewHero: this.viewHero.bind(this),
    };
  }

  addName(args: MenuEvent) {
    this.flutterHeros.addedNames.push(this.flutterHeros.heros[args.index]);
    this.updateFlutterData();
  }

  removeName(index: number) {
    this.flutterHeros.addedNames.splice(index, 1);
    this.updateFlutterData();
  }

  updateFlutterData() {
    this.flutter.sendMessage("shareNames", this.flutterHeros.addedNames);
  }

  viewHero(args) {
    const url = this.flutterHeros.heros.find(h => h.name === args.name).url;
    InAppBrowser.open(url, {
      // iOS Properties
      dismissButtonStyle: 'cancel',
      preferredBarTintColor: '#3b82f6',
      preferredControlTintColor: 'white',
      readerMode: false,
      animated: true,
      modalPresentationStyle: 'popover',
      modalTransitionStyle: 'coverVertical',
      modalEnabled: true,
      enableBarCollapsing: false,
      // Android Properties
      showTitle: true,
      toolbarColor: '#3b82f6',
      secondaryToolbarColor: 'black',
      navigationBarColor: 'black',
      navigationBarDividerColor: 'white',
      enableUrlBarHiding: true,
      enableDefaultShare: true,
      forceCloseOnRedirection: false,
      hasBackButton: true,
      browserPackage: '',
      showInRecents: false
    });
  }

  viewRolodex() {
    this.router.navigate(["/rolodex"]);
  }

  loadedFlutter(args) {
    this.flutter = args.object;
  }
}
