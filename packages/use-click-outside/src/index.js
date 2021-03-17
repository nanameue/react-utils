import { useRef } from "react";

const useClickOutside = () => {
  const ref = useRef(null);
  // todo:
  return {
    ref,
  };
};

export default useClickOutside;
