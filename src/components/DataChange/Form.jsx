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
      <DialogContent className="sm:max-w-[425px] absolute top-80 right-0 ">
        <DialogHeader>
          <DialogTitle>Change the Data</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-3">
          <div className="border rounded">
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Name"
              className="bg-transparent outline-none p-2"
            />
          </div>
          <div className="border rounded">
            <input
              id="batteryStatus"
              required
              value={formData.batteryStatus}
              onChange={handleChange}
              type="text"
              placeholder="Battery Status"
              className="bg-transparent outline-none p-2"
            />
          </div>
          <div className="border rounded">
            <input
              id="temperature"
              value={formData.temperature}
              onChange={handleChange}
              required
              type="text"
              placeholder="Temperature"
              className="bg-transparent outline-none p-2"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={handleClick}
            className="bg-black px-4 py-2 text-white rounded"
          >
            Save Changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Form;
