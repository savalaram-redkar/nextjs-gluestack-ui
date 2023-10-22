import GluestackMenu from "./gluestack-menu";

export type NavbarProps = {
  name: string;
  children?: NavbarProps[];
  path?: string;
};

const routes: NavbarProps[] = [
  {
    name: "Community",
    children: [
      {
        name: "Community1",
        children: [
          {
            name: "Community11",
            path: "/Community11",
          },
          {
            name: "Community12",
            path: "/Community12",
          },
          {
            name: "Community13",
            path: "/Community13",
          },
        ],
      },
      {
        name: "Community2",
        children: [
          {
            name: "Community21",
            path: "/Community21",
          },
          {
            name: "Community22",
            path: "/Community22",
          },
        ],
      },
      {
        name: "Community3",
        children: [
          {
            name: "Community31",
            path: "/Community31",
          },
        ],
      },
      {
        name: "Community4",
        path: "/Community4",
      },
      {
        name: "Community5",
        path: "/Community5",
      },
    ],
  },
  {
    name: "Plugins",
    children: [
      {
        name: "Community",
        children: [
          {
            name: "Plugins",
            path: "/Plugins",
          },
          {
            name: "Theme",
            path: "/Theme",
          },
        ],
      },
      {
        name: "Settings",
        path: "/Settings",
      },
    ],
  },
  {
    name: "Add account",
    path: "/account",
  },
];

export default function Home() {
  return (
    <main>
      {routes?.map((d: NavbarProps) => {
        return <GluestackMenu key={d.name} item={d} />;
      })}
    </main>
  );
}
