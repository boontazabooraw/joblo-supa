"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import React from "react";

export default function AddForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form className="flex flex-col gap-2 py-2 px-4">
        <div>
          <Label htmlFor="position">Position</Label>
          <Input id="position" type="text" placeholder="Serial Lunch Eater" />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            placeholder="Doofensmirtz Evil Inc."
          />
        </div>
        <div>
          <Label htmlFor="company">Location</Label>
          <Input
            id="location"
            type="text"
            placeholder="9297 Polly Parkway, Danville"
          />
        </div>
        <div>
          <Label htmlFor="company">Job Posting URL</Label>
          <Input
            id="posturl"
            type="url"
            placeholder="https://danvillejobs.com"
          />
        </div>

        <div className="workmode-wrapper flex gap-2 py-2">
          <label
            className="flex items-center p-2 border dark:border-white border-black rounded-lg cursor-pointer w-64 hover:bg-black/10 peer-checked:bg-black"
            htmlFor="workmode1"
          >
            <div className="flex-grow">
              <p className="text-md">Full-Time</p>
            </div>
            <input
              className="w-5 h-5 accent-slate-600"
              type="radio"
              name="workmode"
              id="workmode1"
            />
          </label>
          <label
            className="flex items-center p-2 border dark:border-white border-black rounded-lg cursor-pointer w-64 hover:bg-black/10"
            htmlFor="workmode2"
          >
            <div className="flex-grow">
              <p className="text-md">Part-Time</p>
            </div>
            <input
              className="w-5 h-5 accent-slate-600"
              type="radio"
              name="workmode"
              id="workmode2"
            />
          </label>
        </div>
        <div className="arrangement-wrapper flex gap-2">
          <label
            className="flex items-center p-2 border dark:border-white border-black rounded-lg cursor-pointer w-64 hover:bg-black/10"
            htmlFor="arrangement1"
          >
            <div className="flex-grow">
              <p className="text-md">On-site</p>
            </div>
            <input
              className="w-5 h-5 accent-slate-600"
              type="radio"
              name="arrangement"
              id="arrangement1"
            />
          </label>
          <label
            className="flex items-center p-2 border dark:border-white border-black rounded-lg cursor-pointer w-64 hover:bg-black/10"
            htmlFor="arrangement2"
          >
            <div className="flex-grow">
              <p className="text-md">Remote</p>
            </div>
            <input
              className="w-5 h-5 accent-slate-600"
              type="radio"
              name="arrangement"
              id="arrangement2"
            />
          </label>
          <label
            className="flex items-center p-2 border dark:border-white border-black rounded-lg cursor-pointer w-64 hover:bg-black/10"
            htmlFor="arrangement3"
          >
            <div className="flex-grow">
              <p className="text-md">Hybrid</p>
            </div>
            <input
              className="w-5 h-5 accent-slate-600"
              type="radio"
              name="arrangement"
              id="arrangement3"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
