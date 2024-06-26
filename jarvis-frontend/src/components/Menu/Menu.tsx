import classNames from "classnames";
import { Link, To } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLElement> {
  menuOptions: { key: string; lable: string; to: To }[];
}

export const Menu = (props: Props) => {
  const { menuOptions, className, ...rest } = props;
  const classes = classNames(
    "bg-black text-white p-4 flex flex-col",
    className
  );

  return (
    <aside {...rest} className={classes}>
      <div className="flex flex-col space-between grow">
        <p className="break-words mb-4 uppercase font-[700]">
          {/* GAFF youth camp workshop */}
        </p>
        <nav>
          <ul>
            {menuOptions.map((option) => (
              <Link key={option.lable} to={option.to}>
                <li className="cursor-pointer p-2 mb-2 hover:bg-gray-600 rounded-sm">
                  {option.lable}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="w-[calc(124/16*1rem)]">
          <i
            dangerouslySetInnerHTML={{
              __html:
                '<svg viewBox="0 0 833.44 468.75"><path d="M0 0h833.44v468.75H0z"/><rect width="145.4" height="111.35" x="77.04" y="242.69" fill="#00adef" ry="0"/><rect width="145.4" height="111.35" x="253.68" y="242.43" fill="#00adef" ry="0"/><rect width="145.4" height="111.35" x="429.72" y="241.71" fill="#005baa" ry="0"/><rect width="145.4" height="111.35" x="612.92" y="242.69" fill="#fff" ry="0"/><path fill="#fff" fill-rule="evenodd" d="M145.12 116.52H118.6c-31.53 2.26-41.9 9.67-44.2 19.05v54.72c7.1 19 29.45 18.8 49.9 21h49.45c21.4-1 40.7-3.9 45.04-20.5v-23.7c-.6-2.5-1.6-4.4-4.5-4.5H168c-4.36-.2-6.37 2.5-7.57 6.2v2.65c1.26 1.9 1.92 3.94 5.25 5.26h32.1v12.43c-5.4 5.3-13.34 6.85-21.9 7.45h-54.5c-10.55-.6-21.28-.98-26.4-8.94v-48.4c.8-4.07 4.2-7.9 26.1-10h24.7c4.1-.5 4.46-3 5.3-5.27v-2.6c-.8-2-.64-4.2-6-5.04zm135.28 19.75h47.02c17.6.98 34.9 2.38 39.3 20.83v34.23c-4 12.07-16.86 17.4-33.9 19.57h-54.8c-22.7-1.64-35.6-8.82-38.05-21.97V157.4c3.4-10.18 12.95-18.45 40.42-21.13zm3.12 13.7h40.33c14.93.05 20.07 3.27 22.77 8.03v29.9c-5.72 8.45-14.55 7.05-22.47 8.5H279.5c-11.18-.52-15.97-4.23-18.46-9.08v-28.88c2.47-5.25 9.68-8.32 22.48-8.48zm126.35-21.6v32.3h84.1c10.63.85 15.05-3.75 19.5-8.33v-16.37c-2.87-6.04-13.07-6.95-23.7-7.54zm-22.1 75.17V121.1c.1-3.45 1.32-6.26 6.74-6.75h91c19.6 1.94 40.9 1.56 48.8 18.35v21.13c-4.6 19.27-23.6 18.73-40.4 21.13H409v28.88c.03 2.52-.48 4.77-4.95 4.94h-11.5c-2.37-.1-4.35-1.02-4.76-5.24zm166.4 1.16v-49.77c2.9-10.77 13.53-17.4 33.24-19.2h21.2c3.1.46 5 2.26 5.5 5.5v3.6c-1.5 1.9-3.5 2.9-5.8 3.4h-22.2c-6.9 1.38-9.53 4-11.72 6.77v49.4c-.7 2.32-1.64 4.46-4.84 4.85h-11.8c-1.9-.87-3.4-2.1-3.5-4.54zm105.07-69.34h60.58c21.15.47 32.9 7.5 35.8 20.66v33.43c-5.65 16.47-19.57 19.17-34.6 19.98h-55.08c-19.35-2.02-35.28-6.52-37.33-21.12l.2-31.9c1.6-8.7 9.2-16.2 30.5-21zm9.86 13.26h46.1c7.06 1.9 16.77 2.2 18.73 7.15v30.94c.1 7.1-11.84 6.5-18.74 9.1h-46.8c-9.1-.4-15.8-3-19.8-8v-28.2c.8-5.8 9-9 20.4-10.9z"/><circle cx="765.93" cy="209.73" r="7.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path fill="#fff" d="M766.9 209.77q.38.12.74.55.36.42.73 1.16l1.2 2.4h-1.27l-1.13-2.25q-.43-.88-.84-1.17-.4-.3-1.1-.3h-1.3v3.72h-1.2v-8.78h2.7q1.5 0 2.23.63.74.63.74 1.9 0 .83-.38 1.38-.4.6-1.12.8zm-2.98-3.7v3.13h1.5q.85 0 1.3-.4.43-.4.43-1.17 0-.77-.44-1.16-.4-.4-1.2-.4H764z" font-family="sans-serif" font-size="12.04" letter-spacing="0" text-anchor="end" word-spacing="0"/></svg>',
            }}
          />
        </div>
      </div>
    </aside>
  );
};
