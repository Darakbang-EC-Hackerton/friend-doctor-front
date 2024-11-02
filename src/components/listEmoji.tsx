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

export default function ListEmoji({ selectedEmoji, onEmojiSelect }) {
  const emojis = [
    { uncolored: Veryhappy, colored: ColVeryhappy, name: "VeryHappy" },
    { uncolored: Happy, colored: ColHappy, name: "Happy" },
    { uncolored: Mid, colored: ColMid, name: "Mid" },
    { uncolored: Sad, colored: ColSad, name: "Sad" },
    { uncolored: Angry, colored: ColAngry, name: "Angry" },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {emojis.map(({ uncolored, colored, name }, index) => (
        <button
          key={index}
          onClick={() => onEmojiSelect(name)}
          className="w-10 h-10 rounded-full flex items-center justify-center border-none"
        >
          <img
            src={selectedEmoji === name ? colored : uncolored}
            alt={name}
            className="w-6 h-6"
          />
        </button>
      ))}
    </div>
  );
}
