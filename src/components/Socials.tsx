import Link from "next/link";
import { ReactNode } from "react";

type media = {
  url: string;
  label: string;
  icon: ReactNode;
};
type socials = {
  medias: Array<media>;
};

export function SocialAbsoulte(socials: socials) {
  return (
    <div className={"flex gap-3 items-center h-9  top-7 right-10 fixed z-10 "}>
      {socials.medias.map((media: media) => (
        <Link href={media.url} target="__blank" className="h-full">
          {media.icon}
        </Link>
      ))}
    </div>
  );
}

export function WhatsappAbsolute(media: media) {
  return (
    <div
      className={
        "flex items-center justify-center  h-16 w-16  bottom-28 right-10 fixed p-2  border-primary border-4 rounded-full  z-10  "
      }
    >
      <Link href={media.url} target="__blank" className="h-full">
        {media.icon}
      </Link>
    </div>
  );
}
