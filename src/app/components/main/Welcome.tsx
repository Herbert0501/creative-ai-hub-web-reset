import Image from "next/image";

import MainIcon from "@/app/assets/images/chatgpt.svg";
import Example from "./Example";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-4xl space-y-8">
      <div className="flex w-20 h-20">
        <Image src={MainIcon} alt="Main" />
      </div>
      <Example />
      <div>
        <div className="w-full px-8 py-4 bg-gray-100 dark:bg-neutral-700 rounded-lg shadow-md">
          输入栏
        </div>
        <div>ChatAI 也可能会犯错。请核查重要信息。</div>
      </div>
    </div>
  );
}
