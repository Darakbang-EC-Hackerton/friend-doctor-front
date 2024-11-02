import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import veryhappy from "../assets/SVG/veryhappy_color.svg";
import happy from "../assets/SVG/happy_color.svg";
import mid from "../assets/SVG/mid_color.svg";
import sad from "../assets/SVG/sad_color.svg";
import angry from "../assets/SVG/angry_color.svg";
import { fetchMonthlyEmotion } from "../api/apiRequest";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [emotions, setEmotions] = useState<{ [date: string]: string }>({});

  useEffect(() => {
    const loadEmotion = async (year: number, month: number) => {
      try {
        const data = await fetchMonthlyEmotion(year, month);
        if (data.result && data.result.emotions) {
          const { year, month, emotions } = data.result;

          const emotionsByDate: { [date: string]: string } = {};
          emotions.forEach((entry: { day: number; type: string }) => {
            const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(
              entry.day
            ).padStart(2, "0")}`;
            emotionsByDate[dateStr] = entry.type;
          });

          setEmotions(emotionsByDate);
        }
      } catch (error) {
        console.error("Error fetching emotions:", error);
      }
    };
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    loadEmotion(year, month);
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
        return null;
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
      <h2 className="mb-12">Hello Calendar</h2>
      <Calendar
        onChange={onDateChange}
        onActiveStartDateChange={onActiveStartDateChange} // Trigger fetch on month change
        formatDay={(locale, date) => moment(date).format("DD")}
        value={selectedDate}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
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
          }
        }}
      />
    </div>
  );
}
