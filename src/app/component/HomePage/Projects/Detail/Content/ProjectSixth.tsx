/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import GLightbox from "glightbox";
import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
const ProjectSixth = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lightbox = GLightbox({ selector: ".glightbox" });

      return () => {
        lightbox.destroy();
      };
    }
  }, []);
  return (
    <motion.div
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-[10px] text-white text-[20px] flex flex-col gap-3"
    >
      <a
        href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/Opening-Hue-6-1-scaled.jpg"
        className="glightbox"
      >
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/Opening-Hue-6-1-scaled.jpg"
          className="w-full h-[60vh] object-bottom object-cover"
        />
      </a>
      <p>
        As Account Executive in charge of KOL/KOC Booking, I played a key role
        in the communication campaign for the grand opening of AEON Mall Huế —
        one of the most anticipated commercial projects in Central Vietnam.
      </p>
      <div className="flex items-start gap-3 pt-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/pb-openning-1-1-1.jpg"
          className="glightbox"
        >
          <div className="w-[250px] aspect-square">
            <img
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/pb-openning-1-1-1.jpg"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </a>
        <div>
          Collaborating with my team, I contributed to: <br />
          <ul className="pl-5 my-5">
            <li>
              - <span className="font-bold text-tertiary/80">Planning</span> and
              <span className="font-bold text-tertiary/80">executing</span> the
              influencer marketing strategy for the opening week.
            </li>
            <li>
              -{" "}
              <span className="font-bold text-tertiary/80">
                Sourcing, booking, and coordinating
              </span>{" "}
              with KOLs/KOCs to attend and review the grand opening experience
              on-site.
            </li>
            <li>
              - Joining the{" "}
              <span className="font-bold text-tertiary/80">execution</span> of
              the TikTok challenge under the creative theme “Gõ cửa Huế thương –
              AEON Mall xin chào”, aiming to localize the brand and engage
              younger audiences in Huế.
            </li>
            <li>
              - <span className="font-bold text-tertiary/80">Ensuring</span> the
              influencers’ content aligned with AEON’s brand message, and
              managing deliverables across multiple platforms.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start pl-[10vw] gap-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-22+lu%CC%81c+14.23.53.png"
          className="glightbox"
        >
          <div className="w-[250px] aspect-square">
            <img
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p6/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-22+lu%CC%81c+14.23.53.png"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </a>
        <div>
          The campaign received high engagement and positive sentiment from the
          public, successfully boosting brand awareness, foot traffic, and
          online visibility during the launch phase. My role as a connector
          between influencers and brand stakeholders helped ensure smooth
          execution and impactful results.
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSixth;
