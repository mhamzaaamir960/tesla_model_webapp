import React from "react";
import { IoIosBluetooth, IoMdClose, IoIosAdd } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import SwitchButton from "@/components/UIComponents/SwitchButton";

function Bluetooth() {
  const handleBluetooth = () => {
    console.log("Clicked");
  };
  return (
    <Dialog className="relative w-full ">
      <DialogTrigger className="p-2" asChild>
        <button onClick={handleBluetooth}>
          <IoIosBluetooth className="text-4xl text-gray-500 cursor-pointer" />{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-[1000px] absolute -right-96 top-[30rem] p-5 bg-white">
        <DialogHeader className="w-full">
          <div className="flex justify-between items-center w-full">
            <DialogClose>
              <IoMdClose className=" text-4xl rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100  hover:text-gray-500  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" />
            </DialogClose>
            <DialogTitle className="text-3xl font-medium">
              Bluetooth Settings
            </DialogTitle>
            <div>
              <PiWarningCircle className="text-4xl  mr-2 text-gray-500" />
            </div>
          </div>
        </DialogHeader>

        {/* body */}
        <div className="h-[2px] w-[800px] bg-gray-100 rounded " />
        <div className="flex gap-x-4">
          <div className="w-[500px]  h-fit  items-center">
            <div className="flex justify-between w-full">
              <h4 className="text-3xl font-medium">Add new Device</h4>
              <IoIosAdd className="text-4xl font-semibold mt-1 cursor-pointer" />
            </div>
            <p className="text-xl mt-4 text-gray-500">No devices connected</p>
          </div>

          <div className="w-full flex flex-col ">
            <div>
              <div className="space-y-4 ">
                <SwitchButton
                  heading={"Priority Device"}
                  description={
                    " Car will attempt to connect to priority device before others"
                  }
                />

                <SwitchButton heading={"Sync Contacts and Recent Calls"} />
                <SwitchButton
                  heading={"Sync Messages"}
                  description={
                    "Due to limitations of Bluetooth support from your device, you will not be able to send group messages"
                  }
                />

                <p className="text-2xl mt-5 ml-5 text-black font-medium">
                  Chime on new Message
                </p>
              </div>
            </div>

            <div className="flex w-full justify-evenly mt-16">
              <button className="border  text-2xl px-8 rounded py-2 font-medium">
                Forget Device
              </button>
              <button className="border text-2xl px-8 rounded py-2 font-medium">
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Bluetooth;
