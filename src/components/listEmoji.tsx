import Veryhappy from "../assets/SVG/veryhappy_uncolor.svg";
import Happy from "../assets/SVG/happy_uncolor.svg";
import Mid from "../assets/SVG/mid_uncolor.svg";
import Sad from "../assets/SVG/sad_uncolor.svg";
import Angry from "../assets/SVG/angry_uncolor.svg";
import ColVeryhappy from "../assets/SVG/veryhappy_color.svg";
import ColHappy from "../assets/SVG/happy_color.svg";
import ColMid from "../assets/SVG/mid_color.svg";
import ColSad from "../assets/SVG/sad_color.svg";
import ColAngry from "../assets/SVG/angry_color.svg";

type Emoji = {
  uncolored: string;
  colored: string;
  type: string;
};

interface ListEmojiProps {
  selectedEmoji: string;
  onEmojiSelect: (emojiType: string) => void;
}

export default function ListEmoji({
  selectedEmoji,
  onEmojiSelect,
}: ListEmojiProps) {
  const emojis: Emoji[] = [
    { uncolored: Veryhappy, colored: ColVeryhappy, type: "VeryHappy" },
    { uncolored: Happy, colored: ColHappy, type: "Happy" },
    { uncolored: Mid, colored: ColMid, type: "Mid" },
    { uncolored: Sad, colored: ColSad, type: "Sad" },
    { uncolored: Angry, colored: ColAngry, type: "Angry" },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {emojis.map(({ uncolored, colored, type }, index) => (
        <button
          key={index}
          onClick={() => onEmojiSelect(type)}
          className="w-10 h-10 rounded-full flex items-center justify-center border-none"
        >
          <img
            src={selectedEmoji === type ? colored : uncolored}
            alt={type}
            className="w-6 h-6"
          />
        </button>
      ))}
    </div>
  );
}
