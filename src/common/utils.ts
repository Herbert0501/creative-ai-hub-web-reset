import { Chat } from "@/types/chat";

export function groupByDate(chatList: Chat[]) {
  const groupMap = new Map<string, Chat[]>();
  const now = new Date();

  chatList.forEach((item) => {
    const updatedAt = new Date(item.updatedAt);
    let key = "未知时间";
    const dayDiff = Math.floor(
      (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (dayDiff === 0 && now.getDate() === updatedAt.getDate()) {
      key = "今天";
    } else if (dayDiff === 1) {
      key = "昨天";
    } else if (dayDiff <= 3) {
      key = "最近三天";
    } else if (dayDiff <= 7) {
      key = "最近7天";
    } else if (dayDiff <= 31) {
      key = "最近一个月";
    } else if (now.getFullYear() === updatedAt.getFullYear()) {
      key = `${updatedAt.getMonth() + 1}月`;
    } else {
      key = `${updatedAt.getFullYear()}`;
    }

    if (groupMap.has(key)) {
      groupMap.get(key)?.push(item);
    } else {
      groupMap.set(key, [item]);
    }
  });

  groupMap.forEach((item) => {
    item.sort((a, b) => b.updatedAt - a.updatedAt);
  });

  const groupList = Array.from(groupMap).sort(([, list1], [, list2]) => {
    return (
      list2[list2.length - 1].updatedAt - list1[list1.length - 1].updatedAt
    );
  });

  return groupList;
}
