import Image from "next/image";
import { FC } from "react";

type FriendCardProps = {
  name: string;
  image?: string;
};

export const FriendCard: FC<FriendCardProps> = ({
  name,
  image = "/friendsampleImanaga.png",
}) => {
  return (
    <>
      <div className="border-4 rounded-3xl border-black w-[200px] h-[250px]">
        <div className="rounded-full overflow-hidden justify-center flex">
          <Image
            src={image}
            alt="友達画像サンプル"
            width={96} // アスペクト比を維持するための幅
            height={96} // アスペクト比を維持するための高さ
          />
        </div>
        <p className="text-center mt-3">{name}</p>
      </div>
    </>
  );
};
