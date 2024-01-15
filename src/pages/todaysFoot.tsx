import Image from "next/image";

const todaysFoot = () => {
  return (
    <>
      <div className="text-center">
        <p className="font-pupupu text-8xl">ほんじつ</p>
        <p className="font-pupupu text-8xl">のあし</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/スクリーンショット 2023-12-08 10.54 1.png"
          alt="あし"
          width="393"
          height="385"
        />
      </div>
      <a className="justify-center flex mt-[58.54px] " href="./selectPage">
        <p className="text-center font-pupupu bg-gray-400 p-10 w-80 rounded-md text-3xl">
          スタート
        </p>
      </a>
    </>
  );
};

export default todaysFoot;
