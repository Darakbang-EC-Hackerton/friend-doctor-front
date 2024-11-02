import BottomNavbar from "../components/bottomNavbar";
import TodayEmoji from "../components/todayEmoji";
import TodayPoem from "../components/todayPoem";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#f1f1f1] px-4 pt-6 pb-24 space-y-6">
      <TodayEmoji />
      <TodayPoem />
      <BottomNavbar />
    </div>
  );
}
