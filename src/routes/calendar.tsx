import BottomNavbar from "../components/bottomNavbar";
import CalendarComponent from "../components/calendarCom";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center bg-[#f1f1f1] px-4 pt-6 pb-10 space-y-6">
      <CalendarComponent />
      <BottomNavbar />
    </div>
  );
}
