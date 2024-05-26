import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://readme.yushanweb.dev/", // replace this with your deployed domain
  author: "Yushan Fernando",
  desc: `I'm a frontend engineer. I'm truly passionate about the Web, Open Source, UI/UX, Developer Experience (DX), Design Systems, and React.`,
  title: "Yushan Fernando's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yushan-fernando/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/yushanwebdev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
