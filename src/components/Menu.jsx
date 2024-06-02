import { IoToggle, IoCarSportSharp } from "react-icons/io5";
import { MdBolt, MdRoute } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { BiSolidLockAlt, BiRectangle } from "react-icons/bi";
import { TbSunFilled, TbNavigationFilled } from "react-icons/tb";
import { PiWarningCircle, PiWrenchFill } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";

export const MenuData = [
  {
    key: "1",
    icon: (
      <div className="">
        <IoToggle className="text-[18px] mr-2 " />
      </div>
    ),
    label: "Controls",
  },
  {
    key: "2",
    icon: (
      <div className="">
        <IoCarSportSharp className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Pedals & Steering",
  },
  {
    key: "3",
    icon: (
      <div className="">
        <MdBolt className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Charging",
  },
  {
    key: "4",
    icon: (
      <div className="">
        <GiSteeringWheel className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Autopilot",
  },
  {
    key: "5",
    icon: (
      <div className="">
        <BiSolidLockAlt className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Locks",
  },
  {
    key: "6",
    icon: (
      <div className="">
        <TbSunFilled className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Lights",
  },
  {
    key: "7",
    icon: (
      <>
        <div class="absolute left-[27px] top-[19px] w-[8px] h-[1px] bg-gray-500 -rotate-45"></div>
        <BiRectangle class=" text-[18px] left-0 flex items-center justify-center mr-2"></BiRectangle>
      </>
    ),
    label: "Display",
  },
  {
    key: "8",
    icon: (
      <div className="">
        <MdRoute className="text-[18px]  mr-2 scale-x-[-1]" />
      </div>
    ),
    label: "Trips",
  },
  {
    key: "9",
    icon: (
      <div className="">
        <TbNavigationFilled className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Navigation",
  },
  {
    key: "10",
    icon: (
      <div className="">
        <PiWarningCircle className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Safety",
  },
  {
    key: "11",
    icon: (
      <div className="">
        <PiWrenchFill className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Service",
  },
  {
    key: "12",
    icon: (
      <div className="">
        <LiaDownloadSolid className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Software",
  },
];
