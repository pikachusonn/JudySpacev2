import classNames from "classnames";
import styles from "./styles.module.scss";
import { motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Judy from "../../../../../public/Judy.jpeg";
/* eslint-disable @next/next/no-img-element */
const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [display, setDisplay] = useState<"education" | "workExperience">(
    "education"
  );

  const [reveal, setReveal] = useState<boolean>(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && !reveal) {
      setReveal(true);
    }

    if (latest > 0.6) {
      setDisplay("workExperience");
    } else {
      setDisplay("education");
    }
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  const workExperience = [
    {
      time: "Now",
      company: "Amela Corp",
      title: "Junior Frontend Developer",
    },
    {
      time: "2024",
      company: "Viettel Software Service",
      title: "Junior Frontend Developer",
    },
    {
      time: "2024",
      company: "Viettel Software Service",
      title: "Junior Frontend Developer",
    },
    {
      time: "2023",
      company: "Amela Corp",
      title: "Junior Frontend Developer",
    },
  ];
  return (
    <div
      className="w-full relative z-20"
      ref={ref}
      style={{ overflow: "visible" }}
    >
      <div className="h-screen w-full bg-primary sticky inset-0 z-10 flex items-center justify-center font-outfit">
        <div
          className={classNames(
            "absolute inset-0 bg-primary",
            styles.blobsContainer
          )}
          style={{ overflow: "visible" }}
        >
          <div className={styles.blobs}>
            <div className={classNames(styles.blob, styles.a)}></div>
            <div className={classNames(styles.blob, styles.b)}></div>
            <div className={classNames(styles.blob, styles.c)}></div>
          </div>
        </div>
        <div className="w-full h-full flex z-10">
          {display === "education" ? (
            <motion.div className="w-[70%] pt-10" style={{ opacity }}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="font-outfit text-[3.25em] font-semibold pl-10 leading-[0.8]"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="font-outfit text-[3.25em] font-semibold pl-10 leading-[0.8]"
                viewport={{ once: true }}
              >
                adipiscing elit. Maecenas massa turpis,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="font-outfit text-[3.25em] font-semibold pl-10 leading-[0.8]"
                viewport={{ once: true }}
              >
                convallis at dignissim sed.
              </motion.p>
              <div className="py-[10vh] pl-[7vw]">
                <span className="font-bold text-[24px] flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={reveal ? { scale: 1 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-tertiary w-[20px] aspect-square rounded-full"
                  ></motion.div>
                  <div className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ x: "-100%" }}
                      animate={reveal ? { x: "0%" } : {}}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="inline-block"
                    >
                      Education
                    </motion.span>
                  </div>
                </span>
                <div className="flex flex-col pt-5">
                  <div className="flex items-start">
                    <div className="w-[120px] font-bold pt-5 overflow-hidden">
                      <motion.span
                        className="inline-block"
                        initial={{ x: "-100%" }}
                        animate={reveal ? { x: "0%" } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        Expected July 2025
                      </motion.span>
                    </div>

                    <div className="flex flex-col gap-3 w-[70%] pl-5 pt-5 border-l border-black/30">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={reveal ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className="flex justify-between"
                      >
                        <div className="flex flex-col">
                          <p className="font-semibold">
                            DIPLOMATIC ACADEMY OF VIETNAM
                          </p>
                          <p>GPA: 3.82/4</p>
                        </div>
                        <div className="flex flex-col items-end font-bold">
                          <p>Ha noi</p>
                        </div>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={reveal ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        <span className="font-semibold">
                          Relevant Coursework:
                        </span>{" "}
                        International Communication; English for Special
                        Purpose; Multimedia; Public Relations; Branding;
                        Globalization; Event Organizing
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={reveal ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        Semi finalist, Euréka 2024 Scientific Research Award
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-[120px] font-bold pt-5 overflow-hidden">
                      <motion.span
                        className="inline-block"
                        initial={{ x: "-100%" }}
                        animate={reveal ? { x: "0%" } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        May 2021
                      </motion.span>
                    </div>
                    <div className="flex flex-col gap-3 w-[70%] pl-5 border-l border-black/30 pt-10 pb-5">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={reveal ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className="flex justify-between"
                      >
                        <div className="flex flex-col">
                          <p className="font-semibold">SON TAY HIGH SCHOOL</p>
                          <p>GPA: 9.2/10</p>
                        </div>
                        <div className="flex flex-col items-end font-bold">
                          <p>Ha noi</p>
                        </div>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={reveal ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        Third Prize, City-level English Excellence Competition
                        (Organized by Hanoi Department of Education and
                        Training), 2020 Head of Content: WEST - Son Tay English
                        Club, 2019 - 2020
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="px-[10vw] pt-[20vh] w-[70%]">
              <span className="font-bold text-[64px] flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-tertiary w-[25px] aspect-square rounded-full"
                ></motion.div>
                <div className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-block"
                  >
                    Work Experience
                  </motion.span>
                </div>
              </span>
              <div className="flex flex-col w-full overflow-y-hidden gap-5 pt-5 pl-8">
                {workExperience.map((we, index) => (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.2 * index,
                    }}
                    key={index}
                    className="flex items-start gap-5 text-[30px]"
                  >
                    <span className="font-bold w-[80px] inline-block">
                      {we?.time}
                    </span>
                    <div>
                      <p className="font-bold">{we?.company}</p>
                      <p className="text-[#6D6D6D] font-semibold text-[16px]">
                        {we?.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          <div className="grow flex items-center flex-col justify-center gap-5">
            <img
              src={Judy.src}
              alt="judy"
              className="w-[261px] h-[343px] object-center object-cover rounded-md shadow-lg"
            />
            <p className="font-outfit w-[261px] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              massa turpis, convallis at dignissim sed.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[150vh]"></div>
    </div>
  );
};

export default About;
