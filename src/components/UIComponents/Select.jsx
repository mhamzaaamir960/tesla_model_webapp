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
      className={`${className} w-full flex  flex-col gap-y-2 justify-start mt-5`}
    >
      {heading && <span className="font-medium">{heading}</span>}
      <Select className="border-none ">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Language</SelectLabel>
            <SelectItem value="apple">English</SelectItem>
            <SelectItem value="banana">Spanish</SelectItem>
            <SelectItem value="blueberry">Chinese</SelectItem>
            <SelectItem value="grapes">Arabic</SelectItem>
            <SelectItem value="pineapple">Russian</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SelectBar;
