import Image from "next/image";
import Header from "@/components/Header";
import { Facebook, Github, Instagram, Whatsapp } from "@/components/Icon";
import { SocialAbsoulte, WhatsappAbsolute } from "@/components/Socials";
import About from "@/components/About";

export default function Home() {
  const menus = [
    {
      label: "about",
      target: "#about",
      active: true,
    },
    {
      label: "experience",
      target: "#experience",
      active: false,
    },
    {
      label: "career",
      target: "#career",
      active: false,
    },
  ];
  const socials = [
    {
      url: "https://instagram.com",
      label: "instagram.com",
      icon: Instagram(),
    },
    {
      url: "github.com",
      label: "github",
      icon: Github(),
    },
    {
      url: "facebook.com",
      label: "facebook",
      icon: Facebook(),
    },
  ];
  const message = {
    url: "web.whatsapp.com",
    label: "whatsapp",
    icon: Whatsapp(),
  };

  return (
    <main className="">
      <Header menus={menus} />
      <SocialAbsoulte medias={socials} />
      <WhatsappAbsolute
        url={message.url}
        label={message.label}
        icon={message.icon}
      />
      <About />
    </main>
  );
}
