"use client";

// import Link from "next/link";
import Layout from "./components/layout/Layout";
import AnimatedHero from "./components/AnimatedHero/Index";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Layout>
        {/* <h1>Home page</h1> */}
        <div className="bottom-[-50%] flex h-[100vh] justify-center text-balance pt-[15rem] text-center text-7xl text-white">
          <AnimatedHero
            letterClass={letterClass}
            strArray={[
              "4",
              "0",
              "4",
              " ",
              "P",
              "a",
              "g",
              "e",
              " ",
              "n",
              "o",
              "t",
              " ",
              "f",
              "o",
              "u",
              "n",
              "d",
              "!",
            ]}
            idx={7}
          />
        </div>
      </Layout>
    </>
  );
}
