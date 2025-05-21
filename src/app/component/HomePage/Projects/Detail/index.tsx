/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../style.module.scss";
import ProjectOne from "./Content/ProjectOne";
import ProjectSecond from "./Content/ProjectSecond";
import ProjectThird from "./Content/ProjectThird";

const ProjectDetail = ({
  onClose,
  projectName,
  projectId,
}: {
  onClose: () => void;
  projectName: string;
  projectId: number;
}) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsScrollable(true);
      setRevealed(true);
    }, 2500);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  const renderContent = () => {
    switch (projectId) {
      case 1:
        return <ProjectOne />;
      case 2:
        return <ProjectSecond />;
      case 3:
        return <ProjectThird />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ height: "0vh" }}
      animate={{ height: "100vh" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={classNames(
        styles.projectDetail,
        "w-full bg-black fixed left-0 top-[50%] -translate-y-1/2 text-white font-outfit px-[1.5vw]",
        isScrollable ? "overflow-y-auto" : "overflow-hidden",
        !revealed && "flex items-center justify-center"
      )}
    >
      {/* Animated text reveal */}
      {!revealed && (
        <div className="overflow-hidden w-full">
          <motion.p
            initial={{ translateY: 0 }}
            animate={{ translateY: "-100%" }}
            transition={{
              duration: 1,
              delay: 2,
              type: "spring",
            }}
            className="text-center text-[128px] font-semibold w-full"
          >
            {projectName}
          </motion.p>
        </div>
      )}

      {/* Scrollable content */}
      {revealed && (
        <div className="flex flex-col w-full py-[2vh]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-[25px] h-[25px] bg-white rounded-full"
              />
              <div className="inline-block overflow-x-hidden">
                <motion.span
                  initial={{ translateX: "-100%" }}
                  animate={{ translateX: "0" }}
                  transition={{ duration: 1 }}
                  className="text-[24px] font-semibold inline-block"
                >
                  {projectName}
                </motion.span>
              </div>
            </div>
            <div className="cursor-pointer" onClick={onClose}>
              <AiOutlineClose className="text-white" size={30} />
            </div>
          </div>

          {renderContent()}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
