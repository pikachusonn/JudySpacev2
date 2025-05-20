/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import classNames from "classnames";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import styles from "./styles.module.scss";
const Contact = () => {
  return (
    <div className="w-full h-[100vh] relative bg-white font-outfit overflow-hidden">
      <div className="w-full h-[100vh] fixed top-0">
        {/* <img
          src="https://i.pinimg.com/736x/e8/24/40/e824407bf5b8110429762ad625b461e3.jpg"
          alt="cat laughing"
          className="w-[300px] h-auto"
        />
        <span className="font-outfit text-white">Ban da bi con meo</span> */}
        <div className="w-full px-[4vw] py-[4vh] flex items-center justify-between">
          <div className="text-[32px] leading-none">
            <span className="font-medium text-[#7E7E7E]/50">
              Let’s collaborate
            </span>
            <span className="font-light flex items-center">
              <PiArrowBendDownRightBold />
              thaoduong250203@gmail.com
            </span>
          </div>
          <div className="flex flex-col w-[30vw]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col leading-none">
                <span className="text-[16px] font-medium">Waozuong | Judy</span>
                <span className="text-[14px] text-black/50 font-light">
                  Marketing Specialist
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col text-[14px] font-extralight opacity-60">
                  <span>Made</span>
                  <span>Width</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[16px] font-medium">Pikachusonn</span>
                  <span className="text-[14px] text-black/50 font-light">
                    Free-lance developer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-5">
              {/* INSTAGRAM */}
              <a href="https://www.linkedin.com/in/th%E1%BA%A3o-d%C6%B0%C6%A1ng-judy-b8378921a/">
                <div
                  className={classNames(
                    "py-5 border-t border-b relative",
                    styles.socialsLink
                  )}
                >
                  <div
                    className={classNames(
                      "bg-black inset-0 absolute",
                      styles.background
                    )}
                  ></div>
                  <div className="z-10 flex gap-5 items-center relative">
                    <span className="text-[12px]">[01]</span>
                    <span>INSTAGRAM</span>
                  </div>
                </div>
              </a>

              {/* CV */}
              <a
                href="/your-cv-link.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={classNames(
                    "py-5 border-b relative",
                    styles.socialsLink
                  )}
                >
                  <div
                    className={classNames(
                      "bg-black inset-0 absolute",
                      styles.background
                    )}
                  ></div>
                  <div className="z-10 flex gap-5 items-center relative">
                    <span className="text-[12px]">[02]</span>
                    <span>CV</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-[380px] font-medium bottom-[-11vh] absolute leading-none">
          Connect
        </p>
      </div>
    </div>
  );
};

export default Contact;
