import React from "react";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <h1 className="bg-sky-700"> {`woojae's blog!`}</h1>
      {children}
    </div>
  );
};

export default Layout;
