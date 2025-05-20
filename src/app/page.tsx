"use client";
import { useState, useEffect } from "react";
import Contact from "./component/HomePage/Contact";
import Introduction from "./component/HomePage/Introduction";
import Opening from "./component/HomePage/Opening";
import About from "./component/HomePage/About";
import Projects from "./component/HomePage/Projects";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function HomePage() {
  const [openingFinished, setOpeningFinished] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classNames(styles.container)}>
      <Opening
        openingFinished={openingFinished}
        setOpeningFinished={setOpeningFinished}
      />
      <Introduction openingFinished={openingFinished} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
