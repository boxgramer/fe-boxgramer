import Link from "next/link";

type menu = {
  label: string;
  target: string;
  active?: boolean;
};
type header = {
  menus: Array<menu>;
};
export default function Header(data: header) {
  return (
    <header className="py-7 px-5 absolute flex justify-between">
      <nav className="h-10 flex flex-col justify-center ">
        <ul className="flex  gap-5 ">
          {data.menus.map((m: menu) => (
            <li>
              <Link
                href={m.target}
                className={
                  "py-2  hover:border-b-4 hover:border-b-primary hover:text-primary  " +
                  (m.active
                    ? "border-b-primary border-b-4 text-primary"
                    : " text-secondary")
                }
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
