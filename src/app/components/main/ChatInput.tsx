import { PiLightningAFill } from "react-icons/pi";
import ReactTextareaAutosize from "react-textarea-autosize";
import Button from "../button/Button";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export default function ChatInput() {
  const [messageText, setMessageText] = useState("");
  function send() {}
  return (
    <div className="bottom-0 w-full bg-white dark:bg-[#262626]">
      <div className="w-full flex-col max-w-3xl mx-auto flex items-center px-4">
        <div
          className="flex items-center w-full gap-4 p-2 text-base 
          border border-black/10
          dark:border-gray-800 bg-white dark:bg-[#2F2F2F]
          rounded-3xl"
        >
          <div className="flex items-center text-lg transition-colors duration-300">
            <PiLightningAFill />
          </div>
          <ReactTextareaAutosize
            className="flex-1 resize-none bg-transparent outline-none transition-colors duration-300"
            placeholder="给 ChatAI 发送一条消息"
            rows={1}
            maxRows={5}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
          />
          <Button
            icon={FiSend}
            variant="default"
            className="rounded-full bg-transparent dark:bg-transparent transition-colors duration-300"
            onClick={send}
          />
        </div>
        <footer
          className="flex flex-row items-center text-xs mt-2 mb-1 gap-10
        text-gray-800 dark:text-gray-400 
        transition-colors duration-300"
        >
          <p>ChatAI 也可能会犯错，请核查重要的信息。</p>
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              className="hover:text-blue-400 hover:underline"
              target="_blank"
              href="https://blog.kangyaocoding.top"
            >
              {" "}
              哈利の小屋
            </a>{" "}
            <a
              className="hover:text-green-500 hover:underline"
              href="mailto:kaiouken@foxmail.com"
            >
              kaiouken@foxmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
