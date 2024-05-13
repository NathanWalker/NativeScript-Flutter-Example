## NativeScript with Flutter

A [NativeScript](https://nativescript.org/) with [Flutter](https://flutter.dev/) example highlighting talented work from [Roaa](https://github.com/Roaa94), whereby an Action Menu (Flutter) and Card Flipper (Flutter) are populated via an [Angular](https://angular.io/) service that interacts with [iOS UIMenu](https://developer.apple.com/documentation/uikit/uimenu) and [Android PopupMenu](https://developer.android.com/reference/android/widget/PopupMenu).



**Prerequisites:**

- [Flutter installed](https://docs.flutter.dev/get-started/install)
- [NativeScript installed](https://docs.nativescript.org/setup/)

## Try it

```
ns debug
```

Choose `ios` or `android`.

To run on Android, be sure you have built the module first:

```bash
cd flutter_views/.android

./gradlew Flutter:assemble
```

## Develop Flutter module

Develop Flutter views further in isolation:

```
cd flutter_views
flutter run --debug
```

## Credits

- Excellent work by [Roaa](https://github.com/Roaa94)
  - https://github.com/Roaa94/flutter_cool_card_swiper
  - https://github.com/Roaa94/flutter_action_menu

- Inspirational work from the Flutter community.

- Flexible [@nativescript/flutter](https://docs.nativescript.org/plugins/flutter) plugin.
