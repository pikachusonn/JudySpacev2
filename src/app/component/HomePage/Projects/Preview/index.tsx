/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const Preview = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previews = project?.preview || [];

  useEffect(() => {
    if (previews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % previews.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [previews]);

  return (
    <div className="fixed top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2 z-50">
      {previews.length > 0 && (
        <img
          alt="preview"
          src={previews[currentIndex]}
          className="object-cover object-center rounded-lg border-2 border-black/50 w-[348px] h-[421px]"
        />
      )}
      <button className="text-white px-6 py-1 rounded-full border border-white absolute bottom-3 right-5 font-outfit font-medium">
        See Detail
      </button>
    </div>
  );
};

export default Preview;
