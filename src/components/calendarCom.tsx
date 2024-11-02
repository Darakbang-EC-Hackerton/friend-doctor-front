import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import veryhappy from "../assets/SVG/veryhappy_color.svg";
import happy from "../assets/SVG/happy_color.svg";
import mid from "../assets/SVG/mid_color.svg";
import sad from "../assets/SVG/sad_color.svg";
import angry from "../assets/SVG/angry_color.svg";
import empty from "../assets/SVG/Empty.svg";
import { fetchMonthlyEmotion } from "../api/apiRequest";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [emotions, setEmotions] = useState<{ [date: string]: string }>({});
  const [emotionCounts, setEmotionCounts] = useState<{
    [emotion: string]: number;
  }>({
    "매우 행복": 0,
    행복: 0,
    보통: 0,
    슬픔: 0,
    "매우 슬픔": 0,
  });
  useEffect(() => {
    const loadEmotion = async (year: number, month: number) => {
      try {
        const data = await fetchMonthlyEmotion(year, month);
        if (data.result && data.result.emotions) {
          const { year, month, emotions } = data.result;

          const emotionsByDate: { [date: string]: string } = {};
          const counts: { [emotion: string]: number } = {
            "매우 행복": 0,
            행복: 0,
            보통: 0,
            슬픔: 0,
            "매우 슬픔": 0,
          };
          emotions.forEach((entry: { day: number; type: string }) => {
            const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(
              entry.day
            ).padStart(2, "0")}`;
            emotionsByDate[dateStr] = entry.type;
            if (counts[entry.type] !== undefined) {
              counts[entry.type] += 1;
            }
          });

          setEmotions(emotionsByDate);
          setEmotionCounts(counts);
        }
      } catch (error) {
        console.error("Error fetching emotions:", error);
      }
    };
    loadEmotion(selectedDate.getFullYear(), selectedDate.getMonth() + 1);
  }, [selectedDate]);

  const getEmotionImage = (emotion: string) => {
    switch (emotion) {
      case "매우 행복":
        return veryhappy;
      case "행복":
        return happy;
      case "보통":
        return mid;
      case "슬픔":
        return sad;
      case "매우 슬픔":
        return angry;
      default:
        return empty;
    }
  };

  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const onActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date;
  }) => {
    setSelectedDate(activeStartDate || new Date());
  };

  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-lg">
      <h2 className="mb-12 font-[Pretendard-Regular]">Emotion Calendar</h2>
      <Calendar
        onChange={onDateChange}
        onActiveStartDateChange={onActiveStartDateChange} // Trigger fetch on month change
        formatDay={(locale, date) => moment(date).format("DD")}
        value={selectedDate}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date }) => {
          const dateStr = moment(date).format("YYYY-MM-DD");
          const emotion = emotions[dateStr];

          if (emotion) {
            const emotionImage = getEmotionImage(emotion);
            return (
              <div className="flex justify-center items-center relative h-full w-full">
                {emotionImage && (
                  <img src={emotionImage} alt={emotion} className="h-6 w-6" />
                )}
              </div>
            );
          } else {
            const emotionImage = getEmotionImage(empty);
            return (
              <div className="flex justify-center items-center relative h-full w-full">
                {emotionImage && (
                  <img src={emotionImage} alt={emotion} className="h-6 w-6" />
                )}
              </div>
            );
          }
        }}
      />
      <div className="mt-4 w-full">
        <ul className="space-y-2">
          {Object.keys(emotionCounts).map((emotion) => (
            <li
              key={emotion}
              className="flex justify-between font-[Pretendard-Regular]"
            >
              <span>{emotion}</span>
              <span className="flex right-0 gap-5">
                <img src={getEmotionImage(emotion)} className="w-6 h-6" />
                {emotionCounts[emotion]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
