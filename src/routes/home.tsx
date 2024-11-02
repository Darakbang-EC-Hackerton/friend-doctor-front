import TodayEmoji from "../components/todayEmoji";
import TodayPoem from "../components/todayPoem";

export default function Home() {
  return (
    <div className="w-full h-full relative bg-[#f1f1f1] flex">
      <TodayEmoji />
      <TodayPoem />
    </div>
  );
}
