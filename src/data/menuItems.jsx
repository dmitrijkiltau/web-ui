import { nanoid } from "nanoid";

export const menuItems = [
  {
    id: nanoid(),
    name: "home",
    link: "/",
  },
  {
    id: nanoid(),
    name: "about",
    link: "/about",
  },
  {
    id: nanoid(),
    name: "contact",
    teaserTitle: "contact",
    teaserText: "contactTeaser",
    subItems: [
      {
        id: nanoid(),
        name: "twitter",
        link: "https://twitter.com/einfachdima",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "mastodon",
        link: "https://det.social/@dima",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "github",
        link: "https://github.com/dmitrijkiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "instagram",
        link: "https://instagram.com/einfach.dima",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "linkedIn",
        link: "https://www.linkedin.com/in/dmitrij-kiltau-70bb4b1bb",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "xing",
        link: "https://www.xing.com/profile/Dmitrij_Kiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "quora",
        link: "https://de.quora.com/profile/Dmitrij-Kiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "facebook",
        link: "https://facebook.com/dmitrijkiltau",
        target: "_blank",
      },
    ],
  },
];

export const legalMenuItems = [
  {
    id: nanoid(),
    name: "legalNotice",
    link: "/legal-notice"
  },
  {
    id: nanoid(),
    name: "privacyPolicy",
    link: "/privacy-policy"
  },
];

export const footerMenuItems = [
  {
    id: nanoid(),
    name: "googlePlayApps",
    link: "https://play.google.com/store/apps/dev?id=4827793113950227625",
    target: "_blank",
  },
  {
    id: nanoid(),
    name: "payPalMe",
    link: "https://paypal.me/kiltau",
    target: "_blank",
  },
];
