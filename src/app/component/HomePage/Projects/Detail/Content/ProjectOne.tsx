/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { useEffect } from "react";
const ProjectOne = () => {
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
        href="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-19+lu%CC%81c+13.34.28.png"
        className="glightbox"
      >
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-19+lu%CC%81c+13.34.28.png"
          className="w-full h-[60vh] object-center object-cover"
        />
      </a>

      <div className="flex p-5 items-start">
        <video
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/iLoveTik.com_TikTok_Media_001_e1d3d3a90a5b8bc82d0f78e996a2ffa8.mp4"
          controls
          width="250"
        >
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col p-5">
          <p>
            The Marketer is a personal TikTok project that I founded and
            developed with the goal of sharing practical marketing knowledge
            through a relatable and creative lens. After learning the
            fundamentals of TikTok content creation from mentors with real
            industry experience, I applied their insights to shape a strategy
            that fit both the platform and my personal style.
          </p>
          <div className="flex pt-10">
            <video
              src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/iLoveTik.com_TikTok_Media_001_dd5bc5fe701a6a705add72e20d8190e1.mp4"
              controls
              width="250"
            >
              Your browser does not support the video tag.
            </video>
            <p className="p-5">
              This channel was born after several earlier attempts that didn’t
              succeed—but instead of giving up, I came back with a new approach
              that felt entirely “me.” The idea started out quite random, but it
              turned into something authentic and sustainable. I combined
              short-form storytelling, humor, and real-world marketing analysis
              to create content that resonated with a wide audience. Over time,
              The Marketer grew to over 50,000 followers and accumulated more
              than 400,000 likes. I was solely responsible for scripting and
              editing videos, focusing on marketing foundations and
              self-analyses of real brand case studies. I collaborated with
              well-known clients including Innisfree, Cocoon Vietnam, Lemonade,
              Generali, and LG, among others, creating tailored content that
              aligned with their branding while maintaining the channel&apos;s
              voice.
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-5">
        <video
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/iLoveTik.com_TikTok_Media_001_24e2a98670a3d71926274dab91228e12.mp4"
          width={250}
          controls
        ></video>
        <p className="p-5">
          As the channel expanded, I also guided and managed several
          contributors, ensuring consistent content quality and strategic
          alignment. The Marketer is more than a TikTok channel—it’s where I
          combined my communication skills, creativity, and self-taught
          marketing knowledge into a meaningful project that showcases both
          personal growth and professional impact.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectOne;
