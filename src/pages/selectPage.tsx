import Image from "next/image";

const selectPage = () => {
  return (
    <>
      <p className="font-pupupu text-8xl text-center mt-[64px]">なにを</p>
      <div className="flex justify-center mt-[54px] relative">
        <Image
          src="/スクリーンショット 2023-12-07 10.28 1.png"
          alt="開いたバックパック"
          width="393"
          height="385"
        />
        <a
          href="./todaysFoot"
          className=" text-center absolute top-2/3 left-2/5 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold bg-gray-50 bg-opacity-50 p-2 w-36 text-2xl"
        >
          本日の足
        </a>
      </div>
      <p className="font-pupupu text-7xl text-center mt-[53.54px]">
        とりだしますか
      </p>
    </>
  );
};

export default selectPage;
