import { useEffect, useState } from "react";
import ListEmoji from "./listEmoji";
import { fetchTodayEmotion, postEmotion } from "../api/apiRequest";

export default function TodayEmoji() {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  useEffect(() => {
    const loadEmotion = async () => {
      try {
        const response = await fetchTodayEmotion();
        const data = await response.result.type;
        setSelectedEmoji(data);
      } catch (error) {
        console.error("Failed to load poems:", error);
      }
    };

    loadEmotion();
  }, []);

  const onSelectEmoji = (type: string) => {
    if (type !== selectedEmoji) {
      setSelectedEmoji(type);
      console.log(type);
      postEmotion(type);
    }
  };
  return (
    <div className="w-full max-w-md bg-white rounded-xl py-6 shadow-md text-center">
      <h1 className="text-2xl font-semibold text-green-700 font-['Kantumruy Pro']">
        Hi, James
      </h1>
      <p className="text-gray-500 mt-2">How are you feeling today?</p>
      <ListEmoji selectedEmoji={selectedEmoji} onEmojiSelect={onSelectEmoji} />
    </div>
  );
}
