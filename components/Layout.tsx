import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-sky-700 h-16 flex items-center px-10">
        <Link href={"/"}>
          <h1 className="text-white cursor-pointer">{`woojae's blog!`}</h1>
        </Link>
      </div>
      <div className="grid place-items-center">{children}</div>
    </>
  );
};

export default Layout;
