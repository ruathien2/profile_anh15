import React from "react";

export default function Label({ title, ...props }) {
  return <label {...props}>{title}</label>;
}
