export default function TodayPoem() {
  return (
    <>
      <div className="w-[284px] h-[45px] text-[#8ca15e] text-[34px] font-medium font-['Kantumruy Pro']">
        Today’s Poem
      </div>
      <div className="w-[344px] h-[366px] bg-[#f2f2f2] rounded-[15px] shadow">
        <div className="w-[221px] h-11 text-center text-[#2e2e2e] text-[34px] font-medium font-['Kantumruy Pro']">
          Title
        </div>
        <div className="w-[104px] h-[22px] text-center text-[#2e2e2e] text-[15px] font-medium font-['Kantumruy Pro']">
          author
        </div>
        <div className="w-[247px] h-[226px] text-[#2e2e2e] text-[15px] font-medium font-['Kantumruy Pro']">
          content
        </div>
      </div>
    </>
  );
}
