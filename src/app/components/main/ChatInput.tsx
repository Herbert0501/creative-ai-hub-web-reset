import { PiLightningAFill } from "react-icons/pi";
import ReactTextareaAutosize from "react-textarea-autosize";
import Button from "../button/Button";
import { FiSend } from "react-icons/fi";

export default function ChatInput() {
  return (
    <div className="absolute bottom-2 w-full flex justify-center">
      <div className="w-full flex-col max-w-3xl mx-auto flex items-center px-4 space-y-4">
        <div
          className="flex items-center w-full gap-3 p-2 text-base 
          border border-black/10
          dark:border-gray-800 bg-white dark:bg-[#2F2F2F]
          rounded-full"
        >
          <div className="flex items-center text-lg transition-colors duration-300">
            <PiLightningAFill />
          </div>
          <ReactTextareaAutosize
            className="flex-1 resize-none bg-transparent outline-none transition-colors duration-300"
            placeholder="给 ChatAI 发送一条消息"
            rows={1}
            maxRows={5}
          />
          <Button icon={FiSend} variant="default" className="rounded-full bg-transparent dark:bg-transparent transition-colors duration-300" />
        </div>
        <footer className="flex flex-col items-center text-xs m-0 p-0 text-gray-800 dark:text-gray-400 transition-colors duration-300 space-y-2">
            <p>ChatAI 也可能会犯错，请核查重要的信息。</p>
            <p>© 2024 kaiouken@foxmail.com</p>
        </footer>
      </div>
    </div>
  );
}
