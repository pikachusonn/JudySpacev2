/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../style.module.scss";

const ProjectDetail = ({ onClose }: { onClose: () => void }) => {
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

  return (
    <motion.div
      initial={{ height: "0vh" }}
      animate={{ height: "100vh" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={classNames(
        styles.projectDetail,
        "w-full bg-black fixed left-0 top-[49%] -translate-y-1/2 text-white font-outfit px-[1.5vw]",
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
            The Goat Project
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
                  The GOAT Project
                </motion.span>
              </div>
            </div>
            <div className="cursor-pointer" onClick={onClose}>
              <AiOutlineClose className="text-white" size={30} />
            </div>
          </div>

          {/* Add your content here */}
          <motion.div
            initial={{ filter: "blur(40px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pt-[10px] text-white font-semibold text-[20px] flex flex-col gap-3"
          >
            <img
              src="https://images.pexels.com/photos/1251720/pexels-photo-1251720.jpeg?cs=srgb&dl=pexels-andreea-ch-371539-1251720.jpg&fm=jpg"
              className="w-full h-[50vh] object-center object-cover"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              semper quam porttitor lorem accumsan ullamcorper. Nam volutpat
              vitae lectus sed mattis. Curabitur faucibus nisl vel fermentum
              dignissim. Proin vitae erat ligula. Sed fringilla ullamcorper ex
              vel ullamcorper. Maecenas ut quam at tortor mattis placerat eu
              eget ipsum. Proin vitae erat ligula. Sed fringilla ullamcorper ex
              vel ullamcorper. Maecenas ut quam at tortor mattis placerat eu
              eget
            </p>
            <div className="flex items center">
              <div className="w-1/3 aspect-[1.5] relative">
                <img
                  className="w-[50%] border-2 border-white/40 aspect-square object-center object-cover absolute top-0 left-0"
                  src="https://c1.wallpaperflare.com/preview/69/659/683/statue-marble-classic-sculpture.jpg"
                />
                <img
                  className="w-[50%] border-2 border-white/40 aspect-square object-center object-cover absolute bottom-0 right-[30px]"
                  src="https://i.imgur.com/uwiIAfh.jpg"
                />
              </div>
              <div className="w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                semper quam porttitor lorem accumsan ullamcorper. Nam volutpat
                vitae lectus sed mattis. Curabitur faucibus nisl vel fermentum
                dignissim. Proin vitae erat ligula. Sed fringilla ullamcorper ex
                vel ullamcorper. Maecenas ut quam at tortor mattis placerat eu
                eget ipsum. Sed ultrices, velit ut dapibus condimentum, mauris
                justo porttitor est, in ultricies ante nulla eu quam. Nullam sit
                amet maximus tortor. Donec non est enim. Duis id ex accumsan,
                iaculis sapien quis, malesuada velit. Morbi ut augue sit amet
                massa dictum tempus. Donec quis efficitur turpis. Phasellus
                semper massa orci, at luctus quam lacinia nec. Morbi facilisis
                vitae felis vel dapibus. Duis in tortor ligula. Vestibulum
                ornare, metus at volutpat sollicitudin, mauris neque accumsan
                metus, sit amet posuere libero tortor quis justo. Donec non est
                enim. Duis id ex accumsan, iaculis sapien quis, malesuada velit.
                Morbi ut augue sit amet massa dictum tempus. Donec quis
                efficitur turpis. Phasellus semper massa orci, at luctus quam
                lacinia nec. Morbi facilisis vitae felis vel dapibus. Duis in
                tortor ligula. Vestibulum ornare, metus at volutpat
                sollicitudin, mauris neque accumsan metus, sit amet posuere
                libero tortor quis justo. Vestibulum ornare, metus at volutpat
                sollicitudin, mauris neque accumsan metus, sit amet posuere
                libero tortor quis justo. Donec non est enim. Duis id ex
                accumsan, iaculis sapien quis, malesuada velit. Morbi ut augue
                sit amet massa dictum tempus. Donec quis efficitur turpis.
                Phasellus semper massa orci, at luctus quam lacinia nec. Morbi
                facilisis vitae felis vel dapibus. Duis in tortor ligula.
                Vestibulum ornare, metus at volutpat sollicitudin, mauris neque
                accumsan metus, sit amet posuere libero tortor quis justo.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
