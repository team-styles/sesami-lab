import { AddButton } from "@/components/AddButton";
import { FriendCard } from "@/components/FriendCard";
import { Header } from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>おともだちちょう</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AddButton />
      <div className="flex justify-center bg-primaryGreen">
        <div className="grid grid-cols-4 gap-10">
          <FriendCard name="今永ゆうと" />
          <FriendCard name="岩本はるき" />
          <FriendCard name="今永ゆうと" />
          <FriendCard name="岩本はるき" />
          <FriendCard name="今永ゆうと" />
          <FriendCard name="岩本はるき" />
          <FriendCard name="今永ゆうと" />
          <FriendCard name="岩本はるき" />
        </div>
      </div>
    </>
  );
}
