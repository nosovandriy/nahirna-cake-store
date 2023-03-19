import {
  FbMessenger,
  Instagram,
  Telegram,
  Facebook,
  Viber,
} from "@icons/social";

export const defaultContacts = {
  instagram: "https://www.instagram.com/viktoriia.nahirna/",
  facebookMessenger: "https://m.me/viktoria.nosova.18",
  telegram: "https://t.me/Nahirna_Vika",
  viber: "viber://chat?number=%2B380961682394",
};

export const iconContacts = [
  {
    title: "Instagram",
    link: defaultContacts.instagram,
    icon: <Instagram />,
  },
  {
    title: "Telegram",
    link: defaultContacts.telegram,
    icon: <Telegram />,
  },
  {
    title: "Viber",
    link: defaultContacts.viber,
    icon: <Viber />,
  },
  {
    title: "FB Messenger",
    link: defaultContacts.facebookMessenger,
    icon: <FbMessenger />,
  },
];
