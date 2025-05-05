/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import classNames from "classnames";
import styles from "./styles.module.scss";
import { useEffect } from "react";
const Introduction = ({ openingFinished }: { openingFinished: boolean }) => {
  useEffect(() => {
    console.log(openingFinished);
  }, [openingFinished]);

  return (
    <div className="w-full relative z-10 bg-primary overflow-hidden h-[140vh]">
      <div
        className={`w-full h-[140vh] bg-primary top-0 font-outfit flex flex-col ${
          !openingFinished ? "fixed" : "relative"
        }`}
      >
        <div className="w-full h-[100vh] relative flex flex-col">
          <div className="navigation flex items-center justify-between pt-[10vh]">
            <div className="px-3 relative">
              <div className="flex flex-col leading-[0.8] z-10 relative">
                <span className="text-[36px] font-semibold text-tertiary">
                  Judy
                </span>
                <span className="pl-5 text-[36px]">Space</span>
              </div>
              <>
                <div
                  className={classNames(
                    styles.starContainer,
                    "absolute top-0 right-[-15px] rotate-[20deg]"
                  )}
                >
                  <div className={classNames(styles.star, "bg-tertiary")}></div>
                </div>
                <svg
                  style={{ visibility: "hidden", position: "absolute" }}
                  width="0"
                  height="0"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="6"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="
                      1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -10"
                        result="goo"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="goo"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </>
            </div>
            <div
              className={classNames(
                "flex items-center gap-3 text-textInactive font-extralight font-outfit",
                styles.nav
              )}
            >
              <span>About</span>
              <span>Work</span>
              <span>Gallery</span>
              <span>Contact</span>
            </div>
            <div></div>
          </div>
          <div className="w-full grow flex items-end pb-[35px] pl-[35px] pr-[70px] justify-between z-10">
            <p className="text-[33px] font-outfit w-[500px] leading-none">
              Sundown is a multi-disciplinary studio focused on creating unique,
              end-to-end experiences and environments.
            </p>
            <div className="text-[200px] font-semibold leading-[0.6] flex flex-col items-end font-outfit mb-[25px]">
              <span className="opacity-50">WORK</span>
              <span className="opacity-50">TO</span>
              <span>INSPIRE</span>
            </div>
          </div>
          <div
            className={classNames(
              styles.blob,
              "absolute bottom-[-50px] right-20 blur-md"
            )}
          ></div>
        </div>
        <div className="ml-[35px] mr-[70px] w-[calc(100%-70px)] h-[1vh] border-neutral-600 border-b"></div>
        <div
          className={classNames(
            "w-full h-[40vh] pt-[10vh] font-outfit flex items-center font-bold text-[200px] leading-none whitespace-nowrap",
            styles.infiniteTextBanner
          )}
        >
          <p>WORK</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
          <p>TO</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
          <p>INSPIRE</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
          <p>WORK</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
          <p>TO</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
          <p>INSPIRE</p>
          <div className="bg-tertiary w-[100px] h-[100px] aspect-square rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
