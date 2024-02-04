import classNames from "classnames";
import { ReactNode, TextareaHTMLAttributes } from "react";
import Card from "./Card";

type TabHeader = {
  title: string;
  link: string;
  active?: boolean;
};

type DataTab = {
  tabHeaders: Array<TabHeader>;
};

export default function Tab(data: DataTab): ReactNode {
  return (
    <div className="m-2">
      <ul className="flex gap-5 h-auto">
        {data.tabHeaders.map((value: TabHeader) => {
          return (
            <li className="h-auto">
              <a
                href={value.title}
                className={classNames(
                  { "text-primary": value.active },
                  { "text-secondary": !value.active },

                  {
                    "border-primary": value.active,
                    "border-secondary": !value.active,
                  },
                  " border-4 ",
                  "rounded-xl",
                  "pt-2",
                  "pb-3",
                  "px-5",
                  "block",
                  "text-24px"
                )}
              >
                {value.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="h-64 my-10 shadow-style-1 bg-third">
        <Card />
      </div>
    </div>
  );
}
