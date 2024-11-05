import React, { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  // eslint-disable-next-line no-undef
  const [show, setShow] = useState(true);
  // eslint-disable-next-line no-undef
  const nodeRef = useRef();
  // eslint-disable-next-line no-undef
  useEffect((e) => {
    const handleClickOutSide = (e) => {
      const temp = !nodeRef.current.contains(e.target);
      if (nodeRef.current && temp) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  });
  return {
    show,
    setShow,
    nodeRef,
  };
}
