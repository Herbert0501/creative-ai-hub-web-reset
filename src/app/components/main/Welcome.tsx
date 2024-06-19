import Image from "next/image";

import MainIcon from "@/app/assets/images/chatgpt.svg";
import Example from "./Example";
import ChatInput from "./ChatInput";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-4xl space-y-8">
        <div className="flex w-20 -mt-16">
          <Image src={MainIcon} alt="Main" />
        </div>
      <Example />
      <ChatInput/>
    </div>
  );
}
