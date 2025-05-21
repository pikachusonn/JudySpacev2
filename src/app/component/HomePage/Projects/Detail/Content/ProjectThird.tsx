/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const ProjectThird = () => {
  return (
    <motion.div
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-[10px] text-white text-[20px] flex flex-col gap-3"
    >
      <img
        src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/492409438_1507979240543036_1126447948304098445_n.jpg"
        className="w-full h-[60vh] object-center object-cover"
      />
      <p>
        As a freelance Account Manager and Social Content Creator for
        Carcenter.vn, I <span className="font-bold text-tertiary/80">led</span>{" "}
        a 6-member creative team in{" "}
        <span className="font-bold text-tertiary/80">
          developing and executing
        </span>{" "}
        the brand’s digital presence on both Facebook and TikTok. My key
        responsibilities included{" "}
        <span className="font-bold text-tertiary/80">planning</span> the monthly
        content calendar, coordinating production workflows, and{" "}
        <span className="font-bold text-tertiary/80">overseeing</span> the
        progress of social media strategies from ideation to execution.
      </p>
      <div className="flex items-start gap-3 pt-3">
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/492506971_1508525703821723_4045934329071101982_n.jpg"
          className="w-[20%] aspect-square object-center object-cover"
        />
        <div>
          Notably, I initiated and edited the New Year campaign, crafting
          creative angles tailored to the automotive industry, which
          significantly reflected a{" "}
          <span className="font-bold text-tertiary/80">
            successful push in awareness and potential conversions
          </span>
          . Under my management, the Facebook page achieved remarkable growth:{" "}
          <span className="font-bold text-tertiary/80">79.3K</span> video views
          and <span className="font-bold text-tertiary/80">24K</span> organic
          reach in just two months (as shown in the dashboard data), a{" "}
          <span className="font-bold text-tertiary/80">36.5% increase</span> in
          follower growth rate, with a balanced ratio of new followers and
          return viewers.
        </div>
      </div>
      <div className="flex items-start pl-[10vw] gap-3">
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/volvo.png"
          className="w-[20%] aspect-square object-center object-cover"
        />
        <div>
          This project demonstrated my ability to{" "}
          <span className="font-bold text-tertiary/80">
            strategically manage teams, create results-driven content
          </span>
          , and analyze data to fine-tune communication efforts. It also
          sharpened my skills in handling multi-platform campaigns and
          navigating content trends in the{" "}
          <span className="font-bold text-tertiary/80">automotive sector</span>.
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectThird;
