import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mt-[41px]">
        <p className="font-pupupu text-8xl">りょこう</p>
        <p className="font-pupupu text-7xl">ひつじゅひん</p>
      </div>
      <div className="justify-center flex mt-[17px]">
        <Image src="/logo.png" alt="バックパック" width="393" height="385" />
      </div>

      <a className="justify-center flex mt-[58.54px] " href="./selectPage">
        <p className="text-center font-pupupu bg-gray-400 p-10 w-80 rounded-md text-3xl">
          にもつをとりだす
        </p>
      </a>
    </>
  );
}
