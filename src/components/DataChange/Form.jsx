import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useContextProvider } from "@/context/Context";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

function Form({ TriggerIcon }) {
  const { data, setData } = useContextProvider();
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(formData));
    setData(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit bg-gray-200 border-none  ">
        <button>{TriggerIcon}</button>
      </DialogTrigger>
      <DialogContent className="w-[500px] min-h-[300px] absolute top-80 right-0 ">
        <DialogHeader>
          <DialogTitle className='text-3xl'>Change the Data</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-3">
          <div className="border-2 border-gray-300 rounded">
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Name"
              className="bg-transparent outline-none p-2 text-2xl"
            />
          </div>
          <div className="border-2 border-gray-300 rounded">
            <input
              id="batteryStatus"
              required
              value={formData.batteryStatus}
              onChange={handleChange}
              type="text"
              placeholder="Battery Status"
              className="bg-transparent outline-none p-2 text-2xl"
            />
          </div>
          <div className="border-2 border-gray-300 rounded">
            <input
              id="temperature"
              value={formData.temperature}
              onChange={handleChange}
              required
              type="text"
              placeholder="Temperature"
              className="bg-transparent outline-none p-2 text-2xl"
            />
          </div>
        </div>

        <DialogFooter className={'flex items-center'}>
          <DialogClose className="text-2xl mr-6 mt-4"> Close</DialogClose>
          <button
            onClick={handleClick}
            type="submit"
            className="bg-black px-2 py-1 text-white rounded text-2xl mt-4"
          >
            Save Changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Form;
