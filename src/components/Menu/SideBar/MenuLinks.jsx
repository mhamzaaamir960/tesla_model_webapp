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
      <div>
        <IoToggle className="text-[18px] mr-2 " />
      </div>
    ),
    label: "Controls",
    link: "/",
  },
  {
    key: "2",
    icon: (
      <div>
        <IoCarSportSharp className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Pedals & Steering",
    link: "/pedals-steering",
  },
  {
    key: "3",
    icon: (
      <div>
        <MdBolt className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Charging",
    link: "/charging",
  },
  {
    key: "4",
    icon: (
      <div>
        <GiSteeringWheel className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Autopilot",
    link: "/autopilot",
  },
  {
    key: "5",
    icon: (
      <div>
        <BiSolidLockAlt className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Locks",
    link: "/locks",
  },
  {
    key: "6",
    icon: (
      <div>
        <TbSunFilled className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Lights",
    link: "/lights",
  },
  {
    key: "7",
    icon: (
      <>
        <div className="absolute left-[27px] top-[19px] w-[8px] h-[1px] bg-gray-500 -rotate-45"></div>
        <BiRectangle className=" text-[18px] left-0 flex items-center justify-center mr-2"></BiRectangle>
      </>
    ),
    label: "Display",
    link: "/display",
  },
  {
    key: "8",
    icon: (
      <div>
        <MdRoute className="text-[18px]  mr-2 scale-x-[-1]" />
      </div>
    ),
    label: "Trips",
    link: "/trips",
  },
  {
    key: "9",
    icon: (
      <div>
        <TbNavigationFilled className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Navigation",
    link: "/navigation",
  },
  {
    key: "10",
    icon: (
      <div>
        <PiWarningCircle className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Safety",
    link: "/safety",
  },
  {
    key: "11",
    icon: (
      <div>
        <PiWrenchFill className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Service",
    link: "/service",
  },
  {
    key: "12",
    icon: (
      <div>
        <LiaDownloadSolid className="text-[18px]  mr-2" />
      </div>
    ),
    label: "Software",
    link: "/software",
  },
];
