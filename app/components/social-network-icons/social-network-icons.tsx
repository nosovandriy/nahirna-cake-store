import Link from "next/link";
import Image from "next/image";

import { iconContacts } from "../../contacts/default-contacts";

const SocialNetworkIcons = () => {
  return (
    <>
      {iconContacts.map((iconContact, index) => (
        <Link
          key={index}
          href={iconContact.link}
          target="_blank"
          rel="noreferrer noopener"
          className="easy-in cursor-pointer duration-300 hover:scale-110"
          title={iconContact.title}
        >
          <Image
            src={iconContact.icon}
            alt="messenger icon"
            width={35}
            height={35}
          />
        </Link>
      ))}
    </>
  );
};

export default SocialNetworkIcons;
