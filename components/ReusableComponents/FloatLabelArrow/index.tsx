import React, { useState } from "react";
import Image from "next/image";
import {ARROWDOWN} from "@/constants/images";

interface FloatLabelProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

const FloatLabelArrow = ({ children, label, value  }: FloatLabelProps) => {
  const [focus, setFocus] = useState(false);

  const labelClass =
    focus || (value && value.length !== 0) ? "label label-float" : "label";

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label} {<Image src={ARROWDOWN} height={18} className="arrow-down" alt="" />}</label>
    </div>
  );
};

export default FloatLabelArrow;
