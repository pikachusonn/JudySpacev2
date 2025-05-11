import classNames from "classnames";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { IoIosReturnRight } from "react-icons/io";
import Preview from "./Preview";
import { useState } from "react";
const ProjectItem = ({ project, mouseEnter, mouseLeave }) => {
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
        <motion.span>{project?.company}</motion.span>
        <span className="text-black/40">{project?.title}</span>
      </div>
    </div>
  );
};
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "TH - True Milk's Project",
      company: "TH - True Milk",
      title: "Marketing executive",
      preview: [
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
      ],
    },
    {
      id: 2,
      name: "Vinamilk Campaign",
      company: "Vinamilk",
      title: "Brand Strategist",
      preview: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
      ],
    },
    {
      id: 3,
      name: "Nestlé Vietnam Outreach",
      company: "Nestlé Vietnam",
      title: "PR Coordinator",
      preview: [
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
      ],
    },
    {
      id: 4,
      name: "Unilever Eco Campaign",
      company: "Unilever",
      title: "Digital Marketing Specialist",
      preview: [
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
      ],
    },
    {
      id: 5,
      name: "Pepsi Summer Blast",
      company: "PepsiCo",
      title: "Event Marketing Manager",
      preview: [
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
      ],
    },
    {
      id: 6,
      name: "Heineken Green Future",
      company: "Heineken",
      title: "Campaign Lead",
      preview: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
        "https://cdnphoto.dantri.com.vn/WyLTtMT1TlAqL4JZGsl6KaMf264=/thumb_w/960/2020/02/25/7-1582641114974.jpg",
        "https://adminvov1.vov.gov.vn/UploadImages/vov1/2019/thang_8/16-Billie-Eilish.jpg?w=1000",
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/image_7.jpeg",
      ],
    },
  ];

  const [previewProject, setPreviewProject] = useState(null);
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
      <div className="w-full relative z-20">
        <div
          className={classNames(
            "w-full h-screen bg-primary font-outfit px-[4vw]",
            styles.background
          )}
        >
          <div className="pt-[10px] flex items-center gap-3">
            <div className="w-[25px] aspect-square bg-tertiary rounded-full"></div>
            <span className="font-bold text-[32px]">Featured Projects</span>
          </div>
          <div className="w-full pt-[10px]">
            {projects?.map((p) => (
              <ProjectItem
                project={p}
                key={p?.id}
                mouseEnter={() => setPreview(true, p)}
                mouseLeave={() => setPreview(false)}
              />
            ))}
          </div>
          <button
            className={classNames(
              "cursor-pointer relative border border-black rounded-full mt-5 overflow-hidden",
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
    </>
  );
};

export default Projects;
