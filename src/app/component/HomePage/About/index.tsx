import classNames from "classnames";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
const About = () => {
  const skillSet = [
    "Marketing",
    "Marketing",
    "Marketing",
    "Marketing",
    "Marketing",
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [display, setDisplay] = useState<"education" | "workExperience">(
    "education"
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setDisplay("workExperience");
    } else {
      setDisplay("education");
    }
  });

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
    <div className="w-full relative z-20" ref={ref}>
      <div className="h-screen w-full bg-primary sticky inset-0 z-10 flex items-center justify-center font-outfit">
        <div
          className={classNames(
            "absolute inset-0 bg-primary",
            styles.blobsContainer
          )}
        >
          <div className={styles.blobs}>
            <div className={classNames(styles.blob, styles.a)}></div>
            <div className={classNames(styles.blob, styles.b)}></div>
            <div className={classNames(styles.blob, styles.c)}></div>
          </div>
        </div>
        <div className="w-full h-full flex z-10">
          {display === "education" ? (
            <div className="w-[70%]">
              <p className="font-outfit text-[3.25em] leading-none font-semibold pt-10 pl-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas massa turpis, convallis at dignissim sed.
              </p>
              <div className="w-[60%] flex flex-wrap px-10 gap-2 justify-center mt-5">
                {skillSet.map((s: string, index: number) => (
                  <span
                    key={index}
                    className="border border-neutral-600 rounded-full px-10 py-1 text-[20px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="p-10">
                <span className="font-bold text-[24px] flex items-center gap-3">
                  <div className="bg-tertiary w-[20px] aspect-square rounded-full"></div>
                  Education
                </span>
                <div className="flex w-full overflow-y-hidden gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <p className="font-semibold">
                          DIPLOMATIC ACADEMY OF VIETNAM
                        </p>
                        <p>GPA: 3.82/4</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p>Ha noi</p>
                        <p>Expected July 2025</p>
                      </div>
                    </div>
                    <p>
                      <span className="font-semibold">
                        Relevant Coursework:
                      </span>{" "}
                      International Communication; English for Special Purpose;
                      Multimedia; Public Relations; Branding; Globalization;
                      Event Organizing
                    </p>
                    <p>Semi finalist, Euréka 2024 Scientific Research Award</p>
                    <p>
                      Journal article (under peer review) – &quot;Framing the
                      Perception of China&apos;s Foreign Propaganda on the QUAD
                      (2020–2022)&quot;,
                      <em>Revista CIDOB d&apos;Afers Internacionals</em>,
                      Special Issue 141: Asia in Transition: Beyond Geopolitical
                      Competition.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between w-[50%]">
                      <div className="flex flex-col">
                        <p className="font-semibold">SON TAY HIGH SCHOOL</p>
                        <p>GPA: 9.2/10</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p>Ha noi</p>
                        <p>May 2021</p>
                      </div>
                    </div>
                    <p className="w-[50%]">
                      Third Prize, City-level English Excellence Competition
                      (Organized by Hanoi Department of Education and Training),
                      2020 Head of Content: WEST - Son Tay English Club, 2019 -
                      2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-[10vw] pt-[20vh] w-[70%]">
              <span className="font-bold text-[64px] flex items-center gap-3">
                <div className="bg-tertiary w-[25px] aspect-square rounded-full"></div>
                Work Experience
              </span>
              <div className="flex flex-col w-full overflow-y-hidden gap-5 pt-5 pl-8">
                {workExperience.map((we, index) => (
                  <div
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
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="grow flex items-center flex-col justify-center gap-5">
            <img
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/484011056_2574268962920142_6488150589886580333_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHXWqV_p-zeJAwVvkFROYv1xkT13s5mIx3GRPXezmYjHTVM1l0SGM8hLYCI0ytiJgcenp_NGoR5xr83YFcrj95g&_nc_ohc=vkcFTWPaMKIQ7kNvwGsL03k&_nc_oc=AdmxEpJE4fRZcw5QWS8QY5pQrVgHAcQs6kyEnZxaaIgt_BwmaLv-NM4sHMmuDKisbLQ&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=hX0MHKSqqtHG94asZpqi4Q&oh=00_AfG1-g5u6Mo1CPpWVv3iMzBLajDQ7wBwoqN7fAG9kd96lQ&oe=681E308F"
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
