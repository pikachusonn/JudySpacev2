"use client";
import { useState } from "react";
import Filler from "./component/HomePage/Filler";
import Introduction from "./component/HomePage/Introduction";
import Opening from "./component/HomePage/Opening";

export default function HomePage() {
  const [openingFinished, setOpeningFinished] = useState<boolean>(false);
  return (
    <>
      <Opening
        openingFinished={openingFinished}
        setOpeningFinished={setOpeningFinished}
      />
      <Introduction openingFinished={openingFinished} />
      <Filler />
    </>
  );
}
