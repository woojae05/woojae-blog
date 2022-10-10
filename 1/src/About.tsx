import React from "react";
import useRouter from "./hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={(e) => {
          push("/");
        }}
      >
        root로 가기
      </button>
    </div>
  );
};

export default About;
