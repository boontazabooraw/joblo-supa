"use client";

import { ClipboardPlus } from "lucide-react";

interface AddButtonProps {
  className?: string;
  size?: number;
}

const AddButton = ({ className, size }: AddButtonProps) => {
  return (
    <button className={className}>
      <ClipboardPlus size={size} strokeWidth={1} />
    </button>
  );
};

export default AddButton;
