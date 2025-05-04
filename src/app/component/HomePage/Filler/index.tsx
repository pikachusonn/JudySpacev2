/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
const Filler = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="w-full h-[100vh] fixed top-0 flex-col flex justify-center items-center">
        <img
          src="https://i.pinimg.com/736x/e8/24/40/e824407bf5b8110429762ad625b461e3.jpg"
          alt="cat laughing"
          className="w-[300px] h-auto"
        />
        <span className="font-outfit text-white">Ban da bi con meo</span>
      </div>
    </div>
  );
};

export default Filler;
