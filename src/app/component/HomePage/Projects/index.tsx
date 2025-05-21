/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { IoIosReturnRight } from "react-icons/io";
import Preview from "./Preview";
import { useState } from "react";
import ProjectDetail from "./Detail";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectItem = ({ project, mouseEnter, mouseLeave }: any) => {
  return (
    <div
      key={project?.id}
      className={classNames(
        "flex justify-between items-center relative cursor-pointer border-b-2 border-black/20 py-2",
        styles.projectItem
      )}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <motion.span
        className="text-[48px] font-medium relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {project?.name}
      </motion.span>
      <div className="flex flex-col items-end relative">
        <motion.span>{project?.title}</motion.span>
        <span className="text-black/40">{project?.skills}</span>
      </div>
    </div>
  );
};
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "The Marketer ",
      skills: "#marketing #branding #contentcreator", // Updated to skills
      title: "Founder - Content Creator",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-19+lu%CC%81c+13.34.28.png",
      ],
    },
    {
      id: 2,
      name: "TH Group's 1,000 School Toilets Initiative",
      skills: "#branding #journalism", // Updated to skills
      title: "Public Relation",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/channels4_profile.jpg",
      ],
    },
    {
      id: 3,
      name: "Car Center",
      skills: "#projectmangement #contentcreator", // Updated to skills
      title: "Account Manager - Social Content Creator",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/jdsp/468964516_1382350256439269_3437765367792369130_n.jpg",
      ],
    },
    {
      id: 4,
      name: "MobiFone's Saymee",
      skills: "#contentcreator ", // Updated to skills
      title: "Social Content Creator",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/jdsp/485063030_651832077779131_4067324698349965018_n.jpg",
      ],
    },
    {
      id: 5,
      name: "MB Capital ",
      skills: "#projectmangement", // Updated to skills
      title: "Account",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/304323516_389444766710848_4735069115480213_n.png",
      ],
    },
    {
      id: 6,
      name: "Aeon Mall Hue's opening ceremony",
      skills: "#branding #booking #strategy", // Updated to skills
      title: "Account - Booking KOC/KOL",
      preview: [
        "https://pikachusonn.s3.ap-southeast-2.amazonaws.com/jdsp/maxresdefault+(1).jpg",
      ],
    },
  ];

  const [previewProject, setPreviewProject] = useState(null);
  const [detail, setDetail] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setPreview = (set: boolean, project?: any) => {
    if (set) {
      setPreviewProject(project);
    } else {
      setPreviewProject(null);
    }
  };
  return (
    <>
      <div className="w-full relative z-10">
        <div
          className={classNames(
            "w-full flex flex-col justify-between h-screen bg-primary font-outfit px-[4vw] py-[1vw]",
            styles.background
          )}
        >
          <div className="pt-[10px] flex items-center gap-3">
            <div className="w-[25px] aspect-square bg-tertiary rounded-full"></div>
            <span className="font-bold text-[32px]">Featured Projects</span>
          </div>
          <div className="w-full pt-[10px]">
            {projects?.map((p) => (
              <div key={p?.id} onClick={() => setDetail(p)}>
                <ProjectItem
                  project={p}
                  mouseEnter={() => setPreview(true, p)}
                  mouseLeave={() => setPreview(false)}
                />
              </div>
            ))}
          </div>
          <button
            className={classNames(
              "cursor-pointer relative border border-black rounded-full mt-5 overflow-hidden w-fit",
              styles.baseButton
            )}
          >
            <div
              className={classNames(
                "inset-0 absolute bg-black z-0",
                styles.blackButtonBg,
                styles.blackButtonBg1
              )}
            ></div>
            <div
              className={classNames(
                styles.btnText,
                "flex items-center px-10 py-2 gap-3 z-10 hover:text-white relative"
              )}
            >
              See more <IoIosReturnRight size={22} />
            </div>
          </button>
        </div>
      </div>
      {!!previewProject && <Preview project={previewProject} />}
      {!!detail && (
        <ProjectDetail
          onClose={() => {
            setDetail(null);
          }}
          projectName={detail?.name}
          projectId={detail?.id}
        />
      )}
    </>
  );
};

export default Projects;
