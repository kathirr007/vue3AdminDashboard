import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      // {
      //   icon: "UserIcon",
      //   pageName: "side-menu-ecommerce",
      //   title: "Prospectos",
      //   subMenu: [
      //     {
      //       icon: "UserPlusIcon",
      //       pageName: "side-menu-prospectos",
      //       title: "Prospectos",
      //     }
      //   ],
      // },
      {
        icon: "UsersIcon",
        pageName: "side-menu-dashboard-user",
        title: "Users",
      },
      {
        icon: "UserCheckIcon",
        pageName: "side-menu-prospects",
        title: "Prospects",
      },
      // "devider",
      {
        icon: "TruckIcon",
        pageName: "side-menu-dashboard-companies",
        title: "Companies",
        subMenu: [
          {
            icon: "HardDriveIcon",
            pageName: "side-menu-companies",
            title: "Companies",
          },
          {
            icon: "GlobeIcon",
            pageName: "side-menu-company-users",
            title: "Company Users",
          }
        ],
      },
      "devider",
      {
        icon: "SettingsIcon",
        pageName: "side-menu-settings",
        title: "Settings",
        subMenu: [
          {
            icon: "GlobeIcon",
            pageName: "side-menu-languages",
            title: "Languages",
          }
        ],
      },
      "devider",
    ],
  }),
});

