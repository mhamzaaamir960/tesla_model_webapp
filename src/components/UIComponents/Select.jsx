import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectBar({ heading, description, className }) {
  return (
    <div
      className={`${className} w-full flex  flex-col gap-y-4 justify-start mt-8`}
    >
      {heading && <span className="font-medium text-2xl">{heading}</span>}
      <Select className="border-none">
        <SelectTrigger className="w-[300px] text-2xl py-6 ">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent >
          <SelectGroup >
            <SelectLabel className='  '>
              <span className="text-xl">Select Language</span>
            </SelectLabel>
            <SelectItem value="apple" >English</SelectItem>
            <SelectItem value="banana">Spanish</SelectItem>
            <SelectItem value="blueberry">Chinese</SelectItem>
            <SelectItem value="grapes">Arabic</SelectItem>
            <SelectItem value="pineapple">Russian</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {description && <p className="text-xl">{description}</p>}
    </div>
  );
}

export default SelectBar;
