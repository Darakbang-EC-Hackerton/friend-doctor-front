import { useState } from "react";
import ListEmoji from "./listEmoji";

export default function TodayEmoji() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const onSelectEmoji = (emoji) => {
    setSelectedEmoji(emoji);
  };
  return (
    <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-md text-center">
      <h1 className="text-2xl font-semibold text-green-700 font-['Kantumruy Pro']">
        Hi, James
      </h1>
      <p className="text-gray-500 mt-2">How are you feeling today?</p>
      <ListEmoji selectedEmoji={selectedEmoji} onEmojiSelect={onSelectEmoji} />
    </div>
  );
}
