"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

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
        <div className="workmode-wrapper">
          <RadioGroup.Root>
            <div>
              <RadioGroup.Item
                className="RadioGroupItem"
                value="Full-time"
                id="full-time"
              >
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="full-time">
                Full-time
              </label>
            </div>
            <div>
              <RadioGroup.Item
                className="RadioGroupItem"
                value="Part-time"
                id="part-time"
              >
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="part-time">
                Part-time
              </label>
            </div>
          </RadioGroup.Root>
        </div>
        <div className="workplacetype-wrapper">
          <Select.Root>
            <Select.Trigger
              className="SelectTrigger"
              aria-label="Work Arrangement"
            >
              <Select.Value placeholder="Select workplace type..." />
              <Select.Icon className="SelectIcon">
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="SelectContent">
                <Select.ScrollUpButton className="SelectScrollButton">
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="SelectViewport">
                  <Select.Label className="SelectLabel">
                    Workplace Type
                  </Select.Label>
                  <Select.Item value="On-site">On-site</Select.Item>
                  <Select.Item value="Remote">Remote</Select.Item>
                  <Select.Item value="Hybrid">Hybrid</Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </form>
    </div>
  );
}
