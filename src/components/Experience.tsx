import { ReactNode } from "react";
import Tab from "./Tab";

export default function Experience(): ReactNode {
  const tabs = [
    {
      title: "all project",
      link: "#allproject",
      active: true,
    },
    {
      title: "laravel",
      link: "#laravel",
      active: false,
    },
    {
      title: "flutter",
      link: "#flutter",
      active: false,
    },
    {
      title: "nextjs",
      link: "#nextjs",
      active: false,
    },
    {
      title: "game",
      link: "#game",
      active: false,
    },
    {
      title: "figma",
      link: "#figma",
      active: false,
    },
  ];

  return (
    <div className="h-screen px-20 pt-28 z-0 shadow-color-third ">
      <Tab tabHeaders={tabs} />
    </div>
  );
}
