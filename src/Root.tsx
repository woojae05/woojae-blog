import React from "react";
import "./styles/root.css";
import useRouter from "./hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>Root</h1>
      <button
        onClick={() => {
          push("/about");
        }}
      >
        About으로로 가기
      </button>
    </div>
  );
};

export default Root;
