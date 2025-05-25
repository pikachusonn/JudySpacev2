/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
const ProjectFourth = () => {
  return (
    <motion.div
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-[10px] text-white text-[20px] flex flex-col gap-3"
    >
      <img
        src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p4/sim-saymee-la-gi-5.jpg"
        className="w-full h-[60vh] object-center object-cover"
      />
      <p>
        During the launch of Saymee, a new SIM card product by Mobifone, I
        worked as part of the marketing team at OSP Group to execute an
        integrated marketing and sales campaign across multiple digital
        platforms. Our strategy spanned both{" "}
        <span className="font-bold text-tertiary/80">brand-building</span> and
        <span className="font-bold text-tertiary/80">sales conversion</span>,
        covering social media, Shopee, and TikTok Shop.
      </p>
      <div className="flex items-start gap-3 pt-3">
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p4/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-22+lu%CC%81c+14.02.17.png"
          className="w-[20%] aspect-square object-center object-cover"
        />
        <div>
          I played a role in{" "}
          <span className="font-bold text-tertiary/80">content creation</span>{" "}
          for the official Saymee fanpage, producing engaging and
          product-focused social media materials aimed at young, tech-savvy
          audiences. Simultaneously, I developed and managed content for a
          network of satellite TikTok channels, designed to organically drive
          brand awareness and lead potential customers toward the product
          purchase funnel. <br />
          My responsibilities included: <br />
          <ul className="pl-5 my-5">
            <li>
              - Writing copy and planning visuals tailored to each platform’s
              audience,{" "}
            </li>
            <li>
              - Tracking campaign performance and adjusting content strategies
              accordingly,
            </li>
            <li>
              - Collaborating with designers and media buyers to ensure
              consistent messaging across paid and organic channels.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start pl-[10vw] gap-3">
        <img
          src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/p4/319522961_867731734373217_6685245858702376908_n-800x800.jpg"
          className="w-[20%] aspect-square object-center object-cover"
        />
        <div>
          This project strengthened my ability to create sales-driven content,
          especially in telecommunications and e-commerce ecosystems, and to
          synchronize efforts across multiple channels to drive both visibility
          and transactions for a new product launch.
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFourth;
