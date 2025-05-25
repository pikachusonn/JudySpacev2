import classNames from "classnames";
import styles from "./styles.module.scss";
import { motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
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
      time: "12/24-5/25",
      company: "iMedia Agency",
      title: "Marketing Team Lead",
    },
    {
      time: "3/24-9/24",
      company: "Tonkin Media",
      title: "Account Executive",
    },
    {
      time: "10/23-1/24",
      company: "TH Group",
      title: "PR Intern",
    },
    {
      time: "3/23-7/2023",
      company: "OSP Group",
      title: "Marketing Intern",
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
                className="font-outfit text-[3em] font-semibold pl-10 leading-[1]"
                viewport={{ once: true }}
              >
                International Communication graduate-to-be
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="font-outfit text-[3em] font-semibold pl-10 leading-[1]"
                viewport={{ once: true }}
              >
                with a strong academic foundation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="font-outfit text-[3em] font-semibold pl-10 leading-[1]"
                viewport={{ once: true }}
              >
                I view education as a launchpad for practical impact
              </motion.p>
              <div className={classNames(styles.contentWrapper)}>
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
                  <div className="overflow-hidden inline-block" key={index}>
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.1 * index,
                      }}
                      className="flex items-start gap-5 text-[20px]"
                    >
                      <span className="font-bold w-[120px] inline-block">
                        {we?.time}
                      </span>
                      <div className="h-[69px]">
                        <p className="font-bold">{we?.company}</p>
                        <div className="overflow-hidden">
                          <motion.p
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{
                              duration: 1.2,
                              ease: "easeOut",
                              delay: 0.8 + 0.3 * index,
                            }}
                            className="text-[#6D6D6D] font-semibold text-[16px]"
                          >
                            {we?.title}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="grow flex items-center flex-col justify-center gap-5">
            <img
              src={
                "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/quality_restoration_20250427081600207.JPG"
              }
              alt="judy"
              className="w-[261px] h-[343px] object-center object-cover rounded-md shadow-lg"
            />
            <p className="font-outfit w-[261px] text-[14px] font-medium italic">
              &quot;The mind is not a vessel to be filled, but a fire to be
              kindled&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[150vh]"></div>
    </div>
  );
};

export default About;
