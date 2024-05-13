import { Button, Property } from '@nativescript/core';

export type MenuEvent = { index: number };
export type MenuButtonAction = { name: string; icon?: string };
export const optionsProperty = new Property<
  MenuButtonBase,
  Array<MenuButtonAction>
>({
  name: 'options',
});

export class MenuButtonBase extends Button {
  options: Array<MenuButtonAction>;
}

optionsProperty.register(MenuButtonBase);
