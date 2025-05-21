/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
const ProjectOne = () => {
  return (
    <motion.div
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-[10px] text-white text-[20px] flex flex-col gap-3"
    >
      <img
        src="https://pikachusonn.s3.ap-southeast-2.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2025-05-19+lu%CC%81c+13.34.28.png"
        className="w-full h-[60vh] object-center object-cover"
      />
      <p>
        The Marketer is a personal TikTok project that I founded and developed
        with the goal of sharing practical marketing knowledge through a
        relatable and creative lens. After learning the fundamentals of TikTok
        content creation from mentors with real industry experience, I applied
        their insights to shape a strategy that fit both the platform and my
        personal style. This channel was born after several earlier attempts
        that didn’t succeed—but instead of giving up, I came back with a new
        approach that felt entirely “me.” The idea started out quite random, but
        it turned into something authentic and sustainable. I combined
        short-form storytelling, humor, and real-world marketing analysis to
        create content that resonated with a wide audience. Over time, The
        Marketer grew to over{" "}
        <span className="font-bold text-tertiary/80">50,000 followers</span>
        and accumulated more than{" "}
        <span className="font-bold text-tertiary/80">400,000 likes</span>. I was
        solely responsible for scripting and editing videos, focusing on
        marketing foundations and self-analyses of real brand case studies. I
        collaborated with well-known clients including Innisfree, Cocoon
        Vietnam, Lemonade, Generali, and LG, among others, creating tailored
        content that aligned with their branding while maintaining the channel&apos;s
        voice. As the channel expanded, I also guided and managed several
        contributors, ensuring consistent content quality and strategic
        alignment. The Marketer is more than a TikTok channel—it’s where I
        combined my communication skills, creativity, and self-taught marketing
        knowledge into a meaningful project that showcases both personal growth
        and professional impact.
      </p>
      {/* <div className="flex items center">
        <div className={classNames("w-1/3 relative", styles.iframeContainer)}>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@judythemarketer/video/7472748177418980616"
            data-video-id="7472748177418980616"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@judythemarketer"
                href="https://www.tiktok.com/@judythemarketer?refer=embed"
              >
                @judythemarketer
              </a>{" "}
              Một câu chuyện thành công rất đáng học hỏi từ Miu Miu - thương
              hiệu thời trang yêu thích của rất nhiều người.{" "}
              <a
                title="themarketer"
                target="_blank"
                href="https://www.tiktok.com/tag/themarketer?refer=embed"
              >
                #themarketer
              </a>{" "}
              <a
                title="LearnOnTikTok"
                target="_blank"
                href="https://www.tiktok.com/tag/LearnOnTikTok?refer=embed"
              >
                #LearnOnTikTok
              </a>{" "}
              <a
                title="marketing"
                target="_blank"
                href="https://www.tiktok.com/tag/marketing?refer=embed"
              >
                #marketing
              </a>{" "}
              <a
                title="fyp"
                target="_blank"
                href="https://www.tiktok.com/tag/fyp?refer=embed"
              >
                #fyp
              </a>{" "}
              <a
                title="xh"
                target="_blank"
                href="https://www.tiktok.com/tag/xh?refer=embed"
              >
                #xh
              </a>{" "}
              <a
                title="hoccungtiktok"
                target="_blank"
                href="https://www.tiktok.com/tag/hoccungtiktok?refer=embed"
              >
                #hoccungtiktok
              </a>{" "}
              <a
                target="_blank"
                title="♬ nhạc nền  - The Marketer"
                href="https://www.tiktok.com/music/nhạc-nền-The-Marketer-7472748288723831553?refer=embed"
              >
                ♬ nhạc nền - The Marketer
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
        <div className="w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          quam porttitor lorem accumsan ullamcorper. Nam volutpat vitae lectus
          sed mattis. Curabitur faucibus nisl vel fermentum dignissim. Proin
          vitae erat ligula. Sed fringilla ullamcorper ex vel ullamcorper.
          Maecenas ut quam at tortor mattis placerat eu eget ipsum. Sed
          ultrices, velit ut dapibus condimentum, mauris justo porttitor est, in
          ultricies ante nulla eu quam. Nullam sit amet maximus tortor. Donec
          non est enim. Duis id ex accumsan, iaculis sapien quis, malesuada
          velit. Morbi ut augue sit amet massa dictum tempus. Donec quis
          efficitur turpis. Phasellus semper massa orci, at luctus quam lacinia
          nec. Morbi facilisis vitae felis vel dapibus. Duis in tortor ligula.
          Vestibulum ornare, metus at volutpat sollicitudin, mauris neque
          accumsan metus, sit amet posuere libero tortor quis justo. Donec non
          est enim. Duis id ex accumsan, iaculis sapien quis, malesuada velit.
          Morbi ut augue sit amet massa dictum tempus. Donec quis efficitur
          turpis. Phasellus semper massa orci, at luctus quam lacinia nec. Morbi
          facilisis vitae felis vel dapibus. Duis in tortor ligula. Vestibulum
          ornare, metus at volutpat sollicitudin, mauris neque accumsan metus,
          sit amet posuere libero tortor quis justo. Vestibulum ornare, metus at
          volutpat sollicitudin, mauris neque accumsan metus, sit amet posuere
          libero tortor quis justo. Donec non est enim. Duis id ex accumsan,
          iaculis sapien quis, malesuada velit. Morbi ut augue sit amet massa
          dictum tempus. Donec quis efficitur turpis. Phasellus semper massa
          orci, at luctus quam lacinia nec. Morbi facilisis vitae felis vel
          dapibus. Duis in tortor ligula. Vestibulum ornare, metus at volutpat
          sollicitudin, mauris neque accumsan metus, sit amet posuere libero
          tortor quis justo.
        </div>
      </div> */}
    </motion.div>
  );
};

export default ProjectOne;
