import { Sofia_Sans, Inter } from "next/font/google";
// import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "@style/globals.scss";
import Header from "@header/header";
import Footer from "@footer/footer";
import PopUpContacts from "@pop-up-contacts/pop-up-contacts";
import ReduxProvider from "./redux/redux-provider";

// disableReactDevTools();

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
  title: "Nahirna cake",
  description: "Nahirna cake shop with cheesecake",
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
