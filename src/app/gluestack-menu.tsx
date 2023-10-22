"use client";

import { Menu, MenuItem, MenuItemLabel, Text } from "@gluestack-ui/themed";
import { NavbarProps } from "./page";
import Link from "next/link";

function SubMenu({ item }: { item: NavbarProps }) {
  const { name, children, path } = item;

  if (!children?.length && path) {
    return <Link href={String(path)}>{name}</Link>;
  }

  return (
    <Menu
      placement="right"
      closeOnSelect={false}
      trigger={({ ...triggerProps }) => {
        return <Text {...triggerProps}>{name}</Text>;
      }}
    >
      {children?.map((d: NavbarProps) => {
        return (
          <MenuItem key={d?.name} textValue={d?.name}>
            <MenuItemLabel size="sm">
              <SubMenu item={d} />
            </MenuItemLabel>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

export default function GluestackMenu({ item }: { item: NavbarProps }) {
  const { name, children, path } = item;

  if (!children?.length && path) {
    return <Link href={path}>{name}</Link>;
  }

  return (
    <Menu
      placement="bottom"
      closeOnSelect={false}
      trigger={({ ...triggerProps }) => {
        return (
          <Text m={"$1"} {...triggerProps}>
            {name}
          </Text>
        );
      }}
    >
      {children?.map((d: NavbarProps) => {
        return (
          <MenuItem key={d?.name} textValue={d?.name}>
            <MenuItemLabel size="sm">
              <SubMenu item={d} />
            </MenuItemLabel>
          </MenuItem>
        );
      })}
    </Menu>
  );
}
