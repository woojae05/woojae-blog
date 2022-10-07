import React, { useEffect } from "react";

interface RouterProps {
  children: React.ReactNode[];
}
const Router = ({ children }: RouterProps) => {
  console.log(children);

  const route: any = children.filter(({ props }: any) =>
    props.path == window.location.pathname ? props.component : null
  )[0];

  useEffect(() => {}, [window.location.pathname]);
  return <div className="router">{route.props.component}</div>;
};

export default Router;
