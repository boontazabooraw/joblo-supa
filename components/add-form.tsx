"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

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
      </form>
    </div>
  );
}
