import React from "react";

export interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

export default function Input({ label, type, placeholder }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </>
  );
}
