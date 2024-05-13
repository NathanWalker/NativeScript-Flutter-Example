import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";
import { init as initFlutter } from "@nativescript/flutter";
import { AppModule } from "./app/app.module";

initFlutter();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
