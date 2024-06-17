import { groupByDate } from "@/common/utils";
import { Chat } from "@/types/chat";
import { useMemo, useState } from "react";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const now = new Date().getTime();
  const yesterday = now - 24 * 60 * 60 * 1000;
  const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;
  const [chatList, setChatList] = useState<Chat[]>([
    { id: "1", title: "如何学习Java", updatedAt: now },
    { id: "2", title: "如何学习Java", updatedAt: now },
    { id: "3", title: "程序员如何学习才能有效的避免掉头发", updatedAt: now },
    {
      id: "4",
      title: "如何学习Java和Golang语言,并制作一个高并发系统",
      updatedAt: yesterday,
    },
    {
      id: "5",
      title: "如何学习Java和Golang语言,并制作一个高并发系统",
      updatedAt: yesterday,
    },
    {
      id: "6",
      title: "如何学习Java和Golang语言,并制作一个高并发系统",
      updatedAt: yesterday,
    },
    {
      id: "7",
      title: "如何学习Python和Django框架,开发一个电商网站",
      updatedAt: threeDaysAgo,
    },
    {
      id: "8",
      title: "如何学习React和Vue,制作一个单页面应用程序",
      updatedAt: threeDaysAgo,
    },
    {
      id: "9",
      title: "如何学习Node.js和Express,开发一个RESTful API",
      updatedAt: threeDaysAgo,
    },
    { id: "10", title: "如何学习数据结构和算法,提高编程能力", updatedAt: now },
    {
      id: "11",
      title: "如何学习MySQL和MongoDB,管理和存储数据",
      updatedAt: yesterday,
    },
    {
      id: "12",
      title: "如何学习Linux和Shell脚本,管理服务器和自动化任务",
      updatedAt: threeDaysAgo,
    },
    {
      id: "13",
      title: "如何学习Git和GitHub,管理代码版本和协作开发",
      updatedAt: now,
    },
    {
      id: "14",
      title: "如何学习Docker和Kubernetes,容器化应用程序和管理集群",
      updatedAt: yesterday,
    },
    {
      id: "15",
      title: "如何学习AWS和Azure,云计算和基础设施即服务",
      updatedAt: threeDaysAgo,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat>();
  const groupList = useMemo(() => {
    return groupByDate(chatList);
  }, [chatList]);

  return (
    <div className="flex-1 mb-[4.222rem] mt-3 ml-3 flex flex-col overflow-y-auto">
      {groupList.map(([date, list]) => {
        return (
          <div key={date}>
            <div className="sticky top-0 z-10 p-2 text-sm font-bold cursor-default bg-neutral-50 dark:bg-neutral-900 text-gray-600 dark:text-gray-400">
              {date}
            </div>
            <ul className="mb-3">
              {list.map((item) => {
                const isSelected = selectedChat?.id === item.id;
                return (
                  <ChatItem
                    key={item.id}
                    item={item}
                    selected={isSelected}
                    onSelected={(chat) => setSelectedChat(chat)}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
