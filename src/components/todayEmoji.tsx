import ListEmoji from "./listEmoji";

export default function TodayEmoji() {
  return (
    <div className="w-[344px] h-[257px] absolute bg-[#f2f2f2] rounded-[15px] shadow">
      <div className="w-[195px] h-[45px] absolute text-[#30796c] text-[40px] font-medium font-['Kantumruy Pro']">
        Hi, James
      </div>
      <div className="w-[290px] h-[35px] absolute text-[#30796c] text-base font-medium font-['Kantumruy Pro']">
        How are you feeling today?
      </div>
      <ListEmoji />
    </div>
  );
}
