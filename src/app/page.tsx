"use client";
import { useState } from "react";
import Filler from "./component/HomePage/Filler";
import Introduction from "./component/HomePage/Introduction";
import Opening from "./component/HomePage/Opening";
import About from "./component/HomePage/About";
import Projects from "./component/HomePage/Projects";

export default function HomePage() {
  const [openingFinished, setOpeningFinished] = useState<boolean>(false);
  return (
    <>
      <Opening
        openingFinished={openingFinished}
        setOpeningFinished={setOpeningFinished}
      />
      <Introduction openingFinished={openingFinished} />
      <About />
      <Projects />
      <Filler />
    </>
  );
}
