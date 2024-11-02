import Veryhappy from "../assets/SVG/veryhappy_uncolor.svg";
import Happy from "../assets/SVG/happy_uncolor.svg";
import Mid from "../assets/SVG/mid_uncolor.svg";
import Sad from "../assets/SVG/sad_uncolor.svg";
import Angry from "../assets/SVG/angry_uncolor.svg";

export default function ListEmoji() {
  return (
    <div className="w-[304px] h-12 left-[21px] top-[156px] absolute">
      <div className="w-12 h-12 left-[256px] top-0 absolute bg-[#fa896b]/40 rounded-[100px]">
        <img src={Veryhappy} className="w-12 h-12" />
      </div>
      <div className="w-12 h-12 left-[194px] top-0 absolute bg-[#8c70c2]/40 rounded-[100px]">
        <img src={Happy} className="w-12 h-12" />
      </div>
      <div className="w-12 h-12 left-[65px] top-0 absolute bg-[#6a97c8]/40 rounded-[100px]">
        <img src={Mid} className="w-12 h-12" />
      </div>
      <div className="w-12 h-12 left-0 top-0 absolute bg-[#ecb446]/40 rounded-[100px]">
        <img src={Sad} className="w-12 h-12" />
      </div>
      <div className="w-12 h-12 left-[130px] top-0 absolute bg-[#d7658f]/40 rounded-[100px]">
        <img src={Angry} className="w-12 h-12" />
      </div>
    </div>
  );
}
