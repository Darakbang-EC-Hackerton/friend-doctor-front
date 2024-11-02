import { useEffect, useState } from "react";
import ListEmoji from "./listEmoji";
import { fetchTodayEmotion, postEmotion } from "../api/apiRequest";

export default function TodayEmoji() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loadEmotion = async () => {
      try {
        const response = await fetchTodayEmotion();
        const data = await response.result.type;
        setSelectedEmoji(data);
        const username = await response.result.username;
        setUsername(username);
      } catch (error) {
        console.error("Failed to load poems:", error);
      }
    };

    loadEmotion();
  }, []);

  const onSelectEmoji = (type: string) => {
    if (type !== selectedEmoji) {
      setSelectedEmoji(type);
      postEmotion(type);
    } else {
      setSelectedEmoji("");
      postEmotion("없음");
    }
  };
  return (
    <div className="w-full max-w-md bg-[#f8f8f8] rounded-xl py-6 shadow-md text-center font-[Pretendard-Regular]">
      <h1 className="text-3xl font-semibold text-green-700">Hi, {username}</h1>
      <p className="text-gray-500 mt-2">How are you feeling today?</p>
      <ListEmoji selectedEmoji={selectedEmoji} onEmojiSelect={onSelectEmoji} />
    </div>
  );
}
