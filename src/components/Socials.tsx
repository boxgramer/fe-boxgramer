import Link from "next/link";
import { ReactNode } from "react";

type media = {
  url: string;
  label: string;
  icon: ReactNode;
};
type position = "absoulte" | "relative";
type socials = {
  medias: Array<media>;
  position: position;
};

export default function Socials(socials: socials) {
  return (
    <div className={"flex gap-3 items-center " + socials.position}>
      {socials.medias.map((media: media) => (
        <Link href={media.url} target="__blank">
          {media.icon}
        </Link>
      ))}
    </div>
  );
}
