import classNames from "classnames";
import styles from "./styles.module.scss";
/* eslint-disable @next/next/no-img-element */
const About = () => {
  const skillSet = [
    "Marketing",
    "Marketing",
    "Marketing",
    "Marketing",
    "Marketing",
  ];
  return (
    <div className="h-screen w-full bg-primary  relative z-10 flex items-center justify-center">
      <div className={classNames("absolute inset-0 bg-primary", styles.blobsContainer)}>
        <div className={styles.blobs}>
          <div className={classNames(styles.blob, styles.a)}></div>
          <div className={classNames(styles.blob, styles.b)}></div>
          <div className={classNames(styles.blob, styles.c)}></div>
        </div>
      </div>
      <div className="w-full h-full flex z-10">
        <div className="w-[70%]">
          <p className="font-outfit text-[4.25em] leading-none font-semibold pt-10 pl-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            massa turpis, convallis at dignissim sed.
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
        </div>
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
  );
};

export default About;
