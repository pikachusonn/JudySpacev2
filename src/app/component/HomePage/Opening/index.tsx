"use client";
import { FaAngleDown } from "react-icons/fa6";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useRef } from "react";

const Opening = ({
  setOpeningFinished,
  openingFinished,
}: {
  openingFinished: boolean;
  setOpeningFinished: (val: boolean) => void;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 👈 updated for faster reveal
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["inset(50% 0% 50% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const nameMoveAnimation = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["222px", "0px"]
  );

  const revealText = useTransform(scrollYProgress, [0.4, 0.6], ["0", "1"]);
  const revealTextMove = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["-30px", "0px"]
  );

  // const smoothClipPath = useSpring(clipPath, {
  //   stiffness: 100,
  //   damping: 20,
  // });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress:", latest);
    if (latest === 1) {
      setOpeningFinished(true);
    } else {
      if (openingFinished) {
        setOpeningFinished(false);
      }
    }
  });
  return (
    <div className="w-full relative z-20" ref={ref}>
      <div
        className={classNames(
          "w-full h-screen bg-[#F0EDFC] overflow-hidden font-outfit gap-3 flex flex-col items-center justify-center sticky inset-0 z-10",
          styles.openingWrapper
        )}
      >
        <motion.div
          className="text-black flex flex-col items-center justify-center relative"
          style={{ top: nameMoveAnimation }}
        >
          <div className="font-bold text-3xl">
            <span>Vũ Thị </span>
            <span>Thảo Dương</span>
          </div>
          <span className="font-[550] text-sm">
            Marketing Executive & Business Analyst
          </span>
        </motion.div>

        <motion.img
          className="w-[330px] h-[433px] object-cover rounded-md border-2 border-[#F27C67]/40 shadow-xl"
          style={{ clipPath: clipPath }}
          src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/484011056_2574268962920142_6488150589886580333_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHXWqV_p-zeJAwVvkFROYv1xkT13s5mIx3GRPXezmYjHTVM1l0SGM8hLYCI0ytiJgcenp_NGoR5xr83YFcrj95g&_nc_ohc=x8mb87AdfQEQ7kNvwG32Vje&_nc_oc=AdnDiUNPyM0ZQhfix9rwTHRAZzG9IsCUjnKg3jPpKII4OSruvEm8PoYyZCFYvw03npv2Zh3rBlnIuShOja0gr4Jm&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=KDndML2HP4B9a2UaHFmQKQ&oh=00_AfFkMbjHftuOXW4ivXpbusWeQRf4YHeb_YyCuBpiBtIj_w&oe=6816B80F"
        />

        <motion.div
          style={{ opacity: revealText, top: revealTextMove }}
          className="text-black flex flex-col items-center justify-center gap-2 relative"
        >
          <span className="font-[550] text-sm">
            The horrors persist but so will I
          </span>
          <motion.div
            animate={{ scale: [1, 1.4, 1], y: [-3, 3, -3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <FaAngleDown size={20} />
          </motion.div>
          <span className="font-extralight text-sm">Scroll down</span>
        </motion.div>
      </div>

      <div className="w-full h-[200vh]"></div>
    </div>
  );
};

export default Opening;
