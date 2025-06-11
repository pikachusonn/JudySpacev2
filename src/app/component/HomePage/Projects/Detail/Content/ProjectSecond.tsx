/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import GLightbox from "glightbox";
import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
const ProjectSecond = () => {
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
        href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/photo-1700144173265-1700144173742985490389.webp"
        className="glightbox"
      >
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/photo-1700144173265-1700144173742985490389.webp"
          className="w-full h-[60vh] object-center object-cover"
        />
      </a>
      <p>
        As a Public Relations Intern at TH Group, I had the opportunity to
        contribute directly to the impactful “1,000 School Toilets” project,
        which aims to improve hygiene and learning conditions for students in
        mountainous and underserved areas of Vietnam. TH Group was a key partner
        of the initiative, and I was honored to support the communication
        efforts surrounding the project.
      </p>
      <div className="flex items-start gap-3 pt-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/logo-thang3biengioi3-1646291753863277099545.webp"
          className="glightbox"
        >
          <div className="w-[250px] aspect-square">
            <img
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/logo-thang3biengioi3-1646291753863277099545.webp"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </a>
        <div>
          Together with the communications team, I traveled to Lạng Sơn Province
          to{" "}
          <span className="font-bold text-tertiary/80">
            collect media assets and firsthand information
          </span>{" "}
          for PR coverage. I was actively involved in{" "}
          <span className="font-bold text-tertiary/80">
            capturing event materials, conducting interviews, and supporting the
            documentation process
          </span>{" "}
          both during and after the event. These resources played a key role in
          shaping the project’s narrative across various media channels.
        </div>
      </div>
      <div className="flex items-start pl-[10vw] gap-3">
        <a
          href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/photo-1-16465559371371361507660.webp"
          className="glightbox"
        >
          <div className="w-[250px] aspect-square">
            <img
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/photo-1-16465559371371361507660.webp"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </a>
        <div>
          Back at the office, I{" "}
          <span className="font-bold text-tertiary/80">
            worked closely with senior team
          </span>{" "}
          members to{" "}
          <span className="font-bold text-tertiary/80">
            draft and edit PR articles
          </span>
          , ensuring the messaging was aligned with TH Group’s branding and the
          project’s social mission. The published content successfully raised
          awareness and{" "}
          <span className="font-bold text-tertiary/80">
            received positive feedback
          </span>{" "}
          from both the public and internal stakeholders. This project not only
          strengthened my media and content creation skills, but also deepened
          my understanding of CSR storytelling and how corporate communication
          can meaningfully support social development. It was a valuable
          experience where I contributed to a campaign that delivered real,
          tangible benefits to students in remote areas.
          <div className="pt-5">
            <span className="font-bold text-tertiary/80">
              Link PR article I support from drafting:
            </span>{" "}
            <a
              className="hover:text-tertiary/80 hover:underline"
              target="_blank"
              href="https://danviet.vn/quy-vi-tam-voc-viet-trien-khai-du-an-1000-nha-ve-sinh-truong-hoc-niem-vui-moi-o-nhung-ngoi-truong-vung-cao-20231116212604994-d1129620.html"
            >
              Quỹ Vì tầm vóc Việt triển khai dự án 1.000 nhà vệ sinh trường học
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSecond;
