import React, { useState } from "react";

interface FloatLabelProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

const FloatLabel = ({ children, label, value  }: FloatLabelProps) => {
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
      <label className={labelClass}>{label} </label>
    </div>
  );
};

export default FloatLabel;
