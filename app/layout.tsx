import { Sofia_Sans, Inter } from "next/font/google";

import "@style/globals.scss";
import Header from "@header/header";
import Footer from "@footer/footer";
import PopUpContacts from "@pop-up-contacts/pop-up-contacts";
import ReduxProvider from "./redux/redux-provider";

const sofia = Sofia_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sofia",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Nahirna cake - найкращі чізкейки",
    template: "%s | Nahirna cake - найкращі чізкейки",
  },
  description:
    "Ми використовуємо тільки якісні інгредієнти і виготовляємо кожен десерт з дбайливою увагою до деталей. Спробуйте наші чізкейки і відчуйте справжню насолоду.",

  openGraph: {
    title: "&#34;Nahirna-cake shop&#34; - найкращі чізкейки",
    description:
      "Ми використовуємо тільки якісні інгредієнти і виготовляємо кожен десерт з дбайливою увагою до деталей. Спробуйте наші чізкейки і відчуйте справжню насолоду.",
    url: "https://nahirna-cake.com.ua",
    siteName: "Nahirna-cake",
    images: [
      {
        url: "https://serving.photos.photobox.com/088135218c3d71e53d0d7a809df06d9712ec6423fc649e07581ab8212fee39d2c9f8ad7e.jpg",
      },
    ],
    locale: "uk-UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} ${sofia.variable}`}>
      <body>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <PopUpContacts />
        </ReduxProvider>
      </body>
    </html>
  );
}
