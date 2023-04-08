import {  Sofia_Sans, Raleway } from "next/font/google";

import "@style/globals.scss";
import Header from "@header/header";
import Footer from "@footer/footer";
import PopUpContacts from "@pop-up-contacts/pop-up-contacts";
import ReduxProvider from "./redux/redux-provider";
import Script from "next/script";

const sofiaFont = Sofia_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sofia",
  display: "swap",
});

const ralewayFont = Raleway({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Найкращі чізкейки в Тернополі",
  description:
    "Ми використовуємо тільки якісні інгредієнти і виготовляємо кожен десерт з дбайливою увагою до деталей. Спробуйте наші чізкейки і відчуйте справжню насолоду.",
  icons: "./favicon.ico",
  openGraph: {
    title: "Найкращі чізкейки в Тернополі",
    description:
      "Ми використовуємо тільки якісні інгредієнти і виготовляємо кожен десерт з дбайливою увагою до деталей. Спробуйте наші чізкейки і відчуйте справжню насолоду.",
    url: "https://nahirna-cake.com.ua",
    siteName: "Nahirna-cake store",
    images: [
      {
        url: "https://serving.photos.photobox.com/088135218c3d71e53d0d7a809df06d9712ec6423fc649e07581ab8212fee39d2c9f8ad7e.jpg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${ralewayFont.variable} ${sofiaFont.variable}`}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}');
    `}
      </Script>
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
