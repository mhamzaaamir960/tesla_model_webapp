import React from "react";
import { IoIosBluetooth, IoMdClose, IoIosAdd } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

function Bluetooth() {
  const handleBluetooth = () => {
    console.log("Clicked");
  };
  return (
    <Dialog className="relative w-full ">
      <DialogTrigger className="p-2" asChild>
        <button onClick={handleBluetooth}>
          <IoIosBluetooth className="text-xl text-gray-500 cursor-pointer" />{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[800px] absolute -right-72 top-[22rem] p-5 bg-white">
        <DialogHeader className="">
          <div className="flex justify-between items-center">
            <DialogClose>
              <IoMdClose className=" text-[22px]  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100  hover:text-gray-500  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" />
            </DialogClose>
            <DialogTitle className="text-lg font-medium">
              Bluetooth Settings
            </DialogTitle>
            <div>
              <PiWarningCircle className="text-[22px]  mr-2 text-gray-500" />
            </div>
          </div>
        </DialogHeader>

        {/* body */}
        <div className="h-[2px] bg-gray-100 rounded" />
        <div className="flex gap-x-4">
          <div className="w-[400px]  h-fit  items-center">
            <div className="flex justify-between w-full">
              <h4 className="text-base font-medium">Add new Device</h4>
              <IoIosAdd className="text-2xl font-semibold mt-1 cursor-pointer" />
            </div>
            <p className="text-sm mt-4 text-gray-500">No devices connected</p>
          </div>
          <div>
            <div>
              <div className="space-y-4 ">
                <div className="flex flex-row items-start justify-between rounded-lg p-2">
                  <Switch className="" />
                  <div className=" ml-4">
                    <h4 className="text-base text-black font-medium">
                      Priority Device
                    </h4>
                    <p className="text-base text-gray-500 ">
                      Car will attempt to connect to priority device before
                      others
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-start rounded-lg p-2 ">
                  <Switch className="" />
                  <div className="ml-4">
                    <h4 className="text-base text-black font-medium">
                      Sync Contacts and Recent Calls
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start justify-between rounded-lg p-2 ">
                  <Switch className="" />
                  <div className=" ml-4">
                    <h4 className="text-base text-black font-medium">
                      Sync Messages
                    </h4>
                    <p className="text-base text-gray-500  ">
                      Due to limitations of Bluetooth support from your device,
                      you will not be able to send group messages
                    </p>
                    <h4 className="text-base mt-5 text-black font-medium">
                      Chime on new Message
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-evenly mt-16">
              <button className="border text-sm px-8 rounded py-2 font-medium">
                Forget Device
              </button>
              <button className="border text-sm px-8 rounded py-2 font-medium">
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
