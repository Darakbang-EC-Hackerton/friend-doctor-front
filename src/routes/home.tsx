import BottomNavbar from "../components/bottomNavbar";
import TodayEmoji from "../components/todayEmoji";
import TodayPoem from "../components/todayPoem";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <TodayEmoji />
      <TodayPoem />
      <BottomNavbar />
    </div>
  );
}
