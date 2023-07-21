import React from "react";
import "./InputStyles.css";

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({ onChange, placeholder, type, value }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
