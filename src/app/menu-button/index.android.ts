import { Utils } from "@nativescript/core";
import { MenuButtonBase } from "./common";

export class MenuButton extends MenuButtonBase {
  initNativeView(): void {
    super.initNativeView();
    this.on("tap", () => {
      this.showPopup();
    });
  }
  showPopup() {
    const popupMenu = new android.widget.PopupMenu(
      Utils.android.getCurrentActivity(),
      this.android
    );

    if (this.options) {
      for (let i = 0; i < this.options.length; i++) {
        const option = this.options[i];
        popupMenu.getMenu().add(option.name);
      }
      popupMenu.setOnMenuItemClickListener(
        new android.widget.PopupMenu.OnMenuItemClickListener({
          onMenuItemClick: (item): boolean => {
            this.notify({
              eventName: "selected",
              object: this,
              index: this.options.findIndex((o) => o.name === item.getTitle()),
            });
            return true;
          },
        })
      );
    }

    popupMenu.show();
  }
}
