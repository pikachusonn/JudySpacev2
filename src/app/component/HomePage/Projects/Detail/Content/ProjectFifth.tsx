/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import GLightbox from "glightbox";
import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
const ProjectFifth = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy(); // clean up on unmount
    };
  }, []);
  return (
    <motion.div
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-[10px] text-white text-[20px] flex flex-col gap-3"
    >
      <a
        href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/304323516_389444766710848_4735069115480213_n+(1).png"
        className="glightbox"
      >
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/304323516_389444766710848_4735069115480213_n+(1).png"
          className="w-full h-[50vh] object-center object-cover"
        />
      </a>
      <p>
        In this project, I took on the role of Account for MB Capital&apos;s
        integrated communication and design initiative. The project focused on
        elevating the brand’s professional image across social media, offline
        materials, and website.
      </p>
      <div className="flex items-start gap-3 pt-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p5/484089371_957133566608629_1575059650533053640_n.jpg"
          className="glightbox"
        >
          <img
            src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p5/484089371_957133566608629_1575059650533053640_n.jpg"
            className="w-[500px] aspect-square object-center object-cover"
          />
        </a>
        <div>
          My core responsibilities included: <br />
          <ul className="pl-5 my-5">
            <li>
              - Receiving and interpreting client briefs, ensuring all
              requirements were clearly translated into actionable tasks for the
              creative team.{" "}
            </li>
            <li>
              - Collaborating closely with designers, content creators, and
              developers to deliver cohesive and high-standard brand assets.
            </li>
            <li>
              - Proposing creative directions and supervising the execution of a
              range of materials, such as financial reports, product proposals,
              social posts, and corporate documents.
            </li>
            <li>
              - Providing feedback, aligning outputs with the client’s vision,
              and ensuring timely delivery.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start pl-[10vw] gap-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p5/484039674_957816409873678_4521265811802682602_n.jpg"
          className="glightbox"
        >
          <div className="w-[500px] aspect-square">
            <img
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p5/484039674_957816409873678_4521265811802682602_n.jpg"
              className="w-full h-full object-cover object-center rounded"
            />
          </div>
        </a>

        <div>
          Throughout the process, I acted as the bridge between MB Capital and
          our creative team, ensuring both strategy and execution aligned with
          the firm’s core values: credibility, clarity, and sophistication. The
          final assets contributed to strengthening MB Capital’s brand image in
          the eyes of partners and investors.
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFifth;
