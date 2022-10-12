import React from "react";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-sky-700 h-16 flex items-center ">
        <h1 className="text-white">{`woojae's blog!`}</h1>
      </div>
      <div className="grid place-items-center">{children}</div>
    </>
  );
};

export default Layout;
