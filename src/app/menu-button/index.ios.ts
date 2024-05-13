import { MenuButtonBase, MenuButtonAction, optionsProperty } from './common';

export class MenuButton extends MenuButtonBase {
  [optionsProperty.setNative](value: Array<MenuButtonAction>) {
    this.resetMenu();
  }

  resetMenu() {
    if (!this.options) {
      return;
    }
    const iosButton = this.ios as UIButton;
    const actions = [];
    for (let i = 0; i < this.options.length; i++) {
      const option = this.options[i];
      actions.push(
        UIAction.actionWithTitleImageIdentifierHandler(
          option.name,
          option.icon ? UIImage.systemImageNamed(option.icon) : null,
          null,
          () => {
            this.notify({
              eventName: 'selected',
              object: this,
              index: i,
            });
          }
        )
      );
    }
    iosButton.menu = UIMenu.menuWithTitleImageIdentifierOptionsChildren(
      '',
      null,
      null,
      UIMenuOptions.DisplayInline,
      actions
    );
    iosButton.showsMenuAsPrimaryAction = true;
  }
}
