import { type ReactNode } from "react";

function Main({ children }:{children:ReactNode}) {
  return <main className="mt-[12vh] w-full px-12">{children}</main>;
}

export default Main;
