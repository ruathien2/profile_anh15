import React from "react";
import { useController } from "react-hook-form";

export default function Input({ control, name, placeholder, type, ...props }) {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  console.log(field);
  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      value={field.value}
      {...field}
      {...props}
    />
  );
}
